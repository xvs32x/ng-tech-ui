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
import { STATE_CLICKED, STATE_DEFAULT, STATE_DISABLED, STATE_LOADING } from '../../../constants/tech-state';


@Component({
  selector: 'tech-form-checkbox-component',
  template: `
    <button techFormCheckboxLabel>
      <ng-content></ng-content>
    </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechFormCheckboxComponent extends TechStateComponentClass implements OnChanges {
  @Input() model: string[];
  @Input() name: string;
  @Output() OnModelChange: EventEmitter<string> = new EventEmitter<string>();

  get isChecked(): boolean {
    return !!this.model.find(item => item === this.name);
  }

  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-checkbox', 'default');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model) {
      if (changes.model.currentValue) {
        this.onClick();
      } else {
        this.onMouseLeave();
      }
    }
  }

  @HostListener('click', ['$event']) onClick(e?) {
    if (e && (
      this.isFrozenState ||
      this.state === STATE_DISABLED ||
      this.state === STATE_LOADING
    )) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
      if (this.isChecked) {
        this.model = this.model.filter(item => item !== this.name);
      } else {
        this.model = [...this.model, this.name];
      }
      this.OnModelChange.next(this.model);
    }
    this.switchState(this.isChecked ? STATE_CLICKED : STATE_DEFAULT);
  }
}
