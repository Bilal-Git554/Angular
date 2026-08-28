import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Book_Details } from '../../Model';

@Component({
  selector: 'app-update-book',
  imports: [FormsModule],
  templateUrl: './update-book.html',
  styleUrl: './update-book.css',
})
export class UpdateBook 
{
  @ViewChild ('update_form') update ! : NgForm;

  todayString = new Date().toISOString().split('T')[0];

  Book_Details : Book_Details =
  {
    book_id : 0,
    book_name : '',
    author_name : '',
    about_book : '',
    published_date : this.todayString,
    category : ''
  }

  alert()
  {
    console.log(this.update.value);
  }

  fetchForm()
  {
   const getBookfromStorage = localStorage.getItem("Book_Details");
   const parse = getBookfromStorage ? JSON.parse(getBookfromStorage) : null;
   if(parse.book_id == this.Book_Details.book_id)
   {
    console.log(parse);
   }
   else{
    console.log("Not Found!");
   }
  }
}
