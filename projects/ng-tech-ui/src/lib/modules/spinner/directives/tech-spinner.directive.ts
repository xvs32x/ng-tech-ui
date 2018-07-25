import { Directive, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[techSpinner]'
})
export class TechSpinnerDirective implements OnChanges {
  spinner: HTMLElement;
  @Input() spinnerIsShow: boolean;
  @Input() spinnerColor: string;
  @Input() isSpinnerCancelable: boolean;
  @Input() @Output() OnSpinnerCancel: EventEmitter<any> = new EventEmitter<any>();

  constructor(public el: ElementRef) {
    this.spinner = document.createElement('div');
    this.spinner.className = 'tech-ui-spinner disabled';
    this.spinner.innerHTML = `
      <div class="animation-container">
          <div></div>
          <div></div>
          <div></div>
      </div>
    `;
    this.el.nativeElement.appendChild(this.spinner);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isShow && changes.isShow.previousValue !== changes.isShow.currentValue) {
      this.switchIsShow(changes.isShow.currentValue);
    }
    if (changes.isSpinnerCancelable && changes.isSpinnerCancelable.previousValue !== changes.isSpinnerCancelable.currentValue) {
      this.switchIsCancelable(changes.isSpinnerCancelable.currentValue);
    }
    if (changes.spinnerColor && changes.spinnerColor.previousValue !== changes.spinnerColor.currentValue) {
      this.changesColor(changes.spinnerColor.currentValue);
    }
    if (changes.OnSpinnerCancel) {
      this.changeOnSpinnerCancel(changes.OnSpinnerCancel.currentValue);
    }
  }

  switchIsShow(isShow: boolean) {
    if (isShow) {
      setTimeout(() => {
        this.spinner.className = 'tech-ui-spinner default';
      }, 100);
    } else {
      this.spinner.className = 'tech-ui-spinner disabled';
    }
  }

  switchIsCancelable(isCancelable: boolean) {
    if (isCancelable) {
      this.spinner.style.cursor = 'pointer';
      this.spinner.onclick = ($event) => {
        this.OnSpinnerCancel.next($event);
        this.switchIsShow(false);
      };
    } else {
      this.spinner.style.cursor = 'default';
      this.spinner.onclick = null;
    }
  }

  changesColor(color: string) {
    this.spinner.style.color = color;
  }

  changeOnSpinnerCancel(event: EventEmitter<any>) {
    this.OnSpinnerCancel = event;
  }

}
