import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SilNavbarComponent } from '@advantage-lite/sil-navbar';
import { CommunicationsMenuComponent } from '@advantage-lite/communications-menu';
import { CommunicationsHomeComponent } from '@advantage-lite/communications-home';

import { RemoteEntryComponent } from './entry.component';
import { UIRouterModule } from '@uirouter/angular';
import { COMMUNICATIONS_STATES } from '../app.states';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    UIRouterModule.forChild({ states: COMMUNICATIONS_STATES }),
    CommunicationsMenuComponent,
    CommunicationsHomeComponent,
    SilNavbarComponent,
  ],
  providers: [],
})
export class RemoteEntryModule {}
