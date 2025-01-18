import {AfterViewInit, Component, inject} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {isPlatformBrowser} from "@angular/common";
import {ProjectCardComponent} from "./project-card/project-card.component";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
    selector: 'app-projects',
    imports: [
        ProjectCardComponent,
        MatTooltipModule,
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
    PLATFORM_ID = inject(PLATFORM_ID);

    ngAfterViewInit() {
        gsap.registerPlugin(ScrollTrigger);

        if (isPlatformBrowser(this.PLATFORM_ID)) {
            gsap.utils.toArray('.main-container').forEach((container: any) => {
                const sections = container.querySelectorAll('.panel'); // Fix the selector to match your HTML

                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: 'power1.inOut',
                    scrollTrigger: {
                        trigger: container,
                        pin: true,
                        scrub: 1,
                        end: () => `+=${container.offsetWidth}`, // Adjust end dynamically
                    }
                });
            });
        }

    }
}
