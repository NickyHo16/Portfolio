import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @Input() imprintSite = false;
  @Input() privacySite = false; // Neue Eingabevariable
  @ViewChild('menuToggleInput', { static: false }) menuToggleInput!: ElementRef;
  @ViewChildren('menuLink') menuLinks!: QueryList<ElementRef>;
  currentLanguage = 'en';

  //translation Service
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    // Sprache aus Local Storage wiederherstellen oder Standardsprache setzen
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      this.currentLanguage = storedLanguage;
    } else {
      this.currentLanguage = 'en'; // Standardsprache
      localStorage.setItem('language', this.currentLanguage);
    }

    this.translationService.setDefaultLanguage(this.currentLanguage);
  }

  ngAfterViewInit(): void {
    this.menuLinks.forEach((link: ElementRef) => {
      link.nativeElement.addEventListener('click', () => {
        this.menuToggleInput.nativeElement.checked = false;
      });
    });
  }

  navigateToSection() {
    const section = document.getElementById('header-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  //translation service
  switchLanguage(language: string): void {
    // Sprache wechseln, speichern und aktuellen Zustand aktualisieren
    this.translationService.useLanguage(language);
    this.currentLanguage = language;
    localStorage.setItem('language', language); // Sprache im Local Storage speichern
    console.log(`Language switched to: ${language}`);
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
