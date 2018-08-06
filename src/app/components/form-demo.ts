import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  STATE_CLICKED,
  STATE_DEFAULT, STATE_DISABLED,
  STATE_INVALIDATED, STATE_LOADING,
  STATE_VALIDATED
} from '../../../projects/ng-tech-ui/src/lib/constants/tech-state';

@Component({
  selector: 'app-form-demo',
  template: `
    <div class="demo-title">
      <h3>Form</h3>
      <hr>
    </div>
    <!--States toggle-->
    <div fxLayout="row wrap" fxLayout.xs="column">
      <tech-card class="demo-box" fxFlex="calc(25%-2rem)">
        <tech-card-header>
          <h4>Switch state in the next form</h4>
        </tech-card-header>
        <tech-card-body fxLayout="column" fxLayoutGap="1rem">
          <tech-form-radio-component
            *ngFor="let item of inputStates"
            [model]="inputTextState" [name]="item.name" (OnModelChange)="onInputTextStateChange($event)">
            {{item.label}}
          </tech-form-radio-component>
        </tech-card-body>
      </tech-card>
      <tech-card class="demo-box" fxFlex="calc(75%-2rem)">
        <tech-card-header>
          <h4>Example form</h4>
        </tech-card-header>
        <tech-card-body>
          <div fxLayout="column" fxLayoutGap.gt-xs="1rem">
            <!--Email-->
            <div fxLayout="row wrap" fxLayout.xs="column" fxLayoutGap.gt-xs="1rem">
              <div fxFlex="calc(25%-1rem)" [ngStyle.gt-xs]="{'text-align': 'right'}">
                <label techFormLabel>Email:</label>
              </div>
              <div fxFlex="calc(75%-1rem)">
                <tech-input-text
                  [state]="inputTextState"
                  [placeholder]="'Enter email'"
                ></tech-input-text>
              </div>
            </div>
            <!--Password-->
            <div fxLayout="row wrap" fxLayout.xs="column" fxLayoutGap.gt-xs="1rem">
              <div fxFlex="calc(25%-1rem)" [ngStyle.gt-xs]="{'text-align': 'right'}">
                <label techFormLabel>Password:</label>
              </div>
              <div fxFlex="calc(75%-1rem)">
                <tech-input-text
                  type="password"
                  [state]="inputTextState"
                  [placeholder]="'Enter password'"
                ></tech-input-text>
              </div>
            </div>
            <!--Resume-->
            <div fxLayout="row wrap" fxLayout.xs="column" fxLayoutGap.gt-xs="1rem">
              <div fxFlex="calc(25%-1rem)" [ngStyle.gt-xs]="{'text-align': 'right'}">
                <label techFormLabel>Resume:</label>
              </div>
              <div fxFlex="calc(75%-1rem)">
                <tech-input-text
                  [type]="'textarea'"
                  [state]="inputTextState"
                  [placeholder]="'Enter some description about you'"
                ></tech-input-text>
              </div>
            </div>
            <!--Plans-->
            <div fxLayout="row wrap" fxLayout.xs="column" fxLayoutGap.gt-xs="1rem">
              <div fxFlex="calc(25%-1rem)" [ngStyle.gt-xs]="{'text-align': 'right'}">
                <label techFormLabel>Your plan:</label>
              </div>
              <div fxLayout="column" fxLayoutGap="1em" fxFlex="calc(75%-1rem)" [state]="inputTextState" techFormInputBackground>
                <tech-form-radio-component
                  *ngFor="let item of formPlans"
                  [model]="formPlan" [name]="item.name" (OnModelChange)="onFormPlanChange($event)">
                  {{item.label}}
                </tech-form-radio-component>
              </div>
            </div>
            <!--Options-->
            <!--Plans-->
            <div fxLayout="row wrap" fxLayout.xs="column" fxLayoutGap.gt-xs="1rem">
              <div fxFlex="calc(25%-1rem)" [ngStyle.gt-xs]="{'text-align': 'right'}">
                <label techFormLabel>Your options:</label>
              </div>
              <div fxLayout="column" fxLayoutGap="1em" fxFlex="calc(75%-1rem)" [state]="inputTextState" techFormInputBackground>
                <tech-form-checkbox-component
                  *ngFor="let item of formOptions"
                  [model]="formSelectedOptions" [name]="item.name" (OnModelChange)="onFormOptionsChange($event)">
                  {{item.label}}
                </tech-form-checkbox-component>
              </div>
            </div>
          </div>
        </tech-card-body>
      </tech-card>
    </div>
  `
})
export class FormDemoComponent implements OnInit {
  inputTextState = STATE_DEFAULT;
  inputStates = [
    {name: STATE_DEFAULT, label: 'Default'},
    {name: STATE_CLICKED, label: 'Clicked'},
    {name: STATE_VALIDATED, label: 'Validated'},
    {name: STATE_INVALIDATED, label: 'Invalidated'},
    {name: STATE_DISABLED, label: 'Disabled'},
    {name: STATE_LOADING, label: 'Loading'},
  ];
  formPlan = 'medium';
  formPlans = [
    {name: 'minimal', label: 'Minimal'},
    {name: 'medium', label: 'Medium'},
    {name: 'optima', label: 'Optima'}
  ];
  formSelectedOptions = ['option-1', 'option-2', 'option-3'];
  formOptions = [
    {name: 'option-1', label: 'Option 1'},
    {name: 'option-2', label: 'Option 2'},
    {name: 'option-3', label: 'Option 3'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onInputTextStateChange(state) {
    this.inputTextState = state;
  }

  onFormPlanChange(plan) {
    this.formPlan = plan;
  }

  onFormOptionsChange(options: string[]) {
    this.formSelectedOptions = options;
  }
}
