import { Component, AfterViewInit, inject, PLATFORM_ID, HostListener, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-layout',
    imports: [FooterComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ContactMeComponent, CommonModule, MatIconModule],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, AfterViewInit {
    platformId = inject(PLATFORM_ID);
    showScrollToTop = false;
    isLoading = true;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (isPlatformBrowser(this.platformId)) {
            this.showScrollToTop = window.pageYOffset > 300;
        }
    }

    ngOnInit(): void {
        // Simulate loading time
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            gsap.registerPlugin(ScrollTrigger);
            
            // Animate sections as they come into view
            gsap.utils.toArray('.section').forEach((section: any) => {
                gsap.fromTo(section, 
                    { 
                        opacity: 0, 
                        y: 50 
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }
    }

    scrollToTop(): void {
        if (isPlatformBrowser(this.platformId)) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
