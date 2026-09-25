import { Routes } from '@angular/router';
import { SigIn } from './sign-in/sign-in';
import { AddBook } from './add-book/add-book';
import { UpdateBook } from './update-book/update-book';
import { DeleteBook } from './delete-book/delete-book';
import { StockAvail } from './stock-avail/stock-avail';
import { SearchBook } from './search-book/search-book';
import { InvalidComponent } from './invalid-component/invalid-component';
import { ViewAllBook } from './view-all-book/view-all-book';
import { authGuard } from './auth-guard';
import { LogOut } from './log-out/log-out';

export const routes: Routes = [
    { path : '' , redirectTo : 'sign-in' , pathMatch : 'full' },
    { path : 'sign-in' , component : SigIn },
    { path : 'add-book' , component : AddBook, canActivate: [authGuard] },
    { path : 'log-out' , component : LogOut, canActivate: [authGuard] },
    { path : 'update-book' , component : UpdateBook, canActivate: [authGuard]  },
    { path : 'delete-book' , component : DeleteBook, canActivate: [authGuard]  },
    { path : 'search-book' , component : SearchBook, canActivate: [authGuard]  },
    { path : 'stock-avail' , component : StockAvail, canActivate: [authGuard]  },
    { path : 'view-all-book' , component : ViewAllBook, canActivate: [authGuard] },
    { path : '**' , component : InvalidComponent}
];
