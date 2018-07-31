import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';


@Directive({
  selector: '[techFormInputText]',
})
export class TechFormInputTextDirective extends TechStateComponentClass implements AfterViewInit {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-input-text', 'default');
  }

  ngAfterViewInit() {
    this.el.nativeElement.onblur = (e) => {
      this.onBlur(e);
    };
  }

}
