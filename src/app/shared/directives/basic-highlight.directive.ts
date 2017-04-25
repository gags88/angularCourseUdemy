import { Directive,ElementRef, OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private getElement: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.getElement.nativeElement.style.backgroundColor = 'dodgerblue';
    // this.getElement.nativeElement.style.color = '#fff';
    // this.getElement.nativeElement.style.padding = '15px';

    this.renderer.setStyle(this.getElement.nativeElement, "background-color", "dodgerblue");
    this.renderer.setStyle(this.getElement.nativeElement, "color", "#fff");
    this.renderer.setStyle(this.getElement.nativeElement, "padding", "15px");
  }

}
