import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

@Component({
  selector: 'lib-not-found',
  imports: [CommonModule, UIRouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
