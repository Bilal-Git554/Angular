import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../Services/service';
import { Admin } from '../../Model';


@Component({
  selector: 'app-admin_sign_in',
  imports: [ReactiveFormsModule],
  templateUrl: './admin_sign_in.html',
  styleUrl: './admin_sign_in.css',
})

export class Admin_Sign_In 
{

  router = inject(Router);
  service = inject(Service);

  New_Admin_Sign_Up = new FormGroup({
    admin_Email : new FormControl('',[Validators.email,Validators.required]),
    admin_Password : new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/)])
  })

   
  submit()
  {
    const adminCredentials = this.New_Admin_Sign_Up.value;
    
    this.service.admin_Sign_Up(adminCredentials as Admin)?.subscribe({
    next : () =>
    {
      alert("New Admin Sign Up Successful!✅");
    },
    error : () =>
    {
        alert("Book Addition Unsuccessful!❌" + "\n" +
         "Error Due To :" + "\n" +
         "1. Book Id Not Found!" + "\n" +
         "2. Expired Token!" + "\n" +
         "3. Invalid Token!" + "\n" +
         "4. This Certain Action Is Only Allowed For Admins!");
    }
   });

    this.router.navigate(['add-book']);
    this.New_Admin_Sign_Up.reset();
  }

  cancel()
  {
    this.router.navigate(['add-book']);
  }

}

