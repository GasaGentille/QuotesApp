import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] =[
    { quote_id:1,quote_name:'quote1',quote_description: 'description of quote1' },
    { quote_id:2,quote_name:'quote2',quote_description: 'description of quote2' },
    { quote_id:1,quote_name:'quote3',quote_description: 'description of quote3' },
   ];

  constructor() { }

  ngOnInit() {
  }

}






