import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
constructor(){}
registerForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  password2: new FormControl(''),
});
onClick(){
  const data = this.registerForm.value
  console.log(data);
  // this.authService.register('http://localhost:4000/api/users',data).subscribe({
  //   next : (data : any)=> {
  //     localStorage.setItem('token', data.token)

  //     console.log(data);
  //   },
  //   error : (error : any)=> {
  //     console.log(error);
  //   }
  // })
}
}
