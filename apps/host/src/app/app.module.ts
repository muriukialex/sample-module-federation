import { LoginComponent } from '@advantage-lite/login';
import { NotFoundComponent } from '@advantage-lite/not-found';
import { SelectAppComponent } from '@advantage-lite/select-app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NotFoundComponent,
    LoginComponent,
    SelectAppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
