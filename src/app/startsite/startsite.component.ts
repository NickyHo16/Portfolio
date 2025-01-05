import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { MailIconsComponent } from '../mail-icons/mail-icons.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { MyWorksHeaderComponent } from "../my-works-header/my-works-header.component";
import { JoinComponent } from "../join/join.component";
import { KochweltComponent } from "../kochwelt/kochwelt.component";
import { ElPolloLocoComponent } from "../el-pollo-loco/el-pollo-loco.component";
import { ContactComponent } from "../contact/contact.component";
import { ImprintComponent } from '../imprint/imprint.component';


@Component({
    selector: 'app-startsite',
    standalone: true,
    templateUrl: './startsite.component.html',
    styleUrl: './startsite.component.scss',
    imports: [CommonModule, ImprintComponent, HeaderComponent, MailIconsComponent, AboutMeComponent, MySkillsComponent, MyWorksHeaderComponent, JoinComponent, KochweltComponent, ElPolloLocoComponent, ContactComponent]
})
export class StartsiteComponent {

}
