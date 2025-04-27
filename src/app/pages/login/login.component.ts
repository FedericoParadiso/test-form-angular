import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      shipId: ['', [Validators.required]],
    });
  }

  SingIn() {
    if (!this.form.valid) {
      return;
    }
  }
}
