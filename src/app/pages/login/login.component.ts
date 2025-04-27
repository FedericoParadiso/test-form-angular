import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../_services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dropdown } from '../../_models';
import { combineLatest, map } from 'rxjs';
import { LocaleService } from '../../_utility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {

  form: FormGroup;
  langs: Array<Dropdown> = [{ id: 1, value: 'it', name: 'Italiano' }, { id: 2, value: 'en', name: 'Inglese' }];
  valute: Array<Dropdown> = [{ id: 1, value: 'EUR', name: 'Euro' }, { id: 2, value: 'USD', name: 'Dollaro' }];
  casuali: Array<Dropdown> = [{ id: 1, value: 'ACQ', name: 'Acquisto' }, { id: 2, value: 'VEN', name: 'Vendita' }];
  submit: any;

  selectedLang: any;

  constructor(
    private fb: FormBuilder,
    private locale: LocaleService,
  ) {
    this.form = this.fb.group({
      valuta: ['', [Validators.required]],
      casuale: ['', [Validators.required]],
      data: ['', [Validators.required]],
      strumento: ['', [Validators.required]],
      quantita: ['', [Validators.required, Validators.min(0)]],
      prezzo: ['', [Validators.required, Validators.min(0), Validators.maxLength(5)]],
      importo: [{ value: '', disabled: true }, [Validators.required]],
    });

    if (this.quantita && this.prezzo) {
      combineLatest([this.quantita.valueChanges, this.prezzo.valueChanges])
        .pipe(
          map(([val1, val2]) =>  `${val1 * val2}`)
        )
        .subscribe(combinedValue => {
          this.importo.setValue(combinedValue, { emitEvent: false });
        });
    }
  }

  Submit() {
    console.log(this.form.value);
    return this.submit = this.form.value;
  }

  OnChange(event: any) {
    if (event) {
      this.locale.changeLanguage(event);
    }
  }

  get formControls() {
    return this.form.controls;
  }

  get quantita(): FormControl {
    return this.form.get('quantita') as FormControl;
  }

  get prezzo(): FormControl {
    return this.form.get('prezzo') as FormControl;
  }

  get importo(): FormControl {
    return this.form.get('importo') as FormControl;
  }
}
