import { Component, OnInit, importProvidersFrom  } from '@angular/core';
import { provideRouter, RouterLink, Routes } from '@angular/router';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { StartsiteComponent } from './startsite/startsite.component';
import { HeaderComponent } from './header/header.component';
import { MailIconsComponent } from './mail-icons/mail-icons.component';
import { FooterComponent } from "./footer/footer.component";
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';
import { filter } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
//import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HttpClientModule, RouterLink, RouterOutlet, CommonModule, RouterModule , NavbarComponent, StartsiteComponent, HeaderComponent, MailIconsComponent, FooterComponent, ContactComponent, ImprintComponent],
    template: `
    <div>
      <button (click)="switchLanguage('en')">EN</button>
      <button (click)="switchLanguage('de')">DE</button>
      <h1>{{ 'TITLE' | translate }}</h1>
      <p>{{ 'DESCRIPTION' | translate }}</p>
    </div>
  `,
  })

export class AppComponent implements OnInit{
  title = 'ThisIsMyPortfolio';
  currentRouter = '';

  constructor(private router: Router){
  }

  //(private router: Router, private translate: TranslateService) {
    // Standard-Sprache setzen
//this.translate.setDefaultLang('en');
  //}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentRouter = event.urlAfterRedirects;
          console.log(event);
        }
      });
  }
  // Sprachumschaltung
  //switchLanguage(language: string) {
  //  this.translate.use(language);
  //}

}

