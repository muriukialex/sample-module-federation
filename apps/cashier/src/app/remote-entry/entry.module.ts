import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CashiersMenuComponent } from '@advantage-lite/cashiers-menu';
import { SilNavbarComponent } from '@advantage-lite/sil-navbar';
import { UIRouterModule } from '@uirouter/angular';
import { CASHIER_STATES } from '../app.states';
import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    // Replace @angular/router in favor of @uirouter/angular
    // RouterModule.forChild(remoteRoutes),
    // RouterModule,
    UIRouterModule.forChild({ states: CASHIER_STATES }),
    CashiersMenuComponent,
    SilNavbarComponent,
  ],
  providers: [],
})
export class RemoteEntryModule {}
