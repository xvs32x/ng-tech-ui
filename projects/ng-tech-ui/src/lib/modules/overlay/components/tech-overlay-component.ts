import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Component({
  selector: 'tech-overlay',
  template: `
    <ng-template #template>
      <ng-content></ng-content>
    </ng-template>
  `
})

export class TechOverlayComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  @Input() config: OverlayConfig = null;
  @Input() clickBackdropForClose = true;
  @ViewChild('template') template: TemplateRef<any>;
  private overlayRef: OverlayRef;

  get defaultPositionStrategy() {
    return this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
  }

  get defaultConfig() {
    return new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'backdrop-light',
      positionStrategy: this.defaultPositionStrategy
    });
  }

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  show() {
    this.overlayRef = this.overlay.create(
      this.config ?
        {...this.defaultConfig, ...this.config} : this.defaultConfig
    );
    const overlayPortal = new TemplatePortal(
      this.template,
      this.viewContainerRef
    );
    if (this.clickBackdropForClose) {
      const s1 = this.overlayRef.backdropClick().subscribe(_ => this.hide());
      this.subs.push(s1);
    }
    this.overlayRef.attach(overlayPortal);
    return this.overlayRef;
  }

  hide() {
    this.overlayRef.dispose();
  }

}
