import { AfterViewInit, Component, inject } from '@angular/core';
import { gsap } from 'gsap';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {  
      gsap.from('.header', {
        y: -200,
        opacity: 0,
        duration: 3,
        ease: 'power2.out'
      });
    }
  }


}
