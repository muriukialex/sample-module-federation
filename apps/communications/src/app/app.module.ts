import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';
import { COMMUNICATIONS_STATES } from './app.states';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    UIRouterModule.forChild({ states: COMMUNICATIONS_STATES }),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
