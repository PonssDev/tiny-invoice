import { Component } from '@angular/core';
import { SectionHeroComponent } from '../../sections/section-hero/section-hero.component';
import { SectionHeaderComponent } from '../../sections/section-header/section-header.component';
import { SectionFooterComponent } from '../../sections/section-footer/section-footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SectionHeroComponent,
    SectionHeaderComponent,
    SectionFooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
