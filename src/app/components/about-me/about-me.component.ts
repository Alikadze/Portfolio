import { AfterViewInit, Component, inject } from '@angular/core';
import { gsap } from 'gsap';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-about-me',
    imports: [],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {  
      gsap.from('.info', {
        x: -500,
        opacity: 0,
        duration: 3,
        ease: 'power2.out'
      });
      gsap.from('.my-image', {
        x: 800,
        opacity: 0,
        duration: 3,
        ease: 'power2.out'
      });
      gsap.fromTo(".first-name", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.4 }
      );
    
      gsap.fromTo(".last-name", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.6 }
      );
      gsap.fromTo(".greet",
        { y: -40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 1 }
      );
      gsap.fromTo(".more-info",
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1.7 }
      );

      gsap.to(".first-name, .last-name", {
        color: "#155e75",
        delay: 2.5,
        duration: 1,
        repeat: -1,
        ease: "power1.inOut",
        yoyo: true,
        stagger: {
          each: 0.4,
          from: "start"
        }
      });
    }
  }

}
