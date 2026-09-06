import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild, inject} from '@angular/core';
import { Book_Details } from '../../Model';
import { Service } from '../Services/service';

@Component({
  selector: 'app-update-book',
  imports: [FormsModule],
  templateUrl: './update-book.html',
  styleUrl: './update-book.css',
})
export class UpdateBook 
{
  @ViewChild ('update_book') update ! : NgForm;

  service = inject(Service);
  
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
 
  //  const getBookfromStorage = localStorage.getItem("Book_Details");
  //  const parse : Book_Details[] = getBookfromStorage ? JSON.parse(getBookfromStorage) : [];
   
  //  const findBook = parse.find(b => Number(b.book_id) === Number(this.Book_Details.book_id));

   const check_fetch_success = this.service.fetchBookby_Id(this.Book_Details.book_id);
   if(check_fetch_success)
   {
    this.Book_Details = {...check_fetch_success};
    this.showForm = true;
   }
   else
    {
      this.showForm = false;
      // alert("Book Not Found!❌");
    }
   
  }
  
  resetInput()
 {
  this.update.resetForm();
 } 

 back()
 {
  this.showForm = false ;
  this.Book_Details.book_id = 0 ;
 }

  updateValue()
  {
  //  const getBookfromStorage = localStorage.getItem("Book_Details");
  //  const parse:Book_Details[] = getBookfromStorage ? JSON.parse(getBookfromStorage) : [];
   
  //  const findBook = parse.findIndex(b => Number(b.book_id) === Number(this.Book_Details.book_id));
   
   const check_update_success = this.service.updateBook(this.Book_Details);
   if(check_update_success)
   {
    //  parse[findBook] = {...this.Book_Details};
     
    //  localStorage.setItem("Book_Details",JSON.stringify(parse));
    //  alert("Updated Successfully!✅");
     
     this.back();
   }
   else
   {
    alert("Updatation Unsuccessfull ❌");
   }
 }

}
