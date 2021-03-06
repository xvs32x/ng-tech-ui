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
      <!-- Card with body and buttons -->
      <tech-card
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        class="demo-box"
      >
        <tech-card-header>
          <h4>Default card with link</h4>
        </tech-card-header>
        <tech-card-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </tech-card-body>
        <tech-card-footer>
          <button (click)="overlay.show()" techButton>I like this!</button>
          <tech-overlay #overlay>
            <tech-card>
              <tech-card-body>
                <h4>Thank you! :)</h4>
              </tech-card-body>
              <tech-card-footer class="center">
                <button (click)="overlay.hide()" techButton>Close</button>
              </tech-card-footer>
            </tech-card>
          </tech-overlay>
        </tech-card-footer>
      </tech-card>
      <!--Card and form inside-->
      <tech-card
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        class="demo-box"
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
          <div [fxLayout]="'row'" fxLayoutGap="1em">
            <button class="fluid" techButtonPrimary>Sign in</button>
            <button class="fluid" techButton>Sign up</button>
          </div>
        </tech-card-footer>
      </tech-card>
      <!-- Card with validated state-->
      <tech-card
        state="validated" [isFrozenState]="true"
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        class="demo-box"
      >
        <tech-card-header>
          <h4>Card with validated state</h4>
        </tech-card-header>
        <tech-card-body>
          <!--Login-->
          <div [fxLayout]="'column'">
            <div [fxFlex]="'calc(100%-1em)'">
              <tech-input-text
                state="validated"
                [isFrozenState]="true"
                [placeholder]="'Enter email'"
              ></tech-input-text>
            </div>
          </div>
          <!--Password-->
          <div [fxLayout]="'column'">
            <div [fxFlex]="'calc(100%-1em)'" style="margin-top: 1em;">
              <tech-input-text
                state="validated"
                [isFrozenState]="true"
                type="password"
                [placeholder]="'Enter password'"
              ></tech-input-text>
            </div>
          </div>
        </tech-card-body>
        <tech-card-footer>
          <div [fxLayout]="'row'" fxLayoutGap="1em">
            <button class="fluid" state="validated" [isFrozenState]="true" techButtonPrimary>Sign in</button>
            <button class="fluid" state="validated" [isFrozenState]="true" techButton>Sign up</button>
          </div>
        </tech-card-footer>
      </tech-card>
      <!-- Card with invalidated state-->
      <tech-card
        state="invalidated" [isFrozenState]="true"
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        class="demo-box"
      >
        <tech-card-header>
          <h4>Card with invalidated state</h4>
        </tech-card-header>
        <tech-card-body>
          <!--Login-->
          <div [fxLayout]="'column'">
            <div [fxFlex]="'calc(100%-1em)'">
              <tech-input-text
                state="invalidated"
                [isFrozenState]="true"
                [placeholder]="'Enter email'"
              ></tech-input-text>
            </div>
          </div>
          <!--Password-->
          <div [fxLayout]="'column'">
            <div [fxFlex]="'calc(100%-1em)'" style="margin-top: 1em;">
              <tech-input-text
                state="invalidated"
                [isFrozenState]="true"
                type="password"
                [placeholder]="'Enter password'"
              ></tech-input-text>
            </div>
          </div>
        </tech-card-body>
        <tech-card-footer>
          <div [fxLayout]="'row'" fxLayoutGap="1em">
            <button class="fluid" state="invalidated" [isFrozenState]="true" techButtonPrimary>Sign in</button>
            <button class="fluid" state="invalidated" [isFrozenState]="true" techButton>Sign up</button>
          </div>
        </tech-card-footer>
      </tech-card>
    </div>`
})
export class CardDemoComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
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

  trackByFn(index, item) {
    return index;
  }

}
