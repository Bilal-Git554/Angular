import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild, inject} from '@angular/core';
import { Add_Book_Details } from '../../Model';
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
  
  showForm : boolean = false;

  Add_Book_Details : Add_Book_Details =
  {
    book_Id : 0,
    book_Name : '',
    author_Name : '',
    about_Book : '',
    published_Date : '',
    category_Id : 0
  }


  fetchForm()
  {

   const book_Id = this.Add_Book_Details.book_Id;
   this.service.getBookby_Id(book_Id).subscribe(
    {
      next : (data) =>
      {
        data.published_Date = data.published_Date.split('T')[0];
        this.Add_Book_Details = data ;
        alert("Book Fetched Successfully!✅");
        this.showForm = true ;
      },
      error : (err) =>
      {
        alert("Book Not Found!❌");
      }
    }
   )
   
  }
  
  resetInput()
 {
  this.update.resetForm();
 } 

 back()
 {
  this.showForm = false ;
  this.Add_Book_Details.book_Id = 0 ;
 }

  updateValue()
  {
   
   const book_Id = this.Add_Book_Details;
   this.service.updateBookby_Id(book_Id).subscribe({
    next : (data) =>
    {
      alert("Updated Successfully!✅");
      this.showForm = false ;

    },
    error : (err) =>
    {
      alert("Update Unsuccessful!❌");
    }
   });
   
   this.back();

   }

  }


