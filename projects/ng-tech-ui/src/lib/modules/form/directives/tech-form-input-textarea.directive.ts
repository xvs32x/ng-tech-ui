import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Directive({
  selector: '[techFormInputTextarea]'
})
export class TechFormInputTextareaDirective extends TechStateComponentClass implements AfterViewInit {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-input-textarea', 'directive');
  }

  ngAfterViewInit() {
    this.el.nativeElement.onblur = (e) => {
      this.onBlur(e);
    };
  }

}
