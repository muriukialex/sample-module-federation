import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SilDatatableComponent } from '@sil-datatable/sil-datatable';

@Component({
  selector: 'lib-patients-list',
  imports: [CommonModule, SilDatatableComponent],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.css',
})
export class PatientsListComponent {
  tableHeader: string[] = ['Name', 'Phone Number', 'Email'];

  patientsData = [
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
