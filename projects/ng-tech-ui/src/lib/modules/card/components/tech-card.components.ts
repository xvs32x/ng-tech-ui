import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';


@Component({
  selector: 'tech-card',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechCardComponent extends TechStateComponentClass {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-card', 'default');
  }

}
