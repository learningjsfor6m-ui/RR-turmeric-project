import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
// mock-users.ts
export const USERS: User[] = [
  { email: 'admin1@a.com', password: 'Admin@123', role: 'ADMIN' },
  { email: 'manager1@a.com', password: 'Manager@123', role: 'MANAGER' },
  { email: 'staff1@a.com', password: 'Staff@123', role: 'STAFF' },
];
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: Subject<boolean> = new Subject<boolean>();
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  constructor() {
    const storedUser = localStorage.getItem('auth');
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser$ = this.currentUserSubject.asObservable();

    }

  // login api call set authtoken here
  login(creds: User): Observable<any> {
    let { email, password } = creds;
    const found = USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      const authToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA'; // Generate or receive the token from your server
      localStorage.setItem('token', authToken);
      localStorage.setItem('isLoggedIn', 'true');
      this.setUser(found);
      const authData = {
        token: 'jwt-token',
        role: found.role, // ADMIN, MANAGER, VIEWER
        eamil: found.email,
        password: found.password,
      };
      localStorage.setItem('auth', JSON.stringify(authData));
      this.isAuthenticated.next(true);
      return of([true]);
    } else {
      this.isAuthenticated.next(false);
      localStorage.setItem('isLoggedIn', 'false');
      return of([false]);
    }
  }

  // Authentication method call from here for authguard
  isAuthenticatedUser(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
    //this.isAuthenticated.asObservable();
  }

  // logout method call from here
  logout() {
    // Simulate logging out
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
  }

  getUserRole(): any {
    const auth = localStorage.getItem('auth');
    return auth ? JSON.parse(auth).role : null;
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth');
  }

  setUser(user: User) {
    this.currentUserSubject.next(user);
  }
}
