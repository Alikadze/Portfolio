import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.gsapAnimation();
      }, 200);
    }
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.install(ScrollTrigger);
  }

  gsapAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.install(ScrollTrigger);

    gsap.from('.about-me', {
      opacity: 0,
      duration: 7,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.about-me',
        start: 'top 80%', // Animation starts when the top of the element is at 80% of the viewport
        end: 'bottom -20%', // Animation ends when the bottom of the element is at the top of the viewport
        scrub: true, // Smooth animation while scrolling
      },
    });

    // Animate each line with its icon
    // gsap.from('.about-me .flex', {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   stagger: 0.3, // Stagger the animations for each line
    //   scrollTrigger: {
    //     trigger: '.about-me',
    //     start: 'top 90%',
    //     end: 'bottom 90%',
    //     scrub: true,
    //   },
    // });
    
    gsap.from('.skills', {
      x: 500,
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 130%',
        end: 'bottom 80%',
        scrub: 1,
      }
    });
  }
}
