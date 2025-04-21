import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoicePreviewComponent } from "./components/invoice-preview/invoice-preview.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InvoicePreviewComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tiny-invoice';
}
