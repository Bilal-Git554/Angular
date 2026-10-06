import { Component, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Reset, Send_Password_Token } from '../../Model';
import { Service } from '../Services/service';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword 
{
   routerLink = inject (ActivatedRoute);
   router = inject (Router);
   service = inject (Service);

  token = this.routerLink.snapshot.queryParamMap.get('token');

  @ViewChild ("reset_password") reset ! : NgForm;

  Reset_Password : Reset =
  {
    token : decodeURIComponent(this.token || ''),
    new_Password : '',
    confirm_Password : ''
  }
  

  submit()
  {
    const token_password =
    {
      token : this.Reset_Password.token,
      new_Password : this.Reset_Password.new_Password
    };
    
    this.service.reset_User(token_password as Send_Password_Token);
    this.router.navigate(['/sign-in']);
    this.reset.resetForm();
  }

  cancel()
  {
    this.router.navigate(['/sign-in']);
  }
}
