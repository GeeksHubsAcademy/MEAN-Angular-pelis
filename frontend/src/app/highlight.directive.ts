import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element:ElementRef) { 
    // element.nativeElement
   element.nativeElement.style.backgroundColor = 'yellow';
   element.nativeElement.style.color = 'black';
  }

}
