import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SilMenuComponent } from '@advantage-lite/sil-menu';

@Component({
  selector: 'lib-communications-menu',
  imports: [CommonModule, SilMenuComponent],
  standalone: true,
  templateUrl: './communications-menu.component.html',
  styleUrl: './communications-menu.component.css',
})
export class CommunicationsMenuComponent {
  communicationsMenuItems = [
    {
      name: 'Home',
      state: 'app.communications.home',
    },
    {
      name: 'Patients',
      state: 'app.communications.patients',
    },
    {
      name: 'Segments',
      state: 'app.communications.segments',
    },
    {
      name: 'Templates',
      state: 'app.communications.templates',
    },
  ];
}
