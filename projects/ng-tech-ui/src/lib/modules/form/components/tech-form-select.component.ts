import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TechStateComponentClass } from '../../../classes/tech-state-component.class';
import { TechOption } from '../../../interfaces/tech-option';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import { STATE_CLICKED, STATE_DEFAULT } from '../../../constants/tech-state';

@Component({
  selector: 'tech-form-select',
  template: `
    <div [state]="state" techFormSelectBackground (click)="show()">
      <input type="text" [placeholder]="placeholder" techFormInputText readonly>
    </div>
    <ng-template #template>
      <div techFormSelectOverlay [state]="overlayState">
        <tech-form-select-option *ngFor="let item of options">{{item.label ? item.label : item.name}}</tech-form-select-option>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TechFormSelectComponent extends TechStateComponentClass implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  @Input() model: null | string | string[] = null;
  @Input() options: TechOption[] = [];
  @Input() placeholder = '';
  @Input() overlayConfig: OverlayConfig = null;
  @ViewChild('template') template: TemplateRef<any>;
  private overlayRef: OverlayRef;
  overlayState = STATE_DEFAULT;

  get defaultPositionStrategy() {
    return this.overlay.position()
      .flexibleConnectedTo(this.el)
      .withPositions([{
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
      }])
      .withFlexibleDimensions(true);
  }

  get defaultConfig() {
    return new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'backdrop-transparent',
      positionStrategy: this.defaultPositionStrategy,
      minWidth: this.el.nativeElement.offsetWidth,
      maxWidth: this.el.nativeElement.offsetWidth,
      maxHeight: 256
    });
  }

  constructor(el: ElementRef, private overlay: Overlay, private viewContainerRef: ViewContainerRef) {
    super(el);
    this.el.nativeElement.classList.add('tech-ui-form-select', 'default');
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
    }, 10);
  }

  hide() {
    this.overlayRef.dispose();
    this.overlayState = STATE_DEFAULT;
  }
}
