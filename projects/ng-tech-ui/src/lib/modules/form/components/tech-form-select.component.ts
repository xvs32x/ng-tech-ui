import {
  ChangeDetectionStrategy,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnDestroy,
  OnInit, Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import { TechOption } from '../../../interfaces/tech-option';
import { Overlay, OverlayConfig, OverlayRef, RepositionScrollStrategy } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import { STATE_CLICKED, STATE_DEFAULT } from '../../../constants/tech-state';
import { filter, tap } from 'rxjs/internal/operators';

@Component({
  selector: 'tech-form-select',
  template: `
    <div [state]="state" techFormSelectBackground (click)="show()">
      <input *ngIf="!model || !modelIsArray" type="text" [placeholder]="model ? modelLabel : placeholder" techFormInputText readonly>
    </div>
    <ng-template #template>
      <div techFormSelectOverlay [state]="overlayState">
        <tech-form-select-option *ngIf="any" (OnClick)="model = null; hide()">
          {{anyText ? anyText : placeholder}}
        </tech-form-select-option>
        <tech-form-select-option
          [name]="item.name"
          [model]="model" [OnModelChange]="OnModelChange"
          *ngFor="let item of options">
          {{item.label ? item.label : item.name}}
        </tech-form-select-option>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TechFormSelectComponent extends TechStateComponentClass implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  @Input() model: null | string | string[] = null;
  @Output() OnModelChange: EventEmitter<string | string[]> = new EventEmitter<string | string[]>();
  @Input() options: TechOption[] = [];
  @Input() placeholder = '';
  @Input() overlayConfig: OverlayConfig = null;
  @Input() any = true;
  @Input() anyText: null | string = null;
  @ViewChild('template') template: TemplateRef<any>;
  private overlayRef: OverlayRef;
  overlayState = STATE_DEFAULT;

  get modelLabel() {
    const find = this.options.find(item => item.name === this.model);
    return find ? find.label : this.model;
  }

  get modelIsArray() {
    return Array.isArray(this.model);
  }

  get isCloseOnSelect() {
    return !this.modelIsArray;
  }

  get defaultScrollStrategy() {
    return this.overlay.scrollStrategies.reposition();
  }

  get defaultPositionStrategy() {
    return this.overlay.position()
      .flexibleConnectedTo(this.el)
      .withPush(true)
      .withPositions([
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
        },
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom',
        }
      ])
      .withFlexibleDimensions(true);
  }

  get defaultConfig() {
    return new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'backdrop-transparent',
      positionStrategy: this.defaultPositionStrategy,
      minWidth: this.el.nativeElement.offsetWidth,
      maxWidth: this.el.nativeElement.offsetWidth,
      scrollStrategy: this.defaultScrollStrategy
    });
  }

  constructor(el: ElementRef, private overlay: Overlay, private viewContainerRef: ViewContainerRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-select', 'default');
    const s1 = this.OnModelChange.pipe(
      filter(_ => this.isCloseOnSelect),
      tap(_ => this.hide())
    ).subscribe();
    this.subs.push(s1);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  show() {
    this.overlayRef = this.overlay.create(
      this.overlayConfig ?
        {...this.defaultConfig, ...this.overlayConfig} : this.defaultConfig
    );
    const overlayPortal = new TemplatePortal(
      this.template,
      this.viewContainerRef
    );
    const s1 = this.overlayRef.backdropClick().subscribe(_ => this.hide());
    this.subs.push(s1);
    this.overlayRef.attach(overlayPortal);
    setTimeout(() => {
      this.overlayState = STATE_CLICKED;
    });
  }

  hide() {
    this.overlayRef.dispose();
    this.overlayState = STATE_DEFAULT;
  }
}
