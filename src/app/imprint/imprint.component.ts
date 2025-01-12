import { CommonModule } from '@angular/common';
import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0); // Positioniere direkt oben, wenn die Komponente geladen wird
  }

  // Funktion zum Übersetzen von Text
  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
