import { Routes } from '@angular/router';
import { User_Sign_In } from './user_sign_in/user_sign_in';
import { AddBook } from './add-book/add-book';
import { UpdateBook } from './update-book/update-book';
import { DeleteBook } from './delete-book/delete-book';
import { StockAvail } from './stock-avail/stock-avail';
import { SearchBook } from './search-book/search-book';
import { InvalidComponent } from './invalid-component/invalid-component';
import { ViewAllBook } from './view-all-book/view-all-book';
import { authGuard } from './auth-guard';
import { LogOut } from './log-out/log-out';
import { guestGuard } from './guest-guard';
import { ForgotPassword } from './forgot-password/forgot-password';
import { ResetPassword } from './reset-password/reset-password';
import { Admin_Sign_In } from './admin_sign_in/admin_sign_in';

export const routes: Routes = [ 
    { path : '' , redirectTo : 'user_sign_in' , pathMatch : 'full' },
    { path : 'user_sign_in' , component : User_Sign_In, canActivate: [guestGuard] },
    { path : 'forgot-password' , component : ForgotPassword },
    { path : 'reset-password' , component : ResetPassword },
    { path : 'admin_sign_in' , component : Admin_Sign_In, canActivate: [authGuard] },
    { path : 'add-book' , component : AddBook, canActivate: [authGuard] },
    { path : 'log-out' , component : LogOut, canActivate: [authGuard] },
    { path : 'update-book' , component : UpdateBook, canActivate: [authGuard]  },
    { path : 'delete-book' , component : DeleteBook, canActivate: [authGuard]  },
    { path : 'search-book' , component : SearchBook, canActivate: [authGuard]  },
    { path : 'stock-avail' , component : StockAvail, canActivate: [authGuard]  },
    { path : 'view-all-book' , component : ViewAllBook, canActivate: [authGuard] },
    { path : '**' , component : InvalidComponent}
];
