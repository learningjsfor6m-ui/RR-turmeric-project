import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  //const authService = inject(AuthService);
  const router = inject(Router);
  // const route = inject(ActivatedRouteSnapshot)
  const allowedRoles = route.data['roles'] as string[] ;

  const userRoles = authService.isAuthenticatedUser();
  if (userRoles) {
    console.log('asasd');
  }
  const userRole = authService.getUserRole();

  if (!authService.isLoggedIn()) {
    router.navigate(['/login'],{
      queryParams: { reason: 'login_required' }
    });
    return false;
  }


  if (!allowedRoles.includes(userRole!)) {
    router.navigate(['/layout/unauthorized'], {
      queryParams: { reason: 'no_access' }
    });
    return false;
  }

  if (allowedRoles.includes(userRole!)) {
    return true;
  }

  // Unauthorized access
  router.navigate(['/unauthorized']);
  return false;
};
