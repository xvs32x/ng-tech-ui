import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[techSpinner]'
})
export class TechSpinnerDirective {
  constructor(public el: ElementRef) {
    const tree = document.createElement('div');
    tree.className = 'tech-ui-spinner';
    tree.style.color = '#2563c8';
    tree.style.position = 'absolute';
    tree.style.top = '50%';
    tree.style.left = '50%';
    tree.style.transform = 'translate(-50%, -50%)';
    tree.innerHTML = `
      <div class="animation-container">
          <div></div>
          <div></div>
          <div></div>
      </div>
    `;
    this.el.nativeElement.appendChild(tree);
  }
}
