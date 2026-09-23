import { CanActivateFn } from '@angular/router';
import { Service } from './Services/service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const service = inject(Service);
  const router = inject(Router);

  if(service.checkLogIn())
  {
    return true;
  }
  return router.parseUrl('/sign-in');

}  
