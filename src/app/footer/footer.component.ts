import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ImprintComponent } from '../imprint/imprint.component';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ImprintComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router, private translationService: TranslationService) {}

  navigateToSection() {
    console.log('Navigating to imprint section');
    const section = document.getElementById('header-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Übersetzungsfunktion
  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }
  
}
