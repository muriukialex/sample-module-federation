import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-select-app',
  imports: [CommonModule, RouterModule],
  templateUrl: './select-app.component.html',
  styleUrl: './select-app.component.css',
})
export class SelectAppComponent {}
