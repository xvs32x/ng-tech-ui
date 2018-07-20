import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import { AnimationBuilder } from '@angular/animations';
import { TechVarsService } from '../../../services/tech-vars.service';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';
import { map } from 'rxjs/internal/operators';


@Component({
  selector: 'tech-card-header',
  template: `<ng-content></ng-content>`,
})
export class TechCardHeaderComponent extends TechStateComponentClass implements OnInit, OnDestroy, AfterViewInit {

  constructor(public animationBuilder: AnimationBuilder, public el: ElementRef, public varsService: TechVarsService) {
    super(animationBuilder, el, varsService);
    this.states$ = varsService.states.pipe(map(x => x.cardHeader));
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
