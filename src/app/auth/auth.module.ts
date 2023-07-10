import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule
  ]
})
export class AuthModule { }
