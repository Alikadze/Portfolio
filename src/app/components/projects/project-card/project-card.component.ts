import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from "@angular/material/tooltip";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-project-card',
    imports: [
        MatIconModule,
        MatTooltip,
        NgClass
    ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
    heading = input('heading');
    imgSrc = input('./assets/images/github.png');
    githubURL = input('githubURL');
    projectURL = input('projectURL');
    borderColor = input('borderColor');
    headingColor = input('headingColor');
}
