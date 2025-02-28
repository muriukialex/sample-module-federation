import { SilMenuComponent } from '@advantage-lite/sil-menu';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-consultation-menu',
  imports: [CommonModule, SilMenuComponent],
  templateUrl: './consultation-menu.component.html',
  styleUrl: './consultation-menu.component.css',
})
export class ConsultationMenuComponent {
  consultationMenuItems = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'Patients',
      link: 'patients',
    },
    {
      name: 'Visits',
      link: 'visits',
    },
    {
      name: 'Queues',
      link: 'queues',
    },
  ];
}
