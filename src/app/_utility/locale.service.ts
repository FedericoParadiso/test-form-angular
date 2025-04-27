import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { Languages } from '../_models';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  readonly DEFAULT_LANG_VALUE = 'en';
  readonly allowLanguages = [this.DEFAULT_LANG_VALUE];

  constructor(
    private translate: TranslateService,
    private config: PrimeNGConfig
  ) {}

  init() {
    let lang = this.translate.getBrowserLang();
    if (lang && this.allowLanguages.includes(lang)) {
      this.translate.setDefaultLang(lang);
    } else {
      lang = this.DEFAULT_LANG_VALUE;
      this.translate.setDefaultLang(this.DEFAULT_LANG_VALUE);
    }

    this.translate.use(lang);
    this.translate
      .get('primeng')
      .subscribe((res) => this.config.setTranslation(res));
  }

  changeLanguage(lang: Languages) {
    this.translate.use(lang);
    this.translate
      .get('primeng')
      .subscribe((res) => this.config.setTranslation(res));
  }
}
