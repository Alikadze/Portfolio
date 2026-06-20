import { Component, AfterViewInit, inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
    selector: 'app-layout',
    imports: [CommonModule, HeaderComponent, FooterComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ContactMeComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent implements AfterViewInit {
    platformId = inject(PLATFORM_ID);
    showScrollToTop = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (isPlatformBrowser(this.platformId)) {
            this.showScrollToTop = window.scrollY > 600;
        }
    }

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) return;

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }

    scrollToTop(): void {
        if (isPlatformBrowser(this.platformId)) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
