import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConsultationMenuComponent } from '@advantage-lite/consultation-menu';
import { SilNavbarComponent } from '@advantage-lite/sil-navbar';
import { UIRouterModule } from '@uirouter/angular';
import { CONSULTATION_STATES } from '../app.states';
import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild(remoteRoutes),
    UIRouterModule.forChild({ states: CONSULTATION_STATES }),
    ConsultationMenuComponent,
    SilNavbarComponent,
  ],
  providers: [],
})
export class RemoteEntryModule {}
