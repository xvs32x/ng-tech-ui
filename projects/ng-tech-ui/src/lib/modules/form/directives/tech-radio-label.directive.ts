import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit} from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';
import { map } from 'rxjs/internal/operators';
import { TechVarsService } from '../../../services/tech-vars.service';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Directive({
  selector: '[techRadioLabel]'
})
export class TechRadioLabelDirective extends TechStateComponentClass implements OnInit, OnDestroy, AfterViewInit {

  constructor(public animationBuilder: AnimationBuilder, public el: ElementRef, public varsService: TechVarsService) {
    super(animationBuilder, el, varsService);
    this.states$ = varsService.states.pipe(map(x => x.radioLabel));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  ngAfterViewInit() {
    const s1 = this.states$.subscribe((styles: TechVarsElStyleI) => {
      this.setInitialStyles(styles);
    });
    this.subs.push(s1);
  }

}
