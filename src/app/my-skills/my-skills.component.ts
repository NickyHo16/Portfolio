import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from "aos";
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  // Funktion zum Übersetzen von Text
  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }

  navigateToSection() {
    const section = document.getElementById('contact-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    AOS.init();
  }
}
