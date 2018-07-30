import { STATE_LOADING } from '../constants/tech-state';
import { ElementRef, EventEmitter, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TechSpinnerDirective } from '../modules/spinner/directives/tech-spinner.directive';
import { TechStateComponentClass } from './tech-state-component.class';

export class TechStateSpinnerComponentClass extends TechStateComponentClass implements OnChanges {
  @Input() isSpinnerCancelable: boolean;
  @Input() spinnerColor: string;
  @Input() OnSpinnerCancel: EventEmitter<any> = new EventEmitter<any>();
  @HostBinding('attr.techSpinner') techSpinner: TechSpinnerDirective;

  constructor(public el: ElementRef) {
    super(el);
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

}
