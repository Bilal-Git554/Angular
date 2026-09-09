import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book_Details } from '../../Model';
import { Service } from '../Services/service';

@Component({
  selector: 'app-delete-book',
  imports: [FormsModule],
  templateUrl: './delete-book.html',
  styleUrl: './delete-book.css',
})
export class DeleteBook 
{
  service = inject(Service);
   
  @ViewChild ("delete_book") delete ! : NgForm;
  tableSwitch : boolean = false ;

  Book_Details : Book_Details =
  {
    book_Id : 0,
    book_Name : '',
    author_Name : '',
    about_Book : '',
    published_Date : '',
    category_Id : 0,
    category : 
    {
      category_Id : 0,
      category_Name : ''
    }
  }

  checkBook()
  {
   const book_Id = this.Book_Details.book_Id;
   this.service.getBookby_Id(book_Id).subscribe(
    {
      next : (data) =>
      {
        data.published_Date = data.published_Date.split('T')[0];
        this.Book_Details = data;
        alert("Book Found To Delete!✅");
        this.tableSwitch = true ;
      },
      error : (err) =>
      {
        alert("Book Not Found!❌");
      }
    }
   )
  }

  deleteBook()
 {
  const book_Id = this.Book_Details.book_Id;
  this.service.deleteBookby_Id(book_Id).subscribe({
  next: () =>
  {
    alert("Book Deleted Successfully!🚮");
  },
  error: () =>
  {
    alert("Book Not Found!❌");
  }
   });
   this.back(); 
 }

  back()
  {
    this.tableSwitch = false ;
    this.Book_Details.book_Id = 0 ;
  }
}
