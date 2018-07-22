import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';

@Directive({
  selector: '[techTextarea]'
})
export class TechTextareaDirective extends TechStateComponentClass implements OnInit, AfterViewInit {

  constructor(public el: ElementRef) {
    super(el);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.el.nativeElement.classList.add('tech-ui-form-input');
    this.el.nativeElement.onblur = () => {
      this.onBlur();
    };
  }

}
