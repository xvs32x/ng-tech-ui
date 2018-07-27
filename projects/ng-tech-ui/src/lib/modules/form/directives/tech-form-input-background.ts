import { Directive, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Directive({
  selector: '[techFormInputBackground]'
})
export class TechFormInputBackgroundDirective extends TechStateComponentClass {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-input-background', 'default');
  }

}
