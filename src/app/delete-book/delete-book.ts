import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book_Details } from '../../Model';
import { Buttons } from '../buttons/buttons';

@Component({
  selector: 'app-delete-book',
  imports: [FormsModule],
  templateUrl: './delete-book.html',
  styleUrl: './delete-book.css',
})
export class DeleteBook 
{
  @ViewChild ("delete_book") delete ! : NgForm;
  tableSwitch : boolean = false ;
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

  checkBook()
  {
   const getbook = localStorage.getItem("Book_Details");
   const parse : Book_Details[] = getbook ? JSON.parse(getbook) : [] ;

   const findbook = parse.find(b => Number(b.book_id) === Number(this.Book_Details.book_id)) ;
   
   if(findbook)
   {
    this.tableSwitch = true ;
    this.Book_Details = {...findbook};
   }
   else
   {
    alert("Unable To Find The Book!");
    this.tableSwitch = false ;
   }

  }

  deleteBook()
  {
    const getbook = localStorage.getItem("Book_Details");
    const parse : Book_Details[] = getbook ? JSON.parse(getbook) : [] ;

   const filter_book = parse.filter(b => Number(b.book_id) !== Number(this.Book_Details.book_id)) ;
  
   if(filter_book.length < parse.length)
   {
    localStorage.setItem("Book_Details",JSON.stringify(filter_book));

    alert("Book Deleted Successfully!🚮")
    this.tableSwitch = false ;
   }

  }

  back()
  {
    this.tableSwitch = false ;
    this.Book_Details.book_id = 0 ;
  }
}
