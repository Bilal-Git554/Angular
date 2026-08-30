import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book_Details } from '../../Model';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})

export class AddBook 
{

@ViewChild('add_book') add! : NgForm ;

 initialAdd : boolean = false ;
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
  const getBook = localStorage.getItem("Book_Details");
  const parsing : Book_Details[] = getBook ? JSON.parse(getBook) : [];
  
  const setBook = this.add.value;
  parsing.push(setBook);

  localStorage.setItem("Book_Details",JSON.stringify(parsing));
  console.log(parsing);

  alert("Book Added Successfully!✅")
  this.add.resetForm();
  this.initialAdd = false ;
}

  resetInput()
  {
    this.add.resetForm();
  }

  addBook()
  {
    this.initialAdd = true ;
  }
}
