import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  exports :[
    ButtonComponent, InputComponent
  ]
})
export class SharedModule { }
