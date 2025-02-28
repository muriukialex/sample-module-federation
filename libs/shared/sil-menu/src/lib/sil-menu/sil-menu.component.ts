import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-sil-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './sil-menu.component.html',
  styleUrl: './sil-menu.component.css',
})
export class SilMenuComponent {
  @Input() appTitle = '';
  @Input() menuItems: Array<{
    name: string;
    link: string;
  }> = [];
}
