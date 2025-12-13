import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
   const isLoggedIn = authService.isLoggedIn();
  // Case 1: User is logged in & tries to access login page
    if (isLoggedIn && state.url === '/login') {
      return router.createUrlTree(['/layout']);
    }

  if (authService.isAuthenticatedUser()) {
    return true;
  } else {
    router.navigateByUrl('/login');
    alert('You are not authorized to view this page. Please log in.');
    return false;
  }
};
