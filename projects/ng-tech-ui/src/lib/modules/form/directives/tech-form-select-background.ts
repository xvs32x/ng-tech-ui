import { Directive, ElementRef } from '@angular/core';
import { TechFormInputBackgroundClass } from '../../../classes/tech-form-input-background.class';

@Directive({
  selector: '[techFormSelectBackground]'
})
export class TechFormSelectBackgroundDirective extends TechFormInputBackgroundClass {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-select-background', 'default');
  }

}
