import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [AuthRoutingModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
