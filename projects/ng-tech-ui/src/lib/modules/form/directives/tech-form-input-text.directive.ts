import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import {
  STATE_CLICKED,
  STATE_DEFAULT,
  STATE_DISABLED,
  STATE_FOCUSED,
  STATE_INVALIDATED,
  STATE_LOADING,
  STATE_VALIDATED
} from '../../../constants/tech-state';


@Directive({
  selector: '[techFormInputText]',
})
export class TechFormInputTextDirective extends TechStateComponentClass implements AfterViewInit {

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-input-text', 'default');
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(e?) {
    if (e && (
      this.isFrozenState ||
      this.state === STATE_DISABLED ||
      this.state === STATE_CLICKED ||
      this.state === STATE_LOADING ||
      this.state === STATE_VALIDATED ||
      this.state === STATE_INVALIDATED
    )) {
      return;
    }
    if (e) {
      this.OnMouseEnter.next(e);
    }
    this.switchState(STATE_FOCUSED);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e?) {
    if (e && (
      this.isFrozenState ||
      this.state === STATE_DISABLED ||
      this.state === STATE_CLICKED ||
      this.state === STATE_LOADING ||
      this.state === STATE_VALIDATED ||
      this.state === STATE_INVALIDATED
    )) {
      return;
    }
    if (e) {
      this.OnMouseLeave.next(e);
    }
    this.switchState(STATE_DEFAULT);
  }

  ngAfterViewInit() {
    this.el.nativeElement.onblur = (e) => {
      this.onBlur(e);
    };
  }

}
