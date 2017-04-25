import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private getElement: ElementRef) { }

  ngOnInit(){
    this.getElement.nativeElement.style.backgroundColor = 'dodgerblue';
    this.getElement.nativeElement.style.color = '#fff';
    this.getElement.nativeElement.style.padding = '15px';
  }

}
