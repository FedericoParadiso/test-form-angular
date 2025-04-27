import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LocaleService } from './_utility';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-italian';

  constructor(
    private route: Router,
    private locale: LocaleService,
    private primengConfig: PrimeNGConfig
  ) {
    this.locale.init();
    this.primengConfig.ripple = true;
  }
}
