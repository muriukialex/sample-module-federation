import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

@Component({
  selector: 'lib-sil-menu',
  imports: [CommonModule, UIRouterModule],
  templateUrl: './sil-menu.component.html',
  styleUrl: './sil-menu.component.css',
})
export class SilMenuComponent {
  @Input() appTitle = '';
  @Input() menuItems: Array<{
    name: string;
    state: string;
  }> = [];
}
