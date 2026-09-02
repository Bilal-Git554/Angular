import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book_Details } from '../../Model';

@Component({
  selector: 'app-search-book',
  imports: [ReactiveFormsModule],
  templateUrl: './search-book.html',
  styleUrl: './search-book.css',
})
export class SearchBook 
{
    Book_Details = new FormGroup({
    book_id : new FormControl(0,[Validators.required,Validators.min(1)]),
    book_name : new FormControl('',Validators.required),
    author_name : new FormControl('',Validators.required),
    about_book : new FormControl('',Validators.required),
    published_date : new FormControl('',Validators.required),
    category : new FormControl('',Validators.required)
    });
   
   search : boolean = false ;

  submit()
  {
    console.log(this.Book_Details.value);
  }

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
