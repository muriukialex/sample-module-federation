import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-login',
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public router: Router) {}
  navigateToApps() {
    this.router.navigate(['/select-apps']);
  }
}
