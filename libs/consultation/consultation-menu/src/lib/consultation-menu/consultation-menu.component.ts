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
      state: 'app.consultation.home',
    },
    {
      name: 'Patients',
      state: 'app.consultation.patients',
    },
    {
      name: 'Visits',
      state: 'app.consultation.visits',
    },
    {
      name: 'Queues',
      state: 'app.consultation.queues',
    },
  ];
}
