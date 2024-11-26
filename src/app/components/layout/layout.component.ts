import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";

@Component({
    selector: 'app-layout',
    imports: [HeaderComponent, FooterComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ContactMeComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {
}
