import { Component } from '@angular/core';
import { SectionDemoComponent } from '../../sections/section-demo/section-demo.component';
import { SectionFeaturesComponent } from '../../sections/section-features/section-features.component';
import { SectionHeroComponent } from '../../sections/section-hero/section-hero.component';
import { SectionFaqComponent } from '../../sections/section-faq/section-faq.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    SectionDemoComponent,
    SectionFeaturesComponent,
    SectionHeroComponent,
    SectionFaqComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
