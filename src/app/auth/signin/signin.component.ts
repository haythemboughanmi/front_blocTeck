import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  formFields: any[] = [];
  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    this.formFields = [
      { name: 'firstName', label: 'First Name', type: 'text' , value :'baha' },
      { name: 'lastName', label: 'Last Name', type: 'password' , value :'baha' },
      // Add more form fields as needed
    ];

    // Create the FormGroup and initialize form controls with default values
    let formControlsConfig: { [key: string]: FormControl } = {};
    this.formFields.forEach((field) => {
      formControlsConfig[field.name] = new FormControl(
        field.value ?? '',
        Validators.required
      );
    });
    console.log(formControlsConfig, 'sssss');
    this.formGroup = this.formBuilder.group(formControlsConfig);
  }

  onClick() {
    const data = this.loginForm.value;

    console.log(data);
    // this.authService.login('http://localhost:4000/api/auth',data).subscribe({
    //   next :(data:any)=>{
    //     localStorage.setItem('token', data.token)

    //     console.log(data);
    //   },
    //   error:(error:any)=>{
    //   console.log(error)
    //   }

    // })
  }
}
