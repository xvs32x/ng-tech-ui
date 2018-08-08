import { Directive, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Directive({selector: '[techFormSelectPlaceholder]'})
export class TechFormSelectPlaceholderDirective extends TechStateComponentClass {
  constructor(el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-select-placeholder', 'default');
  }
}
