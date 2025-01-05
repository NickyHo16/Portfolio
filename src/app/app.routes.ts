import { RouterModule, Routes } from '@angular/router';
import { StartsiteComponent } from './startsite/startsite.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', component: StartsiteComponent,},
    {path:'contact', component: ContactComponent,},
    {path:'imprint', component: ImprintComponent,}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
