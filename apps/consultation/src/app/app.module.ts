import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';
import { CONSULTATION_STATES } from './app.states';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    /**
     * Replace @angular/router in favor of @uirouter/angular
     */
    // RouterModule.forRoot(
    //   [
    //     {
    //       path: '',
    //       loadChildren: () =>
    //         import('./remote-entry/entry.module').then(
    //           (m) => m.RemoteEntryModule
    //         ),
    //     },
    //   ],
    //   { initialNavigation: 'enabledBlocking' }
    // ),
    UIRouterModule.forChild({ states: CONSULTATION_STATES }),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
