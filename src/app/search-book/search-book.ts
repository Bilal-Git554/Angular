import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { inject } from '@angular/core';
import { Service } from '../Services/service';

@Component({
  selector: 'app-search-book',
  imports: [ReactiveFormsModule],
  templateUrl: './search-book.html',
  styleUrl: './search-book.css',
})
export class SearchBook 
{
   form = inject(FormBuilder);
   service = inject(Service);


    Book_Details = this.form.group({
    book_Id : this.form.control(0,[Validators.required,Validators.min(0-1)]),
    book_Name : this.form.control(''),
    author_Name : this.form.control(''),
    about_Book : this.form.control(''),
    published_Date : this.form.control(''),
    category_Id : this.form.control(0),
    category : this.form.group({
      category_Id : this.form.control(0),
      category_Name : this.form.control('')
    })
    });
   
   search : boolean = false ;


  searchBook()
  {

  const book_Id = this.Book_Details.controls.book_Id.value!;

  this.service.getBookby_Id(book_Id).subscribe({
    next: (data) =>
    {
      data.published_Date = data.published_Date.split('T')[0];
      this.Book_Details.patchValue(data);
      this.search = true;
      alert("Book Found!✅");
    },

    error: () =>
    {
      alert("Book Not Found!❌");
    }
  });
}
  back()
  {
    this.search = false ;
    this.Book_Details.controls.book_Id.setValue(0);
  }

}
