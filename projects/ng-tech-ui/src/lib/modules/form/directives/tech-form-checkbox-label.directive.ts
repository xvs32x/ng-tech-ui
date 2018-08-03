import { Directive, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Directive({
  selector: '[techFormCheckboxLabel]'
})
export class TechFormCheckboxLabelDirective extends TechStateComponentClass {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-checkbox-label', 'default');
  }

}
