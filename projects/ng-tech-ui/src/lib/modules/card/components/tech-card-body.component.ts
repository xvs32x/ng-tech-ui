import { Component, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';


@Component({
  selector: 'tech-card-body',
  template: `<ng-content></ng-content>`,
})
export class TechCardBodyComponent extends TechStateComponentClass {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-card-body', 'default');
  }

}
