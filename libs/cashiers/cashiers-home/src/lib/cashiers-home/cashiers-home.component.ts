import { SILHTTPSERVICE } from '@advantage-lite/sil-tokens';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SilButtonComponent } from '@sil-button/sil-button';
import { SilHttpService } from '@sil-http-services/sil-http-services';

@Component({
  selector: 'lib-cashiers-home',
  imports: [CommonModule, SilButtonComponent],
  templateUrl: './cashiers-home.component.html',
  styleUrl: './cashiers-home.component.css',
  providers: [{ provide: SILHTTPSERVICE, useClass: SilHttpService }],
})
export class CashiersHomeComponent {
  constructor(@Inject(SILHTTPSERVICE) private silHttpService: SilHttpService) {}

  simulatePostRequest() {
    // similar to silDatalayer service
    this.silHttpService.post('https://google.com/request', {
      name: 'James',
      age: 56,
    });
  }
}
