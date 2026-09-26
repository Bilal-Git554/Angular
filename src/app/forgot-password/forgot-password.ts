import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  imports: [],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword 
{
  router = inject (Router);

  reset_password()
  {
    alert("✅Password Reset Link Will Be Send To The Entered Email!");
    this.router.navigate(['sign-in']);
  }

  cancel()
  {
    this.router.navigate(['sign-in']);
  }
}
