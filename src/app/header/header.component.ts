import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from "aos";
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    AOS.init();
  }



  navigateToSection() {
    const section = document.getElementById('contact-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
