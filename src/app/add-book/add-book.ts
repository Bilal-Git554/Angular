import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Book_Details
{
  book_id : number,
  book_name : string,
  author_name : string,
  about_book : string,
  published_date : string,
  category : string
}

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})


export class AddBook 
{

@ViewChild('book') book! : NgForm ;

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

submit()
{
  const setBook = this.book.value;
  localStorage.setItem("Book_Details",JSON.stringify(setBook));
  console.log(setBook);

  const getBook = localStorage.getItem("Book_Details");
  const parsing = getBook?JSON.parse(getBook):null;
  console.log(parsing);

}

}
