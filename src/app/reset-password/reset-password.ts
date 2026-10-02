import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword 
{
   routerLink = inject (ActivatedRoute);
  
  token = this.routerLink.snapshot.queryParamMap.get('token');
  constructor()
  {
    console.log("Token : ",this.token);
  }
}
