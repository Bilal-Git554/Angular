import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-book',
  imports: [ReactiveFormsModule],
  templateUrl: './search-book.html',
  styleUrl: './search-book.css',
})
export class SearchBook 
{
  user = new FormGroup({
    name : new FormControl('',[Validators.minLength(5),Validators.maxLength(30),Validators.required]),
    age : new FormControl(0,[Validators.min(18),Validators.max(100),Validators.required]),

    address : new FormGroup({
      door_no : new FormControl('',[Validators.minLength(5),Validators.maxLength(30),Validators.required]),
      street_name : new FormControl('',[Validators.minLength(5),Validators.maxLength(30),Validators.required]),
      area : new FormControl('',[Validators.minLength(5),Validators.maxLength(30),Validators.required]),
      city : new FormControl('',[Validators.minLength(5),Validators.maxLength(30),Validators.required]),
      state : new FormControl('',[Validators.minLength(5),Validators.maxLength(30),Validators.required]),
      country : new FormControl('',[Validators.minLength(5),Validators.maxLength(30),Validators.required])
    })
  });
 
  submit()
  {
    console.log(this.user.value);
  }
}
