import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Book_Details } from '../../Model';
import { inject } from '@angular/core';

@Component({
  selector: 'app-search-book',
  imports: [ReactiveFormsModule],
  templateUrl: './search-book.html',
  styleUrl: './search-book.css',
})
export class SearchBook 
{
   form = inject(FormBuilder);

    Book_Details = this.form.group({
    book_id : this.form.control(0,[Validators.required,Validators.min(1)]),
    book_name : this.form.control('',Validators.required),
    author_name : this.form.control('',Validators.required),
    about_book : this.form.control('',Validators.required),
    published_date : this.form.control('',Validators.required),
    category : this.form.control('',Validators.required)
    });
   
   search : boolean = false ;


  searchBook()
  {
    const getBook = localStorage.getItem("Book_Details");
    const parsing : Book_Details[] = getBook ? JSON.parse(getBook) : [];
    
    const findBook = parsing.find(b => Number(b.book_id) === Number(this.Book_Details.controls.book_id.value));
    if(findBook)
    {
      this.Book_Details.patchValue(findBook);
      this.search = true ;
    }
    else
    {
      alert("Book Not Found!❌");
    }
  }

  back()
  {
    this.search = false ;
    this.Book_Details.controls.book_id.setValue(0);
  }
}
