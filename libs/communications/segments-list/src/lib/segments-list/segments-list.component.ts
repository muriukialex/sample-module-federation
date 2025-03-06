import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SilDatatableComponent } from '@sil-datatable/sil-datatable';

@Component({
  selector: 'lib-segments-list',
  imports: [CommonModule, SilDatatableComponent],
  standalone: true,
  templateUrl: './segments-list.component.html',
  styleUrl: './segments-list.component.css',
})
export class SegmentsListComponent {
  tableHeader: string[] = ['Name', 'Phone Number', 'Email'];

  segmentsData = [
    {
      name: 'Alice Johnson',
      phone_number: '+254792531901',
      email: 'alice@gmail.com',
    },
    {
      name: 'Bob Smith',
      phone_number: '+254792531902',
      email: 'bob@gmail.com',
    },
    {
      name: 'Charlie Brown',
      phone_number: '+254792531903',
      email: 'charlie@gmail.com',
    },
    {
      name: 'Dana White',
      phone_number: '+254792531904',
      email: 'dana@gmail.com',
    },
    {
      name: 'Evan Williams',
      phone_number: '+254792531904',
      email: 'evans@gmail.com',
    },
  ];
}
