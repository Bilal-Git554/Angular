import { Component, OnInit, inject } from '@angular/core';
import { Service } from '../Services/service';

@Component({
  selector: 'app-stock-avail',
  imports: [],
  templateUrl: './stock-avail.html',
  styleUrl: './stock-avail.css',
})
export class StockAvail implements OnInit
{
  service = inject(Service);
  ngOnInit()
  {
   this.service.wholeStock();
  }
  
  show_stock = this.service.stockApi();
}
