import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import { STATE_CLICKED } from '../../../constants/tech-state';


@Directive({
  selector: '[techFormLabel]'
})
export class TechFormLabelDirective extends TechStateComponentClass implements OnInit, AfterViewInit {

  constructor(public el: ElementRef) {
    super(el);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.el.nativeElement.classList.add('tech-ui-form-label');
  }

  @HostListener('click', ['$event']) onClick(e?) {
    if (e && this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
    }
    this.switchState(STATE_CLICKED);
  }

}
