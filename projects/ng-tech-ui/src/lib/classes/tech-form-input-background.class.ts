import { TechStateComponentClass } from './tech-state-component.class';
import { ElementRef, HostListener } from '@angular/core';
import { STATE_CLICKED } from '../constants/tech-state';

export class TechFormInputBackgroundClass extends TechStateComponentClass {

  constructor(public el: ElementRef) {
    super(el);
  }

  @HostListener('document:click', ['$event']) clickout(e) {
    if (!this.el.nativeElement.contains(event.target)) {
      if (e && (
        this.isFrozenState ||
        this.state !== STATE_CLICKED
      )) {
        return;
      }
      this.onBlur(e);
    }
  }

}
