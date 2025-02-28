import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-sil-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sil-navbar.component.html',
  styleUrl: './sil-navbar.component.css',
})
export class SilNavbarComponent {
  @Input() appTitle = 'Advantage';
  @Input() navbarItems?: Array<{
    name: string;
    link: string;
  }> = [];
}
