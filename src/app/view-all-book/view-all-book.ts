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
  
  ngOnInit() 
  {
    this.service.getBooks();
  }
 
}
