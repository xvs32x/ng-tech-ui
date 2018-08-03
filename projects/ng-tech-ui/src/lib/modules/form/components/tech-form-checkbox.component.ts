import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import { STATE_CLICKED, STATE_DISABLED, STATE_LOADING } from '../../../constants/tech-state';


@Component({
  selector: 'tech-form-checkbox-component',
  template: `
    <button techFormRadioLabel>
      <ng-content></ng-content>
    </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechFormCheckboxComponent extends TechStateComponentClass implements OnChanges {
  @Input() model: string;
  @Input() name: string;
  @Output() OnModelChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-checkbox', 'default');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model) {
      if (changes.model.currentValue === this.name) {
        this.onClick();
      } else {
        this.onMouseLeave();
      }
    }
  }

  @HostListener('click', ['$event']) onClick(e?) {
    if (e && (
      this.isFrozenState ||
      this.model === this.name ||
      this.state === STATE_DISABLED ||
      this.state === STATE_CLICKED ||
      this.state === STATE_LOADING
    )) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
      this.model = this.name;
      this.OnModelChange.next(this.model);
    }
    this.switchState(STATE_CLICKED);
  }
}
