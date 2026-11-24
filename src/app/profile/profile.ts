import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { OnInit } from '@angular/core';
import { Jwt_Decode } from '../../Model';
import { NgClass } from '@angular/common';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [NgClass],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit
{
  
  router = inject(Router);

  Email = '';
  Role = '';
  Status = 'InActive';

  ngOnInit()
  {
   const Token = localStorage.getItem('Token');

   if(Token)
    {
      const decode = jwtDecode<Jwt_Decode>(Token);
      this.Email = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
      this.Role = decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      this.Status = "Active";
    } 
  }

  back()
  {
    this.router.navigate(['/add-book']);
  }

  logout()
  {
    this.router.navigate(['/log-out']);
  }
}
