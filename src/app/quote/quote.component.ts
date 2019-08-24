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
  new Quote(1,'Love For All, Hatred For None.','Khalifatul Masih III',new Date(2019,3,14),'klryan'),
  new Quote(2,'Life, if well lived, is long enough.','Seneca',new Date(2018,3,14),'Toba'),
  new Quote(3,'The two most powerful warriors are patience and time.','Leo Tolstoy ',new Date(2015,3,14),'Youck'),
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

// goals: Goal[] = [
//   new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2019,3,14)),
//   new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
//   new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,1,12)),
//   new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
//   new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
//   new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,3,14)),
// ];







