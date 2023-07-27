import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';




// import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    SharedModule
  ]
})
export class AuthModule { }
