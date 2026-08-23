import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons 
{
 @Input() Book_Buttons ! : { name : string , path : string };
}
