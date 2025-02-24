import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from "./aside/aside.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main/main.component";
import { AsidePanelComponent } from "./aside-panel/aside-panel.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsideComponent, FooterComponent, HeaderComponent, NavbarComponent, MainComponent, AsidePanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sprint2';
}
