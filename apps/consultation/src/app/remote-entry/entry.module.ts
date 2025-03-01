import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConsultationMenuComponent } from '@advantage-lite/consultation-menu';
import { SilNavbarComponent } from '@advantage-lite/sil-navbar';
import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    ConsultationMenuComponent,
    SilNavbarComponent,
  ],
  providers: [],
})
export class RemoteEntryModule {}
