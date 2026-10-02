import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Service } from '../Services/service';
import { Forgot } from '../../Model';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword 
{
  router = inject (Router);
  service = inject (Service);

  User_Recovery = new FormGroup({
     email : new FormControl('',[Validators.email,Validators.required])
  })

  reset_password()
  {
    const email = this.User_Recovery.value;
    this.service.forgot_User(email as Forgot);
    alert("✅Password Reset Link Will Be Send To The Entered Email! Note : It May Take Few Minutes To Send The Link. Try To Reset Your Password Within 30 Minutes.");
    this.router.navigate(['sign-in']);
    this.User_Recovery.reset();
  }

  cancel()
  {
    this.router.navigate(['sign-in']);
  }
}
