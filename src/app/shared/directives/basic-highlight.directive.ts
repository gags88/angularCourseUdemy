import { Directive,ElementRef, OnInit,Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'dodgerblue';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string = '#333';
  @HostBinding('style.padding') padding: string = '0';

  constructor(private getElement: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // By Element Ref
    // this.getElement.nativeElement.style.backgroundColor = 'dodgerblue';
    // this.getElement.nativeElement.style.color = '#fff';
    // this.getElement.nativeElement.style.padding = '15px';

    // this.renderer.setStyle(this.getElement.nativeElement, "background-color", "dodgerblue");
    // this.renderer.setStyle(this.getElement.nativeElement, "color", "#fff");
    // this.renderer.setStyle(this.getElement.nativeElement, "padding", "15px");
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseout') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.getElement.nativeElement, "background-color", "transparent");
    // this.renderer.setStyle(this.getElement.nativeElement, "color", "#333");
    // this.renderer.setStyle(this.getElement.nativeElement, "padding", "0");

    // this.backgroundColor = 'transparent';
    this.color = "#333";
    this.padding= "0";
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mousemove') onHover(eventData: Event){
    // this.renderer.setStyle(this.getElement.nativeElement, "background-color", "dodgerblue");
    // this.renderer.setStyle(this.getElement.nativeElement, "color", "#fff");
    // this.renderer.setStyle(this.getElement.nativeElement, "padding", "15px");

    // this.backgroundColor = 'dodgerblue';
    this.color = "#fff"
    this.padding= "15px";
    this.backgroundColor =  this.highlightColor;
  }


}
