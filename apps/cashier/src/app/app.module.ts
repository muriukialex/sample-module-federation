import { CashiersMenuComponent } from '@advantage-lite/cashiers-menu';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';
import { CASHIER_STATES } from './app.states';
// import { AppComponent } from './app.component';

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
    UIRouterModule.forChild({ states: CASHIER_STATES }),
    CashiersMenuComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
