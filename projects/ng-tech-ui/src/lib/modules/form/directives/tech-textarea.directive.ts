import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Directive({
  selector: '[techTextarea]'
})
export class TechTextareaDirective extends TechStateComponentClass implements AfterViewInit {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-input', 'directive');
  }

  ngAfterViewInit() {
    this.el.nativeElement.onblur = () => {
      this.onBlur();
    };
  }

}
