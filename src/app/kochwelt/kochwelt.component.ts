import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-kochwelt',
  standalone: true,
  imports: [],
  templateUrl: './kochwelt.component.html',
  styleUrl: './kochwelt.component.scss'
})
export class KochweltComponent {
  constructor(private translationService: TranslationService) {}

  // Funktion zum Übersetzen von Text
  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
