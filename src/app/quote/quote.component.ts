import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] =[
    
  
  new Quote(1,'Love For All, Hatred For None.','Khalifatul Masih III',new Date(2019,3,14),'klryan'),
  new Quote(2,'Life, if well lived, is long enough.','Seneca',new Date(2018,3,14),'Toba'),
  new Quote(3,'The two most powerful warriors are patience and time.','Leo Tolstoy ',new Date(2015,3,14),'Youck'),
  new Quote(4,'Change your thoughts and you change your world','Norman Vincent ',new Date(2012,1,18),'Hope'),
  new Quote(5,'It always seems impossible until it’s done.','Nelson Mandela',new Date(1998,8,14),'Alexandre'),
 
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

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  ngOnInit() {
  }

}




