import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      title: 'Languages',
      skills: ['C#', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Frontend',
      skills: ['Angular', 'NgRx', 'RxJS', 'PrimeNG', 'Angular Material', 'GSAP', 'Tailwind CSS', 'SCSS'],
    },
    {
      title: 'Backend',
      skills: ['.NET', 'ASP.NET Core'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Firebase', 'Git', 'REST APIs', 'Postman'],
    },
  ];
}
