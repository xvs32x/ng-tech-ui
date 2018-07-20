import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';


@Component({
  selector: 'tech-card-header',
  template: `<ng-content></ng-content>`,
})
export class TechCardHeaderComponent extends TechStateComponentClass implements OnInit, AfterViewInit {

  constructor(public el: ElementRef) {
    super(el);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.el.nativeElement.classList.add('tech-ui-card-header');
  }

}
