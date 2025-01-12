import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-mail-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mail-icons.component.html',
  styleUrl: './mail-icons.component.scss'
})
export class MailIconsComponent {
  constructor(private translationService: TranslationService) {}

  // Funktion zum Übersetzen von Text
  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
