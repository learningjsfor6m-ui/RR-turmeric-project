import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private isAuthenticated:Subject<boolean> = new Subject<boolean>() ;
  private authSecretKey = 'Bearer Token';
  constructor() { }

  login(creds:User):boolean{
    let {email,password} = creds
    if(email==='Amir@gmail.com' && password ==="Passw@123"){
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA'; // Generate or receive the token from your server
      localStorage.setItem('token',authToken);
       localStorage.setItem('isLoggedIn','true');
      this.isAuthenticated.next(true);
      return true;
    }else{
      this.isAuthenticated.next(false);
      localStorage.setItem('isLoggedIn','false');
      return false;
    }
  }

    isAuthenticatedUser(): Observable<boolean> | boolean {
    return this.isAuthenticated;
  }
}
