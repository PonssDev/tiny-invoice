import { Routes } from '@angular/router';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'create-invoice',
    component: CreateInvoiceComponent,
  }
];
