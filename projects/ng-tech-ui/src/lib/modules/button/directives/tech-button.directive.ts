import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';


@Directive({
  selector: '[techButton]',
})
export class TechButtonDirective extends TechStateComponentClass implements AfterViewInit {

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
