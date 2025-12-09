import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private auth:AuthService,private router:Router){}
  login(){
    let creds:User ={email:'Amir@gmail.com' , password :"Passw@123"}
    this.auth.login(creds).subscribe((res:any)=>{
      console.log(res)
      if(res){
        this.router.navigateByUrl('/layout')
      }
    })
  }
}
