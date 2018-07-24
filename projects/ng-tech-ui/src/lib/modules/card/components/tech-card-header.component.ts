import { Component, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';


@Component({
  selector: 'tech-card-header',
  template: `<ng-content></ng-content>`,
})
export class TechCardHeaderComponent extends TechStateComponentClass {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-card-header', 'default');
  }

}
