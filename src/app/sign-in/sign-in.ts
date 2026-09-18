import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Service } from '../Services/service';
import { User_Credentials } from '../../Model';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SigIn
{ 
  switchSign : boolean = false ;
  form = inject(FormBuilder);
  service = inject(Service);

  Sign_In_Up = this.form.group({
    user_Email : this.form.control('',[Validators.email,Validators.required]),
    user_Password : this.form.control('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/)])
  })

  Already_User_Submit()
  {

    this.service.alreadyUser(this.Sign_In_Up.value as User_Credentials).subscribe({
      next : (data) =>
      {
        console.log(data);
        alert("User Founded Successfully!✅");
      },
      error : (err) =>
      {
        alert("User Not Found! Or Incorrect Password!❌");
      }
    })
    this.Sign_In_Up.reset();
  }
  New_User()
  {
    this.switchSign = false ;
    this.Sign_In_Up.reset();
  }


  New_User_Submit()
  {
     this.service.newUser(this.Sign_In_Up.value as User_Credentials).subscribe(
      {
        next : (data) =>
        {
          console.log(data);
          alert("Signed Up Successfully!✅");
        },
        error : (err) =>
        {
          alert("Sign Up Unsuccessful! Or User Already Exixts!❌");
        }
      });
    console.log(this.Sign_In_Up.value);
    this.Sign_In_Up.reset();
  }
    Already_User()
  {
    this.switchSign = true ;
    this.Sign_In_Up.reset();
  }
  
}
