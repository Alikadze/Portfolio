import { Component, inject, OnInit, OnDestroy, HostListener, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

interface NavLink {
  id: string;
  label: string;
}

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  platformId = inject(PLATFORM_ID);

  links: NavLink[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  activeSection = 'about';
  scrolled = false;
  menuOpen = false;
  private scrollListener?: () => void;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = () => this.onScroll();
      window.addEventListener('scroll', this.scrollListener, { passive: true });
      this.onScroll();
    }
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 768) {
      this.closeMenu();
    }
  }

  private onScroll(): void {
    this.scrolled = window.scrollY > 20;
    const offset = window.scrollY + 120;

    for (const link of this.links) {
      const el = document.getElementById(link.id);
      if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
        this.activeSection = link.id;
        break;
      }
    }
  }

  goTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection = id;
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.menuOpen ? 'hidden' : '';
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
