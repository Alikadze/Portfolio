import { isPlatformBrowser } from '@angular/common';
import {AfterViewInit, Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-skills',
    imports: [
    ],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  platformId = inject(PLATFORM_ID);

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                this.setupAnimations();
            }, 200);
        }
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            gsap.registerPlugin(ScrollTrigger);
        }
    }

    private setupAnimations(): void {
        // Animate the main title
        gsap.fromTo('.skill-title', 
            {
                opacity: 0,
                y: -50,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.skill-title',
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate about card
        gsap.fromTo('.about-card', 
            {
                opacity: 0,
                x: -100,
                scale: 0.9
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.about-card',
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate skills showcase
        gsap.fromTo('.skills-showcase', 
            {
                opacity: 0,
                x: 100,
                scale: 0.9
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.skills-showcase',
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate skill chips
        gsap.utils.toArray('.skill-chip').forEach((chip: any, index: number) => {
            gsap.fromTo(chip, 
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: chip,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Animate floating shapes
        gsap.utils.toArray('.shape').forEach((shape: any) => {
            gsap.to(shape, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "none"
            });
        });

        // Add hover animations for skill chips
        gsap.utils.toArray('.skill-chip').forEach((chip: any) => {
            chip.addEventListener('mouseenter', () => {
                gsap.to(chip, {
                    scale: 1.1,
                    y: -5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            chip.addEventListener('mouseleave', () => {
                gsap.to(chip, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }
}
