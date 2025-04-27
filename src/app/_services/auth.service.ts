import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../_utility';
import { Languages } from '../_models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData: any;

  constructor(
    public router: Router,
    private http: HttpClient,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { }

  SignIn(body: any) {
    let url = `${environment.host}${environment.api}/login`;
    return this.http.post<any>(url, body);
  }

}
