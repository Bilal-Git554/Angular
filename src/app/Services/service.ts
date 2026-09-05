import { Injectable, signal } from '@angular/core';
import { Book_Details } from '../../Model';

@Injectable({
  providedIn: 'root',
})
export class Service 
{
  private _add_book = signal<Book_Details[]>(this.checkLocalStorage());
  readonly add_book = this._add_book.asReadonly();  
  
  private checkLocalStorage() : Book_Details[]
  {
   const getBook = localStorage.getItem("Book_Details");
   const parsing : Book_Details[] = getBook ? JSON.parse(getBook) : [];
   return parsing;
  }

  dataInput(new_book : Book_Details)
  {
   const addToLocalStorage = this.checkLocalStorage();
   
   if(addToLocalStorage.some(b => Number(b.book_id) === Number(new_book.book_id)))
   {
    alert("Book ID Already Exists!❌");
    return ;
   }

   const setBook = new_book;
   addToLocalStorage.push(setBook);
  
   localStorage.setItem("Book_Details",JSON.stringify(addToLocalStorage));
    
   this._add_book.set(this.checkLocalStorage());
   alert("Book Added Successfully!✅")


  }


}
