import { Routes } from '@angular/router';
import { HomeBook } from './home-book/home-book';
import { AddBook } from './add-book/add-book';
import { UpdateBook } from './update-book/update-book';
import { DeleteBook } from './delete-book/delete-book';
import { StockAvail } from './stock-avail/stock-avail';
import { SearchBook } from './search-book/search-book';
import { InvalidComponent } from './invalid-component/invalid-component';
import { ViewAllBook } from './view-all-book/view-all-book';

export const routes: Routes = [
    { path : '' , redirectTo : 'home-book' , pathMatch : 'full' },
    { path : 'home-book' , component : HomeBook },
    { path : 'add-book' , component : AddBook },
    { path : 'update-book' , component : UpdateBook },
    { path : 'delete-book' , component : DeleteBook },
    { path : 'search-book' , component : SearchBook },
    { path : 'stock-avail' , component : StockAvail },
    { path : 'view-all-book' , component : ViewAllBook},
    { path : '**' , component : InvalidComponent}
];
