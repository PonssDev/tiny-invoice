import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-header',
  imports: [
    RouterLink,
  ],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css',
  standalone: true
})
export class SectionHeaderComponent {
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;

    // Evitar scroll cuando el menú está abierto
    if (this.menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.menuActive = false;
    document.body.style.overflow = '';
  }
}
