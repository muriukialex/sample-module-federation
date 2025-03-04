import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SilButtonComponent } from '@sil-button/sil-button';
import { UIRouterModule } from '@uirouter/angular';

@Component({
  selector: 'lib-login',
  imports: [CommonModule, UIRouterModule, SilButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public router: Router) {}
  // navigateToApps() {
  //   this.router.navigate(['/select-apps']);
  // }
}
