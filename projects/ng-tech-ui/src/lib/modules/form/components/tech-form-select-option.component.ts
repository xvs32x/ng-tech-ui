import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import { STATE_CLICKED, STATE_DEFAULT, STATE_DISABLED, STATE_LOADING } from '../../../constants/tech-state';

@Component({
  selector: 'tech-form-select-option',
  template: `
    <ng-content></ng-content>`
})

export class TechFormSelectOptionComponent extends TechStateComponentClass implements OnInit, OnChanges {
  @Input() name: string;
  @Input() model: null | string | string[] = null;
  @Output() @Input() OnModelChange: EventEmitter<string | string[]> = new EventEmitter<string | string[]>();

  constructor(el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-select-option', 'default');
  }

  get isChecked(): boolean {
    if (Array.isArray(this.model)) {
      return !!this.model.find(item => item === this.name);
    } else {
      return this.model === this.name;
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    TechStateComponentClass.prototype.ngOnChanges.call(this, changes);
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
      if (Array.isArray(this.model)) {
        const find = !!this.model.find(item => item === this.name);
        if (find) {
          this.OnModelChange.next(this.model.filter(item => item !== this.name));
        } else {
          this.OnModelChange.next([...this.model, this.name]);
        }
      } else {
        this.OnModelChange.next(this.name);
      }
    }
    this.switchState(this.isChecked ? STATE_CLICKED : STATE_DEFAULT);
  }

}
