import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  template: `
    <div class="demo-title">
      <h3>Button</h3>
      <hr>
    </div>
    <div [fxLayout]="'row wrap'">
      <div class="demo-box"><button techButton>Default</button></div>
      <div class="demo-box">
        <button techButton state="focused" [isFrozenState]="true">Default Focused</button>
      </div>
      <div class="demo-box">
        <button techButton state="clicked" [isFrozenState]="true">Default Clicked</button>
      </div>
      <div class="demo-box"><button state="validated" [isFrozenState]="true" techButton>Default Validated</button></div>
      <div class="demo-box"><button state="invalidated" [isFrozenState]="true" techButton>Default Invalidated</button></div>
      <div class="demo-box"><button techButton state="disabled">Default disabled</button></div>
      <div class="demo-box"><button techButton state="loading">Default loading</button></div>
      <div class="demo-box"><button class="font-bold" techButton>Default Bold</button></div>
      <div class="demo-box" [fxFlex.xs]="'100%'" [fxFlex.sm]="'calc(50%-2em)'">
        <button class="fluid font-bold" techButton>Default Bold Fluid</button>
      </div>
    </div>
    <div [fxLayout]="'row wrap'">
      <div class="demo-box"><button techButtonPrimary>Primary</button></div>
      <div class="demo-box">
        <button techButtonPrimary state="focused" [isFrozenState]="true">Primary Focused</button>
      </div>
      <div class="demo-box">
        <button techButtonPrimary state="clicked" [isFrozenState]="true">Primary Clicked</button>
      </div>
      <div class="demo-box"><button state="validated" [isFrozenState]="true" techButtonPrimary>Primary Validated</button></div>
      <div class="demo-box"><button state="invalidated" [isFrozenState]="true" techButtonPrimary>Primary Invalidated</button></div>
      <div class="demo-box"><button techButtonPrimary state="disabled">Primary disabled</button></div>
      <div class="demo-box"><button techButtonPrimary state="loading">Primary loading</button></div>
      <div class="demo-box"><button class="font-bold" techButtonPrimary>Primary Bold</button></div>
      <div class="demo-box" [fxFlex.xs]="'100%'" [fxFlex.sm]="'calc(50%-2em)'">
        <button class="fluid font-bold" techButtonPrimary>Primary Bold Fluid</button>
      </div>
    </div>
  `
})

export class ButtonDemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
