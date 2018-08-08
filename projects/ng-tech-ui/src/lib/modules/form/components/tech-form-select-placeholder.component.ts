import { Component, ElementRef, OnInit } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Component({
  selector: 'tech-form-select-placeholder',
  template: ``
})

export class TechFormSelectPlaceholderComponent extends TechStateComponentClass implements OnInit {
  constructor(el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-select-placeholder', 'default');
  }

  ngOnInit() {
  }
}
