import { STATE_CLICKED, STATE_DEFAULT, STATE_DISABLED, STATE_FOCUSED } from '../constants/tech-state';
import { ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

export class TechStateComponentClass {
  @Input() state: string;
  @Output() OnMouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnMouseLeave: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnBlur: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(public el: ElementRef) {}

  @HostListener('mouseover', ['$event']) onMouseOver(e?) {
    if (e && this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnMouseOver.next(e);
    }
    this.switchState(STATE_FOCUSED);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e?) {
    if (e && this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnMouseLeave.next(e);
    }
    this.switchState(STATE_DEFAULT);
  }

  @HostListener('click', ['$event']) onClick(e?) {
    if (this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
    }
    this.switchState(STATE_CLICKED);
  }

  @HostListener('onblur', ['$event']) onBlur(e?) {
    if (e) {
      this.OnBlur.next(e);
    }
    this.switchState(STATE_DEFAULT);
  }

  switchState(state: string) {
    this.el.nativeElement.disabled = state === STATE_DISABLED;
    if (state === STATE_CLICKED) {
      this.el.nativeElement.focus();
    }
    this.el.nativeElement.classList.remove(this.state);
    this.el.nativeElement.classList.add(state);
    this.state = state;
  }

}
