import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
