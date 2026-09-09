import { inject, Injectable, signal } from '@angular/core';
import { Add_Book_Details, Book_Details, Whole_Stock } from '../../Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service 
{
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7250/api/Books';
  private stockUrl = 'https://localhost:7250/api/Stock';
  stockApi = signal<Whole_Stock | null> (null);
  testingApi = signal<Book_Details[]> ([]);

  //Backend Link And Storing All Books In The Signal...And Stock Report In The Signal...
//===================================================================================================================

  getBooks()
  {
    return this.http.get<Book_Details[]>(this.apiUrl).subscribe(
      {
        next : (data) =>
        {
          this.testingApi.set(data);
        },
        error : (err) =>
        {
          alert("Unable To Fetch The Books!❌");
        }
      }
    )  
  }

//Getting All Books From The Backend...
//===================================================================================================================

  addBook(new_Book : Add_Book_Details)
  {
    return this.http.post<Add_Book_Details>(this.apiUrl,new_Book).subscribe(
      {
        next : (data) =>
        {
          alert("Book Added Successfully!✅")
        },
        error : (err) =>
        {
          alert("Book Addition Unsuccessful!❌")
        }
      }
    )
  }

//Adding Book To The Backend...
//===================================================================================================================

  getBookby_Id(find_Book : number)
  {
   return this.http.get<Book_Details>(
    `${this.apiUrl}/${find_Book}`
  );
  }

//Getting The Book By The Id...  
//===================================================================================================================
  
deleteBookby_Id(delete_book : number)
  {
    return this.http.delete(
      `${this.apiUrl}/${delete_book}`
    );
  }

//Deleting The Book By The Id...
//===================================================================================================================

  updateBookby_Id (update_book : Add_Book_Details)
  {
    return this.http.put(
      `${this.apiUrl}/${update_book.book_Id}`,
      update_book
    );
  }

//Updating The Book By The Id...
//=================================================================================================================== 

wholeStock()
{
  return this.http.get<Whole_Stock>(this.stockUrl).subscribe({
   next : (data) =>
   {
    console.log(data);
    this.stockApi.set(data);
   },
   error : (err) =>
   {
    alert("Unable To Fetch The Stock!❌");
   }
  })
}
}
//Fetching The Whole Report...
//===================================================================================================================
