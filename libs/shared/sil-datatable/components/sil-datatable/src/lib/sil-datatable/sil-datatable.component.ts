import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sil-datatable',
  imports: [CommonModule],
  templateUrl: './sil-datatable.component.html',
  styleUrl: './sil-datatable.component.css',
})
export class SilDatatableComponent {
  @Input() tableHeader: Array<string> = [];
  @Input() data: Array<any> = [];
}
