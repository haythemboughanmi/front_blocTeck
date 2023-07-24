import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
constructor(){}
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
onClick(){
  const data=this.loginForm.value

  console.log(data)
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
