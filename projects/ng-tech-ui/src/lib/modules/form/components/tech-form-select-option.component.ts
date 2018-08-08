import { Component, ElementRef, OnInit } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Component({
  selector: 'tech-form-select-option',
  template: `<ng-content></ng-content>`
})

export class TechFormSelectOptionComponent extends TechStateComponentClass implements OnInit {
  constructor(el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-select-option', 'default');
  }

  ngOnInit() {
  }
}
