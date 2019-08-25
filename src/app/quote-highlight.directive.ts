import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = "lightblue"
  }
}




