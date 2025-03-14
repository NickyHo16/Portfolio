import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from "aos";
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-my-works-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-works-header.component.html',
  styleUrl: './my-works-header.component.scss'
})
export class MyWorksHeaderComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  // Funktion zum Übersetzen von Text
  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }

  ngOnInit(): void {
    AOS.init();
  }
}
