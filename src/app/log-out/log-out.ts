import { Component } from '@angular/core';
import { Service } from '../Services/service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-log-out',
  imports: [],
  templateUrl: './log-out.html',
  styleUrl: './log-out.css',
})
export class LogOut 
{
  service = inject(Service);
}
