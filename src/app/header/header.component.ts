import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from "aos";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }



  navigateToSection() {
    const section = document.getElementById('contact-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
