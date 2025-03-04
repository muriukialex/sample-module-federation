import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

@Component({
  selector: 'lib-select-app',
  imports: [CommonModule, UIRouterModule],
  templateUrl: './select-app.component.html',
  styleUrl: './select-app.component.css',
})
export class SelectAppComponent {}
