import { STATE_CLICKED, STATE_DEFAULT, STATE_DISABLED, STATE_FOCUSED, STATE_LOADING } from '../constants/tech-state';
import { ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

export class TechStateComponentClass implements OnChanges {
  @Input() state: string;
  @Input() isFrozenState: boolean;
  @Input() isSpinnerCancelable: boolean;
  @Input() spinnerColor: string;
  @Input() OnSpinnerCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() OnMouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnMouseLeave: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnBlur: EventEmitter<Event> = new EventEmitter<Event>();
  constructor(public el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.state && changes.state.previousValue !== changes.state.currentValue) {
      if (changes.state.previousValue) {
        this.el.nativeElement.classList.remove(changes.state.previousValue);
      }
      this.el.nativeElement.classList.add(changes.state.currentValue);
    }
  }

  @HostListener('mouseover', ['$event']) onMouseOver(e?) {
    if (e && (this.isFrozenState || this.state === STATE_DISABLED || this.state === STATE_CLICKED || this.state === STATE_LOADING)) {
      return;
    }
    if (e) {
      this.OnMouseOver.next(e);
    }
    this.switchState(STATE_FOCUSED);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e?) {
    if (e && (this.isFrozenState || this.state === STATE_DISABLED || this.state === STATE_CLICKED || this.state === STATE_LOADING)) {
      return;
    }
    if (e) {
      this.OnMouseLeave.next(e);
    }
    this.switchState(STATE_DEFAULT);
  }

  @HostListener('click', ['$event']) onClick(e?) {
    if (e && (this.isFrozenState || this.state === STATE_DISABLED || this.state === STATE_CLICKED || this.state === STATE_LOADING)) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
    }
    this.switchState(STATE_CLICKED);
  }

  @HostListener('onblur', ['$event']) onBlur(e?) {
    if (e && (this.isFrozenState || this.state === STATE_DISABLED || this.state === STATE_LOADING)) {
      return;
    }
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
