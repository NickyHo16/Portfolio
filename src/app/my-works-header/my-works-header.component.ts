import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-my-works-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-works-header.component.html',
  styleUrl: './my-works-header.component.scss'
})
export class MyWorksHeaderComponent  implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

}
