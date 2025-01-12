import { CommonModule } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import Aos from 'aos';
import { TranslationService } from '../services/translation.service';
//import AOS from "aos";

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  // Funktion zum Übersetzen von Text
  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }

  ngOnInit(): void {
    Aos.init();
  }
}

