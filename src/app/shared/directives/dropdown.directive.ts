import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private getElement: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') click(eventData: Event){
    console.log("Clicked");
    
  }

}
