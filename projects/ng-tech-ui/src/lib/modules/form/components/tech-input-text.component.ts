import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { TechInputTextDirective } from '../directives/tech-input-text.directive';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';


@Component({
  selector: 'tech-input-text',
  template: `
    <input *ngIf="type === 'text' || type === 'password'" #child [placeholder]="placeholder" [type]="type" techInputText/>
    <textarea *ngIf="type === 'textarea'" #child [placeholder]="placeholder" techInputText></textarea>
  `
})

export class TechInputTextComponent extends TechStateComponentClass implements OnChanges {
  @Input() type = 'text';
  @Input() model: string;
  @Input() placeholder;
  @ViewChild(TechInputTextDirective) child: TechInputTextDirective;

  constructor(public el: ElementRef) {
    super(el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.state && !changes.state.firstChange) {
      this.changeChildState(changes.state.currentValue);
    }
  }

  changeChildState(state: string) {
    this.child.switchState(state);
  }
}
