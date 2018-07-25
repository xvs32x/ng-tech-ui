import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import {
  STATE_CLICKED,
  STATE_DEFAULT, STATE_DISABLED, STATE_FOCUSED,
  STATE_INVALIDATED, STATE_LOADING,
  STATE_VALIDATED
} from '../../../projects/ng-tech-ui/src/lib/constants/tech-state';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-card-demo',
  template: `
    <div class="demo-title">
      <h3>Card</h3>
      <hr>
    </div>
    <div [fxLayout]="'row wrap'">
      <!-- Simple card -->
      <tech-card
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(33%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        style="margin: 1em;"
      >
        <tech-card-header>
          <h4>Card title...</h4>
        </tech-card-header>
        <tech-card-body>
          Card body...
        </tech-card-body>
        <tech-card-footer>
          Card footer...
        </tech-card-footer>
      </tech-card>
      <!-- Card with body and buttons -->
      <tech-card
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(33%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        style="margin: 1em;"
      >
        <tech-card-header>
          <h4>Card with link</h4>
        </tech-card-header>
        <tech-card-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </tech-card-body>
        <tech-card-footer>
          <button (click)="sayThanks()" techButton>I like this!</button>
        </tech-card-footer>
      </tech-card>
      <!--Card and form inside-->
      <tech-card
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(33%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        style="margin: 1em;"
      >
        <tech-card-header>
          <h4>Card for login form</h4>
        </tech-card-header>
        <tech-card-body>
          <!--Login-->
          <div [fxLayout]="'column'">
            <div [fxFlex]="'calc(100%-1em)'">
              <tech-input-text
                [placeholder]="'Enter email'"
              ></tech-input-text>
            </div>
          </div>
          <!--Password-->
          <div [fxLayout]="'column'">
            <div [fxFlex]="'calc(100%-1em)'" style="margin-top: 1em;">
              <tech-input-text
                type="password"
                [placeholder]="'Enter password'"
              ></tech-input-text>
            </div>
          </div>
        </tech-card-body>
        <tech-card-footer>
          <button class="fluid" techButtonPrimary>Sign in</button>
        </tech-card-footer>
      </tech-card>
      <!-- Card with states switch -->
      <tech-card
        [isFrozenState]="true"
        [state]="cardState" [isSpinnerCancelable]="true" [OnSpinnerCancel]="onLoadingCanceled"
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(33%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        style="margin: 1em;"
      >
        <tech-card-header>
          <h4>Card with states switch</h4>
        </tech-card-header>
        <tech-card-body>
          <!--States toggle-->
          <div [fxLayout]="'row wrap'">
            <div [fxFlex]="'calc(50%-1em)'">
              <ng-container *ngFor="let item of inputStates; let i = index">
                <tech-form-radio-component
                  *ngIf="inputStates.length / 2 >= i"
                  [model]="cardState" [name]="item.name" (OnModelChange)="onInputTextStateChange($event)">
                  {{item.label}}
                </tech-form-radio-component>
              </ng-container>
            </div>
            <div [fxFlex]="'calc(50%-1em)'">
              <ng-container *ngFor="let item of inputStates; trackBy: trackByFn; let i = index">
                <tech-form-radio-component
                  *ngIf="inputStates.length / 2 < i"
                  [model]="cardState" [name]="item.name" (OnModelChange)="onInputTextStateChange($event)">
                  {{item.label}}
                </tech-form-radio-component>
              </ng-container>
            </div>
          </div>
        </tech-card-body>
      </tech-card>
    </div>`
})
export class CardDemoComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  cardState = STATE_DEFAULT;
  inputStates = [
    {name: STATE_DEFAULT, label: 'Default'},
    {name: STATE_FOCUSED, label: 'Focused'},
    {name: STATE_VALIDATED, label: 'Validated'},
    {name: STATE_INVALIDATED, label: 'Invalidated'},
    {name: STATE_CLICKED, label: 'Clicked'},
    {name: STATE_DISABLED, label: 'Disabled'},
    {name: STATE_LOADING, label: 'Loading'},
  ];
  onLoadingCanceled: EventEmitter<any> = new EventEmitter();

  constructor() {
    const s = this.onLoadingCanceled.pipe(tap(x => console.log(x))).subscribe();
    this.subs.push(s);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  sayThanks() {
    alert('Thank you! :)');
  }

  onInputTextStateChange(state) {
    this.cardState = state;
  }

  trackByFn(index, item) {
    return index;
  }

}
