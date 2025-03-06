import { CommunicationsMenuComponent } from '@advantage-lite/communications-menu';
import { SilNavbarComponent } from '@advantage-lite/sil-navbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommunicationsHomeComponent } from '@advantage-lite/communications-home';
import { UIRouterModule } from '@uirouter/angular';
import { COMMUNICATIONS_STATES } from '../app.states';
import { RemoteEntryComponent } from './entry.component';

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
