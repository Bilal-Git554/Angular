import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Service } from './Services/service';
import { Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {

  const service = inject (Service);
  const router = inject (Router);

  if(!service.checkLogIn())
  {
    return true;
  }
  return router.parseUrl('/add-book');
};
