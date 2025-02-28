import { CashiersMenuComponent } from '@advantage-lite/cashiers-menu';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    CashiersMenuComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
