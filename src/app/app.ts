import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddBook } from './add-book/add-book';
import { DeleteBook } from './delete-book/delete-book';
import { UpdateBook } from './update-book/update-book';
import { HomeBook } from './home-book/home-book';
import { SearchBook } from './search-book/search-book';
import { StockAvail } from './stock-avail/stock-avail';
import { Buttons } from './buttons/buttons';
import { FormsModule } from '@angular/forms';
import { InvalidComponent } from './invalid-component/invalid-component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            AddBook,
            DeleteBook,
            UpdateBook,
            HomeBook,
            SearchBook,
            StockAvail,
            FormsModule,
            Buttons,
            InvalidComponent
          ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App 
{
  title = "Megaruf Bilal K"; 

 routes = [
  { name: '🏠 HOME', path: '/home-book' },
  { name: '➕ ADD BOOK', path: '/add-book' },
  { name: '✏ UPDATE BOOK', path: '/update-book' },
  { name: '🗑 DELETE BOOK', path: '/delete-book' },
  { name: '🔍 SEARCH BOOK', path: '/search-book'},
  { name: '📦 STOCK AVAILABILITY', path: '/stock-avail'}
 ]
//Bilal
}
