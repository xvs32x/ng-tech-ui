import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { TechStateSpinnerComponentClass } from '../../../classes/tech-state-spinner-component';


@Directive({
  selector: '[techButton]',
})
export class TechButtonDirective extends TechStateSpinnerComponentClass implements AfterViewInit {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-button', 'default');
  }

  ngAfterViewInit() {
    this.el.nativeElement.onblur = (e) => {
      this.onBlur(e);
    };
  }

}
