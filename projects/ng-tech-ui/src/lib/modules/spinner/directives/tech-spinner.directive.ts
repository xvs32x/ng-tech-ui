import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[techSpinner]'
})
export class TechSpinnerDirective implements OnInit, OnChanges {
  spinner: HTMLElement;
  @Input() isShow: boolean;
  @Input() color: string;
  @Input() cancelable: boolean;
  @Output() OnCancel: EventEmitter<any> = new EventEmitter<any>();

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
    // Append, show and animate
    this.el.nativeElement.appendChild(this.spinner);
  }

  ngOnInit() {
    if (this.color) {
      this.spinner.style.color = this.color;
    }
    // Cancel
    if (this.cancelable) {
      this.spinner.style.cursor = 'pointer';
      this.spinner.onclick = ($event) => {
        this.OnCancel.next($event);
        this.toggle(false);
      };
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isShow && changes.isShow.previousValue !== changes.isShow.currentValue) {
      this.toggle(changes.isShow.currentValue);
    }
  }

  toggle(isShow: boolean) {
    if (isShow) {
      setTimeout(() => {
        this.spinner.className = 'tech-ui-spinner default';
      }, 100);
    } else {
      this.spinner.className = 'tech-ui-spinner disabled';
    }
  }
}
