import { Component, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Component({
  selector: 'tech-card-footer',
  template: `<ng-content></ng-content>`,
})
export class TechCardFooterComponent extends TechStateComponentClass {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-card-footer', 'default');
  }

}
