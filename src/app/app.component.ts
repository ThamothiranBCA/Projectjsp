import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaincontComponent } from "./maincont/maincont.component";
import { DetailComponent } from './detail/detail.component';
import { TEAMComponent } from './team/team.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, MaincontComponent,DetailComponent,TEAMComponent]
})
export class AppComponent {
  title = 'project';
}


