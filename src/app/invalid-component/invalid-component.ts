import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface User {
  name: undefined;
  age: number;
  email: undefined;
}

@Component({
  selector: 'app-invalid-component',
  imports: [FormsModule],
  templateUrl: './invalid-component.html',
  styleUrl: './invalid-component.css',
})
export class InvalidComponent 
{
 @ViewChild ('userinfo') f! : NgForm;
  user: User = 
  {
    name : undefined,
    age : 0,
    email : undefined
  }

  submitted()
  {
   console.log(this.f.value);
  }
}
