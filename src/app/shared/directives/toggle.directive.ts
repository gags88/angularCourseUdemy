import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick(){
    var classNameStr = this.elRef.nativeElement.className;
    if (/btn-success/.test(classNameStr)) {
      this.renderer.removeClass(this.elRef.nativeElement, 'btn-success');
      this.renderer.addClass(this.elRef.nativeElement, 'btn-primary');
    }else {
      this.renderer.addClass(this.elRef.nativeElement, 'btn-success');
      this.renderer.removeClass(this.elRef.nativeElement, 'btn-primary');
    }
  }

}
