import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '#5789D8';
  }

}
