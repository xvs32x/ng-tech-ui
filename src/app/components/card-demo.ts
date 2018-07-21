import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-demo',
  template: `
    <div [fxLayout]="'row wrap'">
      <tech-card
        *ngFor="let card of cards; let i = index"
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(33%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        style="margin: 1em;"
      >
        <tech-card-header>
          <h4>{{card.header}} #{{i + 1}}</h4>
        </tech-card-header>
        <tech-card-body>
          {{card.text}}
        </tech-card-body>
        <tech-card-footer>
          <button techButtonPrimary>Primary action</button>
          <button techButton style="margin-left: .5em;">Cancel</button>
        </tech-card-footer>
      </tech-card>
    </div>`
})
export class CardDemoComponent implements OnInit {
  card = {
    header: 'Card module',
    text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    `,
  };
  cards = [this.card, this.card, this.card, this.card, this.card, this.card];

  constructor() {
  }

  ngOnInit() {
  }
}
