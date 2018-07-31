import { AfterViewInit, Directive, ElementRef, HostBinding } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Directive({
  selector: '[techFormInputBackground]'
})
export class TechFormInputBackgroundDirective extends TechStateComponentClass implements AfterViewInit {
  @HostBinding('attr.tabindex') tabIndex = 1;

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-input-background', 'default');
  }

  ngAfterViewInit() {
    this.el.nativeElement.onblur = (e) => {
      this.onBlur(e);
    };
  }

}
