import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [AuthRoutingModule, ReactiveFormsModule, CommonModule],
  declarations: [AuthComponent, LoginComponent],
  exports: [AuthComponent, LoginComponent],
})
export class AuthModule {}
