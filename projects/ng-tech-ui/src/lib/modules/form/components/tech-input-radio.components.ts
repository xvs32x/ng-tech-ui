import {
  ChangeDetectionStrategy,
  Component,
  ElementRef, EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import { Observable, Subscription } from 'rxjs';
import { AnimationBuilder } from '@angular/animations';
import { TechVarsService } from '../../../services/tech-vars.service';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';
import { map } from 'rxjs/internal/operators';
import { STATE_CLICKED, STATE_DEFAULT, STATE_FOCUSED } from '../../../constants/tech-state';


@Component({
  selector: 'tech-input-radio-component',
  template: `
    <button techRadioLabel>
      <ng-content></ng-content>
    </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechInputRadioComponent extends TechStateComponentClass implements OnInit, OnDestroy, OnChanges {
  @Input() model: string;
  @Input() name: string;
  @Output() OnModelChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public animationBuilder: AnimationBuilder, public el: ElementRef, public varsService: TechVarsService) {
    super(animationBuilder, el, varsService);
    this.states$ = varsService.states.pipe(map(x => x.radio));
  }

  ngOnInit() {
    const s1 = this.states$.subscribe((styles: TechVarsElStyleI) => {
      this.setInitialStyles(styles);
    });
    this.subs.push(s1);
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model.currentValue === this.name) {
      this.onClick();
    } else {
      this.onMouseLeave();
    }
  }

  @HostListener('click', ['$event']) onClick(e?) {
    if (e && this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
      this.model = this.name;
      this.OnModelChange.next(this.model);
    }
    this.switchState(100, STATE_CLICKED);
  }
}
