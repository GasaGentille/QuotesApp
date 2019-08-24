import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] =[
    
  //   { quote_id:1,quote_name:'quote1',quote_description: 'description of quote1' },
  //   { quote_id:2,quote_name:'quote2',quote_description: 'description of quote2' },
  //   { quote_id:1,quote_name:'quote3',quote_description: 'description of quote3' },
  //  ];
  new Quote(1,'quote1','description of quote1'),
  new Quote(2,'quote2','description of quote2'),
  new Quote(3,'quote3','description of quote3'),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}







