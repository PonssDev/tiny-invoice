import { Component } from '@angular/core';
import { SectionHeroComponent } from '../../sections/section-hero/section-hero.component';
import { SectionFeaturesComponent } from '../../sections/section-features/section-features.component';
import { SectionDemoComponent } from '../../sections/section-demo/section-demo.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SectionHeroComponent,
    SectionFeaturesComponent,
    SectionDemoComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
