import { Component, signal } from '@angular/core';
import { Book_Details } from '../../Model';
import { OnInit, inject } from '@angular/core';
import { Service } from '../Services/service';

@Component({
  selector: 'app-view-all-book',
  imports: [],
  templateUrl: './view-all-book.html',
  styleUrl: './view-all-book.css',
})
export class ViewAllBook 
{
  service = inject(Service);

  // viewBook = signal<Book_Details[]>([]);
  
  // ngOnInit()
  // {
  //   const getBook = localStorage.getItem("Book_Details");
  //   const parsing : Book_Details[] = getBook ? JSON.parse(getBook) : [] ;

  //   if(parsing.length > 0)
  //   {
  //     this.viewBook.set(parsing);
  //   }
  // }
   
}
