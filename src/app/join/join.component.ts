import { CommonModule } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import Aos from 'aos';
//import AOS from "aos";

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent implements OnInit {

  ngOnInit(): void {
    Aos.init();
  }

}

