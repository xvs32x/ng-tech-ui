import { Directive, ElementRef, HostListener } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import { STATE_FOCUSED } from '../../../constants/tech-state';

@Directive({
  selector: '[techFormInputBackground]'
})
export class TechFormInputBackgroundDirective extends TechStateComponentClass {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-input-background', 'default');
  }

  @HostListener('document:click', ['$event']) clickout(e) {
    if (!this.el.nativeElement.contains(event.target)) {
      if (e && (
        this.isFrozenState ||
        this.state !== STATE_FOCUSED
      )) {
        return;
      }
      this.onBlur(e);
    }
  }

}
