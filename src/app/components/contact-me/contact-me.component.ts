import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  email = 'ralikadze@gmail.com';

  items: ContactItem[] = [
    { label: 'Email', value: 'ralikadze@gmail.com', href: 'mailto:ralikadze@gmail.com' },
    { label: 'GitHub', value: 'github.com/Alikadze', href: 'https://github.com/Alikadze' },
    { label: 'LinkedIn', value: 'linkedin.com/in/rezo-alikadze', href: 'https://linkedin.com/in/rezo-alikadze' },
  ];
}
