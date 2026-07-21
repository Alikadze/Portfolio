import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'MyBSU',
      description: 'Internal Admin dashboard for Academic Affairs Management System of BSU (Batumi Shota Rustaveli State University).',
      image: './assets/images/img_8.png',
      tech: ['Angular', 'Nebula UI', 'NgRx'],
      live: 'https://admin.mybsu.app/',
    },
    {
      title: 'BlackIt',
      description: 'IT company website with a clean portfolio showcase.',
      image: './assets/images/img_7.png',
      tech: ['Angular', 'PrimeNG'],
      live: 'https://www.blackit.ro',
    },
    {
      title: 'Distribo',
      description: 'An advanced order management system for distributors and wholesale companies.',
      image: './assets/images/img_6.png',
      tech: ['Angular', 'PrimeNG'],
      live: 'https://distribo.online/',
    },
    {
      title: 'RelatiQ Kids',
      description: 'A CRM for childcare centers to manage enrollments, billing and parent communication.',
      image: './assets/images/img_4.png',
      tech: ['Angular', 'Material UI'],
      live: 'https://relatiqkids.com/',
    },
    {
      title: 'Caesar Games',
      description: 'A modern gaming platform with an interactive, fully responsive user experience.',
      image: './assets/images/img_3.png',
      tech: ['Angular', 'NgRx'],
      live: 'https://beta.caesargames.net/',
    },
    {
      title: 'GMG Arch Group',
      description: 'A professional architecture firm website with a clean portfolio showcase.',
      image: './assets/images/img_2.png',
      tech: ['Angular', 'Material UI', 'Firebase'],
      live: 'https://gmg-arch-groupproduction.vercel.app/',
      github: 'https://github.com/Alikadze/GMG-Arch-group',
    },
    {
      title: 'Task Manager',
      description: 'A full-stack productivity app with real-time updates and cloud sync.',
      image: './assets/images/img.png',
      tech: ['Angular', 'Firebase', 'PWA'],
      live: 'https://task-manager-e76b7.web.app/',
      github: 'https://github.com/Alikadze/Task-Manager',
    },
    {
      title: 'Ecommerce Platform',
      description: 'A complete online shopping solution with cart management and secure payments.',
      image: './assets/images/img_1.png',
      tech: ['Angular', 'NgRx', 'Firebase'],
      live: 'https://ecommerce-44b58.web.app/',
      github: 'https://github.com/Alikadze/Ecommerce',
    },
  ];
}
