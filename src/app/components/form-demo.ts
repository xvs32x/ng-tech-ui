import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription, pipe } from 'rxjs';
import {
  STATE_CLICKED,
  STATE_DEFAULT, STATE_DISABLED,
  STATE_INVALIDATED,
  STATE_VALIDATED
} from '../../../projects/ng-tech-ui/src/lib/constants/tech-state';

@Component({
  selector: 'app-form-demo',
  template: `
    <div [fxLayout]="'column'">
      <tech-card style="margin: 1em;">
        <tech-card-header>
          <h4>Form module</h4>
        </tech-card-header>
        <tech-card-body>
          <!--States toggle-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div [fxFlex]="'calc(33%-1em)'"
                 style="text-align: right;" [ngStyle.xs]="{'text-align': 'left'}">
              <label techFormLabel>Switch with label:</label>
            </div>
            <div [fxFlex]="'calc(66%-1em)'" [ngStyle.gt-xs]="{margin: '0 .5em', padding: '.4em'}">
              <tech-form-radio-component *ngFor="let item of inputStates"
                                        [model]="inputTextState" [name]="item.name" (OnModelChange)="onInputTextStateChange($event)">
                {{item.label}}
              </tech-form-radio-component>
            </div>
          </div>
          <!--Text input directive-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div [fxFlex]="'calc(33%-1em)'"
                 style="text-align: right;" [ngStyle.xs]="{'text-align': 'left'}">
              <label techFormLabel>Input text directive:</label>
            </div>
            <div [fxFlex]="'calc(66%-1em)'" [ngStyle.gt-xs]="{margin: '0 .5em', padding: '.5em'}">
              <input placeholder="Styled input directive without html template..." type="text" techInputText>
            </div>
          </div>
          <!--Text input component-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div [fxFlex]="'calc(33%-1em)'"
                 style="text-align: right;" [ngStyle.xs]="{'text-align': 'left'}">
              <label techFormLabel>Input text component:</label>
            </div>
            <div [fxFlex]="'calc(66%-1em)'" [ngStyle.gt-xs]="{margin: '0 .5em', padding: '.5em'}">
              <tech-input-text
                [state]="inputTextState"
                [placeholder]="'Input component with validation states and errors template'"
              ></tech-input-text>
            </div>
          </div>
          <!--Text input component as textarea-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div [fxFlex]="'calc(33%-1em)'"
                 style="text-align: right;" [ngStyle.xs]="{'text-align': 'left'}">
              <label techFormLabel>Input text component:</label>
            </div>
            <div [fxFlex]="'calc(66%-1em)'" [ngStyle.gt-xs]="{margin: '0 .5em', padding: '.5em'}">
              <tech-input-text
                [type]="'textarea'"
                [state]="inputTextState"
                [placeholder]="'Input component with validation states and errors template'"
              ></tech-input-text>
            </div>
          </div>
        </tech-card-body>
        <tech-card-footer>
          <!--Submit form-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div [fxFlex]="'calc(33%-1em)'"></div>
            <div [fxFlex]="'calc(66%-1em)'" style="" [ngStyle.gt-xs]="{margin: '0 .5em', padding: '0 .5em'}">
              <button techButtonPrimary>Submit</button>
              <button techButton style="margin-left: .5em;">Clear</button>
            </div>
          </div>
        </tech-card-footer>
      </tech-card>
    </div>
  `
})
export class FormDemoComponent implements OnInit, OnDestroy {
  inputTextState = STATE_DEFAULT;
  inputStates = [
    {name: STATE_DEFAULT, label: 'Default'},
    {name: STATE_CLICKED, label: 'Clicked'},
    {name: STATE_VALIDATED, label: 'Validated'},
    {name: STATE_INVALIDATED, label: 'Invalidated'},
    {name: STATE_DISABLED, label: 'Disabled'},
  ];
  isMobile = false;
  private subs: Subscription[] = [];

  constructor(media: ObservableMedia) {
    const s1 = media.subscribe((change: MediaChange) => this.isMobile = change.mqAlias === 'xs');
    this.subs.push(s1);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  onInputTextStateChange(state) {
    this.inputTextState = state;
  }
}
