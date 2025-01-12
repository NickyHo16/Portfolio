import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-el-pollo-loco',
  standalone: true,
  imports: [],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './el-pollo-loco.component.scss'
})
export class ElPolloLocoComponent {
  constructor(private translationService: TranslationService) {}

  // Funktion zum Übersetzen von Text
  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
