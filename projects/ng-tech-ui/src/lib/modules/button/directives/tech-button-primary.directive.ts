import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import { TechStateSpinnerComponentClass } from '../../../classes/tech-state-spinner-component';


@Directive({
  selector: '[techButtonPrimary]',
})
export class TechButtonPrimaryDirective extends TechStateSpinnerComponentClass implements AfterViewInit {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-button-primary', 'default');
  }

  ngAfterViewInit() {
    this.el.nativeElement.onblur = (e) => {
      this.onBlur(e);
    };
  }

}
