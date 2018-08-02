import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { TechFormInputBackgroundDirective } from '../directives/tech-form-input-background';
import { STATE_DEFAULT, STATE_DISABLED, STATE_LOADING } from '../../../constants/tech-state';
import { TechFormInputTextDirective } from '../directives/tech-form-input-text.directive';
import { TechFormInputTextareaDirective } from '../directives/tech-form-input-textarea.directive';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';


@Component({
  selector: 'tech-input-text',
  template: `
    <input *ngIf="type === 'text' || type === 'password'" #child
           [placeholder]="placeholder" [type]="type" [state]="state" [isFrozenState]="isFrozenState" techFormInputText/>
    <textarea *ngIf="type === 'textarea'" #child
              [placeholder]="placeholder" [state]="state" [isFrozenState]="isFrozenState" techFormInputTextarea></textarea>
  `,
})

export class TechInputTextComponent extends TechStateComponentClass implements OnChanges, AfterViewInit {
  @Input() type = 'text';
  @Input() model: string;
  @Input() placeholder;
  @HostBinding('attr.techFormInputBackground') techFormInputBackground: TechFormInputBackgroundDirective;
  @ViewChild(TechFormInputTextDirective) childFormInputText: TechFormInputTextDirective;
  @ViewChild(TechFormInputTextareaDirective) childFormInputTextarea: TechFormInputTextareaDirective;

  get child() {
    switch (this.type) {
      case 'textarea':
        return this.childFormInputTextarea;
      default:
        return this.childFormInputText;
    }
  }

  constructor(public el: ElementRef) {
    super(el);
    this.techFormInputBackground = new TechFormInputBackgroundDirective(this.el);
  }

  ngOnChanges(changes: SimpleChanges) {
    TechStateComponentClass.prototype.ngOnChanges.call(this, changes);
    if (changes.state && !changes.state.firstChange) {
      this.changeChildState(changes.state.currentValue);
    }
  }

  ngAfterViewInit() {
    this.child.el.nativeElement.onblur = (e) => {
      if (
        this.isFrozenState ||
        this.state === STATE_DISABLED ||
        this.state === STATE_LOADING
      ) {
        return;
      }
      this.switchState(STATE_DEFAULT);
    };
  }

  @HostListener('click', ['$event']) onClick(e?) {
    TechStateComponentClass.prototype.onClick.call(this, e);
    this.child.onClick(e, true);
  }

  changeChildState(state: string) {
    this.child.switchState(state);
  }
}
