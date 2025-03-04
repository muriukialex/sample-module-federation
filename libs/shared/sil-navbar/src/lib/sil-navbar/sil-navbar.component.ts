import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

@Component({
  selector: 'lib-sil-navbar',
  imports: [CommonModule, UIRouterModule],
  templateUrl: './sil-navbar.component.html',
  styleUrl: './sil-navbar.component.css',
})
export class SilNavbarComponent {
  @Input() appTitle = 'Advantage';
  @Input() navbarItems?: Array<{
    name: string;
    state: string;
  }> = [];
}
