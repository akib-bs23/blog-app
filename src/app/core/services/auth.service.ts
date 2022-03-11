import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fakeUsername: string = 'admin';
  fakePassword: string = 'admin';

  constructor() {}

  login(username: string, pass: string) {
    if (username === this.fakeUsername && pass === this.fakePassword) {
      localStorage.setItem('token', 'my-super-secret-token-from-server');

      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }
}
