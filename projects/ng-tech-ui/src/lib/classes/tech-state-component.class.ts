import {
  STATE_CLICKED,
  STATE_DEFAULT,
  STATE_DISABLED,
  STATE_FOCUSED,
  STATE_INVALIDATED,
  STATE_LOADING,
  STATE_VALIDATED
} from '../constants/tech-state';
import { AfterViewInit, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

export class TechStateComponentClass implements OnChanges, AfterViewInit {
  states = [
    STATE_CLICKED,
    STATE_DEFAULT,
    STATE_DISABLED,
    STATE_FOCUSED,
    STATE_INVALIDATED,
    STATE_LOADING,
    STATE_VALIDATED
  ];
  @Input() state: string;
  @Input() isFrozenState: boolean;
  @Output() OnMouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnMouseLeave: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnBlur: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(public el: ElementRef) {
  }

  ngAfterViewInit() {
    this.el.nativeElement.onblur = (e) => {
      this.onBlur(e);
    };
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
      this.OnMouseOver.next(e);
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

  @HostListener('click', ['$event']) onClick(e?, force?: boolean) {
    if (e && !force && (
      this.isFrozenState ||
      this.state === STATE_DISABLED ||
      this.state === STATE_CLICKED ||
      this.state === STATE_LOADING
    )) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
    }
    this.switchState(STATE_CLICKED);
  }

  @HostListener('onblur', ['$event']) onBlur(e?) {
    if (e && (
      this.isFrozenState ||
      this.state === STATE_DISABLED ||
      this.state === STATE_LOADING
    )) {
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
    this.el.nativeElement.classList.remove(...this.states);
    this.el.nativeElement.classList.add(state);
    this.state = state;
  }

}
