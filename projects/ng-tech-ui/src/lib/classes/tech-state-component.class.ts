import { STATE_CLICKED, STATE_DEFAULT, STATE_DISABLED, STATE_FOCUSED, STATE_LOADING } from '../constants/tech-state';
import { ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TechSpinnerDirective } from '../modules/spinner/directives/tech-spinner.directive';

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
  @HostBinding('attr.techSpinner') techSpinner: TechSpinnerDirective;

  constructor(public el: ElementRef) {
    this.techSpinner = new TechSpinnerDirective(this.el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.state && changes.state.previousValue !== changes.state.currentValue) {
      if (changes.state.previousValue) {
        this.el.nativeElement.classList.remove(changes.state.previousValue);
      }
      this.el.nativeElement.classList.add(changes.state.currentValue);
      if (changes.state.currentValue === STATE_LOADING) {
        this.techSpinner.switchIsShow(true);
      }
      if (changes.state.previousValue === STATE_LOADING) {
        this.techSpinner.switchIsShow(false);
      }
    }
    if (changes.isShow && changes.isShow.previousValue !== changes.isShow.currentValue) {
      this.techSpinner.switchIsShow(changes.isShow.currentValue);
    }
    if (changes.isSpinnerCancelable && changes.isSpinnerCancelable.previousValue !== changes.isSpinnerCancelable.currentValue) {
      this.techSpinner.switchIsCancelable(changes.isSpinnerCancelable.currentValue);
    }
    if (changes.spinnerColor && changes.spinnerColor.previousValue !== changes.spinnerColor.currentValue) {
      this.techSpinner.changesColor(changes.spinnerColor.currentValue);
    }
    if (changes.OnSpinnerCancel) {
      this.techSpinner.changeOnSpinnerCancel(changes.OnSpinnerCancel.currentValue);
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
