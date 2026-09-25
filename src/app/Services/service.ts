import { inject, Injectable, signal } from '@angular/core';
import { Add_Book_Details, Book_Details, Jwt_Response, User_Credentials, Whole_Stock } from '../../Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service 
{
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7250/api/Books';
  private stockUrl = 'https://localhost:7250/api/Stock';
  private tokenUrl = 'https://localhost:7250/api/User_Credentials_/login';
  private newUserUrl = 'https://localhost:7250/api/User_Credentials_';

  private _stockApi = signal<Whole_Stock | null> (null);
  readonly stockApi = this._stockApi.asReadonly();

  private _testingApi = signal<Book_Details[]> ([]);
  readonly testingApi = this._testingApi.asReadonly();
  //Backend Link And Storing All Books In The Signal...And Stock Report In The Signal...
  
  private _checkLogIn = signal(localStorage.getItem('Token') !== null);
  readonly checkLogIn = this._checkLogIn.asReadonly();
//===================================================================================================================

  getBooks()
  {
    return this.http.get<Book_Details[]>(this.apiUrl).subscribe(
      {
        next : (data) =>
        {
          this._testingApi.set(data);
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
    return this.http.post<Add_Book_Details>(this.apiUrl,new_Book);
  }

//Adding Book To The Backend...
//===================================================================================================================

  getBookby_Id(find_Book : number)
  {
   return this.http.post<Book_Details>(`${this.apiUrl}/read/${find_Book}`,{});
  }

//Getting The Book By The Id...  
//===================================================================================================================
  
deleteBookby_Id(delete_book : number)
  {
    return this.http.post(`${this.apiUrl}/delete/${delete_book}`,{});
  }

//Deleting The Book By The Id...
//===================================================================================================================

  updateBookby_Id (update_book : Add_Book_Details)
  {
    return this.http.put(
      `${this.apiUrl}/${update_book.book_Id}`,update_book);
  }

//Updating The Book By The Id...
//=================================================================================================================== 

wholeStock()
{
  return this.http.get<Whole_Stock>(this.stockUrl).subscribe({
   next : (data) =>
   {
    this._stockApi.set(data);
    true;
   },
   error : (err) =>
   {
    alert("Unable To Fetch The Stock!❌");
   }
  })
}

//Fetching The Whole Report...
//===================================================================================================================

 newUser(new_user : User_Credentials)
 {
  return this.http.post<User_Credentials>(this.newUserUrl,new_user);
 }

//For New User
//====================================================================================================================

alreadyUser(already_user : User_Credentials)
{
 return this.http.post<Jwt_Response>(this.tokenUrl,already_user).subscribe({
      next : (data) =>
      {
        console.log(data);
        localStorage.setItem('Token',data.token);
        this._checkLogIn.set(true);
        alert("User Founded Successfully!✅");
      },
      error : (err) =>
      {
        alert("User Not Found! Or Incorrect Password!❌");
      }
    });
}

//For Existing User
//====================================================================================================================

logOut()
{
  localStorage.removeItem('Token');
  alert("Logged Out Successfully!✅");
}
//For Log Out
//====================================================================================================================
}