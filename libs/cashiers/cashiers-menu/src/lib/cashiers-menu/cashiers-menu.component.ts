import { SilMenuComponent } from '@advantage-lite/sil-menu';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-cashiers-menu',
  imports: [CommonModule, SilMenuComponent],
  templateUrl: './cashiers-menu.component.html',
  styleUrl: './cashiers-menu.component.css',
})
export class CashiersMenuComponent {
  cashierMenuItems = [
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
