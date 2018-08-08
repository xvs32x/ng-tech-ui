import { Directive, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Directive({
  selector: '[techFormSelectOverlay]'
})
export class TechFormSelectOverlayDirective extends TechStateComponentClass {

  constructor(el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-select-overlay', 'default');
  }

}
