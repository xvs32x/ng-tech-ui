import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography-demo',
  template: `
    <div class="demo-title">
      <h3>Typography</h3>
      <hr>
    </div>
    <div [fxLayout]="'row wrap'">
      <div
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(25%-2em)'"
        class="demo-box"
      >
        <h1>H1 title</h1>
        <h2>H2 title</h2>
        <h3>H3 title</h3>
        <h4>H4 title</h4>
      </div>
      <div
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(25%-2em)'"
        class="demo-box"
      >
        <h1 class="font-bold">H1 title</h1>
        <h2 class="font-bold">H2 title</h2>
        <h3 class="font-bold">H3 title</h3>
        <h4 class="font-bold">H4 title</h4>
      </div>
      <div
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(25%-2em)'"
        class="demo-box"
      >
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>
            List item 3
            <ul>
              <li>Child item 1</li>
              <li>
                Child item 2
                <ul>
                  <li>Child item 1</li>
                  <li>Child item 2</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>List item 4</li>
          <li>List item 5</li>
        </ul>
      </div>
      <div
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(25%-2em)'"
        class="demo-box"
      >
        <ol>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>
            List item 3
            <ul>
              <li>Child item 1</li>
              <li>
                Child item 2
                <ul>
                  <li>Child item 1</li>
                  <li>Child item 2</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>List item 4</li>
          <li>List item 5</li>
        </ol>
      </div>
    </div>
  `
})

export class TypographyDemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
