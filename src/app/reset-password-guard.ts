import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const resetPasswordGuard: CanActivateFn = (route, state) => {

  const router = inject(Router); 

  const token = route.queryParamMap.get('token');

  if(token)
  {
    sessionStorage.setItem('Reset_Mode', 'true');
    return true;
  }
  
  return router.parseUrl('/profile');  
  
};
