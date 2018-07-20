import { TechVarsElStyleI } from '../interfaces/tech-vars';
import { STATE_CLICKED, STATE_DEFAULT, STATE_DISABLED, STATE_FOCUSED } from '../constants/tech-state';
import { Observable, Subscription } from 'rxjs';
import { animate, AnimationBuilder, style } from '@angular/animations';
import { TechVarsService } from '../services/tech-vars.service';
import { ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { AnimationMetadata } from '@angular/animations/src/animation_metadata';

export class TechStateComponentClass {
  subs: Subscription[] = [];
  states$: Observable<TechVarsElStyleI>;
  state: string;
  @Output() OnMouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnMouseLeave: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnBlur: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(public animationBuilder: AnimationBuilder, public el: ElementRef, public varsService: TechVarsService) {}

  @HostListener('mouseover', ['$event']) onMouseOver(e?) {
    if (e && this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnMouseOver.next(e);
    }
    this.switchState(300, STATE_FOCUSED);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e?) {
    if (e && this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnMouseLeave.next(e);
    }
    this.switchState(300, STATE_DEFAULT);
  }

  @HostListener('click', ['$event']) onClick(e?) {
    if (this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
    }
    this.switchState(100, STATE_CLICKED);
  }

  @HostListener('onblur', ['$event']) onBlur(e?) {
    if (e) {
      this.OnBlur.next(e);
    }
    this.switchState(300, STATE_DEFAULT);
  }

  setInitialStyles(styles: TechVarsElStyleI) {
    this.state = STATE_DEFAULT;
    Object.keys(styles.default).forEach(k => {
      this.el.nativeElement.style[k] = styles.default[k];
    });
  }

  switchState(timings: number, state: string) {
    this.el.nativeElement.disabled = state === STATE_DISABLED;
    this.state = state;
    if (state === STATE_CLICKED) {
      this.el.nativeElement.focus();
    }
    const s = this.states$.subscribe((styles: TechVarsElStyleI) => {
      this.runAnimation([
        animate(timings, style({
          ...styles[STATE_DEFAULT],
          ...styles[state]
        }))
      ]);
    });
    this.subs.push(s);
  }

  runAnimation(animations: AnimationMetadata | AnimationMetadata[]) {
    const animation = this.animationBuilder.build(animations);
    const player = animation.create(this.el.nativeElement);
    player.play();
  }

}
