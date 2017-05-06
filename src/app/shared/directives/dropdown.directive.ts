import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private getElement: ElementRef, private renderer: Renderer2) {
    renderer.listen('document', 'click', (event)=>{

    })
  }

  @HostListener('click') click(eventData: Event){
    const el = this.getElement.nativeElement.parentElement;
    el.classList.toggle("open")
  }

}
