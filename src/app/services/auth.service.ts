import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private isAuthenticated:Subject<boolean> = new Subject<boolean>() ;
  private authSecretKey = 'Bearer Token';
  constructor() { }

  login(creds:User):Observable<any>{
    let {email,password} = creds
    if(email==='Amir@gmail.com' && password ==="Passw@123"){
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA'; // Generate or receive the token from your server
       localStorage.setItem('token',authToken);
       localStorage.setItem('isLoggedIn','true');
      this.isAuthenticated.next(true);
      return of([true]);
    }else{
      this.isAuthenticated.next(false);
      localStorage.setItem('isLoggedIn','false');
      return of([false]);
    }
  }

    isAuthenticatedUser(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true'
    //this.isAuthenticated.asObservable();
  }
   logout() {
    // Simulate logging out
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');

  }
}
