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
  //Setting The LocalStorage Data As A Default Value For The Signal...
//===================================================================================================================
  
addBookInput(new_book : Book_Details)
  {
   const addToLocalStorage = this.checkLocalStorage();
   
   if(addToLocalStorage.some(b => Number(b.book_id) === Number(new_book.book_id)))
   {
    alert("Book ID Already Exists!❌");
    return ;
   }
   else
  {
   const setBook = new_book;
   addToLocalStorage.push(setBook);
  
   localStorage.setItem("Book_Details",JSON.stringify(addToLocalStorage));
    
   this._add_book.set(this.checkLocalStorage());
   alert("Book Added Successfully!✅")

  }
}
  //Add Book To The Local Storage And Used In View-All-Book Component To Display All The Books...
//===================================================================================================================
 
fetchBookby_Id(find_book : number)
 {
   const getBookfromStorage = this.checkLocalStorage();
   const findBook = getBookfromStorage.find(b => Number(b.book_id) === Number(find_book));

   if(findBook)
   {
    return findBook;
   }
   else
   {
    return false ;
   }

 }
//Using The Same Fetch Id Method For Search Book Update Book And Delete Book...
//===================================================================================================================
  
updateBook(update_book : Book_Details)
  {
   const getBookfromStorage = this.checkLocalStorage();
   const findBook = getBookfromStorage.findIndex(b => Number(b.book_id) === Number(update_book.book_id));

   if(findBook !== -1)
   {
    getBookfromStorage[findBook] = {...update_book} ;

    localStorage.setItem("Book_Details",JSON.stringify(getBookfromStorage));

    this._add_book.set(this.checkLocalStorage());

    alert("Updated Successfully!✅");

    return true ;
   }
    else
    {
     return false ;
    }
  }
  //Update The Book In The LocalStorage As Well As The Signal()...
//===================================================================================================================

deleteBook(delete_book : number)
{
   const getBookfromStorage = this.checkLocalStorage();
   const findBook = getBookfromStorage.filter(b => Number(b.book_id) !== Number(delete_book)); 
   
   if(getBookfromStorage.length > findBook.length)
   {
    localStorage.setItem("Book_Details",JSON.stringify(findBook));

    this._add_book.set(this.checkLocalStorage());

    alert("Book Deleted Successfully!🚮");
    
    return true ;
   }
  
   else
   {
     return false ;
   }
}
  //Delete The Book In The LocalStorage As Well As The Signal()...
//===================================================================================================================

}
