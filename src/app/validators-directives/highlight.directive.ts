import {  Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    
  /*
  ElementRef: A wrapper around a native element inside of a View.
  We inject an instance on constructor and we gain access to the element.
  However usage of ElementRef is not encouraged due to security reasons. 
  It also creates tight coupling between the application and rendering layers which makes is difficult to run an app on multiple platforms. 
  */    
  constructor(private el: ElementRef) { }
  
  //User chooses a color and we receive it via Input Decorator
  @Input('appHighlight') highlightColor: string;

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor|| 'red');
  }

  /*
  HostListener Decorator declares that we listen for a specific DOM event, and it provides a handler method to run when that event occurs.
  */
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
