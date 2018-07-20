import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TechInputTextDirective } from '../directives/tech-input-text.directive';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';


@Component({
  selector: 'tech-input-text',
  template: `
    <input *ngIf="type === 'text'" #child [placeholder]="placeholder" [type]="type" techInputText/>
    <textarea *ngIf="type === 'textarea'" #child [placeholder]="placeholder" techInputText></textarea>
  `
})

export class TechInputTextComponent  implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  subs: Subscription[] = [];
  @Input() type = 'text';
  @Input() model: string;
  @Input() state;
  @Input() placeholder;
  @ViewChild(TechInputTextDirective) child: TechInputTextDirective;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  ngAfterViewInit() {
    const s = this.child.states$.subscribe((styles: TechVarsElStyleI) => {
      this.child.setInitialStyles(styles);
    });
    this.subs.push(s);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.state && !changes.state.firstChange) {
      this.changeChildState(changes.state.currentValue);
    }
  }

  changeChildState(state: string) {
    this.child.switchState(300, state);
  }
}
