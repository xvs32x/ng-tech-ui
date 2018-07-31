import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { TechStateSpinnerComponentClass } from '../../../classes/tech-state-spinner-component.class';


@Component({
  selector: 'tech-card',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechCardComponent extends TechStateSpinnerComponentClass {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-card', 'default');
  }

}
