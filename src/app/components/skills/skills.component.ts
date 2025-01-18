import { isPlatformBrowser } from '@angular/common';
import {AfterViewInit, Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {AboutMeInfoComponent} from "../about-me-info/about-me-info.component";

@Component({
    selector: 'app-skills',
    imports: [
        AboutMeInfoComponent
    ],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  platformId = inject(PLATFORM_ID);

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                this.gsapAnimation1();
                this.gsapAnimation2();
            }, 200);
        }
    }

    ngOnInit(): void {
        gsap.registerPlugin(ScrollTrigger);
        gsap.install(ScrollTrigger);
    }

    gsapAnimation1(): void {
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

    gsapAnimation2(): void {
        gsap.from('.about-me', {
            x: -700,
            scrollTrigger: {
                trigger: '.about-me',
                start: 'top 150%',
                end: 'bottom 130%',
                scrub: 1,
            }
        });
    }
}
