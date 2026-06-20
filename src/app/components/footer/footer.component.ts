import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socials = [
    { name: 'GitHub', url: 'https://github.com/Alikadze' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/rezoalikadze' },
    { name: 'Email', url: 'mailto:ralikadze@gmail.com' },
  ];
}
