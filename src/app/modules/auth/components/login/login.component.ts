import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl([
      '',
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  login(): void {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    console.log(this.loginForm.valid);

    this.authService
      .login(username, password)
      .subscribe(() => this.router.navigateByUrl('/'));
  }
  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
