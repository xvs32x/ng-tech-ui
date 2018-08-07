import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'tech-overlay',
  template: `
    <ng-template #template>
      <ng-content></ng-content>
    </ng-template>
  `
})

export class TechOverlayComponent implements OnInit {
  @Input() config: OverlayConfig = null;
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
      backdropClass: 'dark',
      positionStrategy: this.defaultPositionStrategy
    });
  }

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
  }

  show() {
    this.overlayRef = this.overlay.create(this.config ? this.config : this.defaultConfig);
    const overlayPortal = new TemplatePortal(
      this.template,
      this.viewContainerRef
    );
    this.overlayRef.attach(overlayPortal);
  }

  hide() {
    this.overlayRef.dispose();
  }

}
