import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Alikadze',
      icon: 'code',
      emoji: '📱',
      bgColor: 'bg-gray-800 hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/rezo-alikadze',
      icon: 'work',
      emoji: '💼',
      bgColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Email',
      url: 'mailto:rezo.alikadze@gmail.com',
      icon: 'email',
      emoji: '📧',
      bgColor: 'bg-red-600 hover:bg-red-700'
    }
  ];
}