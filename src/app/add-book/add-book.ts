import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Add_Book_Details } from '../../Model';
import { Service } from '../Services/service';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})

export class AddBook 
{
  service = inject(Service);

 @ViewChild('add_book') add! : NgForm ;

 initialAdd : boolean = false ;

 Add_Book_Details : Add_Book_Details =
 {
  book_Id: 0,
  book_Name: '',
  author_Name: '',
  about_Book: '',
  published_Date: '',
  category_Id: null
 }

submit()
{
  
  this.service.addBook(this.add.value).subscribe(
        {
          next : (data) =>
          {
            alert("Book Added Successfully!✅")
          },
          error : (err) =>
          {
            alert("Book Addition Unsuccessful!❌")
          }
        }
      );

  this.resetInput();
  this.initialAdd = false ;
}

  resetInput()
  {
    this.add.resetForm();
  }

  addBook()
  {
    this.initialAdd = true ;
  }
  
  back()
  {
    this.initialAdd = false;
  }
}
