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
  @ViewChild ('update_book') update ! : NgForm;

  todayString = new Date().toISOString().split('T')[0];
  showForm : boolean = false;

  Book_Details : Book_Details =
  {
    book_id : 0,
    book_name : '',
    author_name : '',
    about_book : '',
    published_date : this.todayString,
    category : ''
  }


  fetchForm()
  {
 
   const getBookfromStorage = localStorage.getItem("Book_Details");
   const parse : Book_Details[] = getBookfromStorage ? JSON.parse(getBookfromStorage) : [];
   
   const findBook = parse.find(b => Number(b.book_id) === Number(this.Book_Details.book_id));

   if(findBook)
   {
    this.Book_Details = {...findBook};
    this.showForm = true;
   }
   else
    {
      this.showForm = false;
      alert("Book Not Found!");
    }
   
  }

  updateValue()
  {
   const getBookfromStorage = localStorage.getItem("Book_Details");
   const parse:Book_Details[] = getBookfromStorage ? JSON.parse(getBookfromStorage) : [];
   
   const findBook = parse.findIndex(b => Number(b.book_id) === Number(this.Book_Details.book_id));
   
   if(findBook !== -1)
   {
     parse[findBook] = {...this.Book_Details};
     
     localStorage.setItem("Book_Details",JSON.stringify(parse));
     alert("Updated Successfully!✅");
     
     this.showForm = false;
   }
   else
   {
    alert("Updatation Unsuccessfull ❌");
   }
 }

 resetInput()
 {
  this.update.resetForm();
 } 

 back()
 {
  this.showForm = false ;
 }

}
