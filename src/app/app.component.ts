import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionHeaderComponent } from "./sections/section-header/section-header.component";
import { SectionFooterComponent } from "./sections/section-footer/section-footer.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SectionHeaderComponent,
    SectionFooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tiny-invoice';
}
