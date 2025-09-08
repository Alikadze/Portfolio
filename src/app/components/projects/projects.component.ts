import {AfterViewInit, Component, inject} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {isPlatformBrowser} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
    selector: 'app-projects',
    imports: [
        MatTooltipModule,
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
    PLATFORM_ID = inject(PLATFORM_ID);

    ngAfterViewInit() {
        if (isPlatformBrowser(this.PLATFORM_ID)) {
            gsap.registerPlugin(ScrollTrigger);

            // Wait a bit for the DOM to be ready
            setTimeout(() => {
                this.setupHorizontalScroll();
            }, 100);
        }
    }

    private setupHorizontalScroll() {
        const container = document.querySelector('.horizontal-scroll-container');
        const track = document.querySelector('.projects-track');
        const panels = document.querySelectorAll('.project-panel');

        if (!container || !track || panels.length === 0) {
            console.warn('Projects elements not found');
            return;
        }

        // Calculate the total width needed
        const totalWidth = panels.length * 100; // 100vw per panel
        
        // Set up the horizontal scroll animation
        const horizontalScroll = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                end: () => `+=${totalWidth}vw`,
                onUpdate: (self) => {
                    // Optional: Add progress indicator
                    console.log(`Scroll progress: ${Math.round(self.progress * 100)}%`);
                }
            }
        });

        // Animate individual project cards on scroll
        panels.forEach((panel, index) => {
            gsap.fromTo(panel.querySelector('app-project-card'), 
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: panel,
                        start: "left center",
                        end: "right center",
                        scrub: 1,
                        containerAnimation: horizontalScroll
                    }
                }
            );
        });

        // Animate the title
        gsap.fromTo('.glowing-text', 
            {
                opacity: 0,
                y: -50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.glowing-text',
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }
}
