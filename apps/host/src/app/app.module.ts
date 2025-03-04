import { LoginComponent } from '@advantage-lite/login';
import { NotFoundComponent } from '@advantage-lite/not-found';
import { SelectAppComponent } from '@advantage-lite/select-app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Category, UIRouter, UIRouterModule } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { APP_STATES } from './app.states';
import { NxWelcomeComponent } from './nx-welcome.component';

export function routerConfigFn(router: UIRouter) {
  router.trace.enable(Category.TRANSITION);
  // router.plugin(Visualizer);
}

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    /**
     * Replace @angular/router in favor of @uirouter/angular
     */
    // RouterModule.forRoot(appRoutes),
    UIRouterModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: false,
      initial: { state: 'app.login' },
      config: routerConfigFn,
    }),
    NotFoundComponent,
    LoginComponent,
    SelectAppComponent,
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
