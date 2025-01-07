import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
//import { StartsiteComponent } from './startsite/startsite.component';
//import { MailIconsComponent } from './mail-icons/mail-icons.component';
//import { AboutMeComponent } from './about-me/about-me.component';
//import { NavbarComponent } from './navbar/navbar.component';
//import { MySkillsComponent } from './my-skills/my-skills.component';
//import { MyWorksHeaderComponent } from './my-works-header/my-works-header.component';
//import { JoinComponent } from './join/join.component';
//import { KochweltComponent } from './kochwelt/kochwelt.component';
//import { ContactComponent } from './contact/contact.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FooterComponent } from './footer/footer.component';
//import { ImprintComponent } from './imprint/imprint.component';


import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';

// Factory für den Loader
//export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
 // return new TranslateHttpLoader(http, './assets/i18n/', '.json');
//}


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

//export const appConfig: ApplicationConfig = {
  //providers: [
  //  provideRouter(routes),
   // provideHttpClient(),
   // {
   //   provide: TranslateLoader,
    //  useFactory: HttpLoaderFactory,
    //  deps: [HttpClient],
  //  },
 // ],
//};

