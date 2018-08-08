import { NgModule } from '@angular/core';
import { TechOverlayComponent } from './components/tech-overlay-component';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  imports: [
    OverlayModule
  ],
  exports: [
    TechOverlayComponent
  ],
  declarations: [
    TechOverlayComponent
  ],
  providers: [
  ],
})
export class TechOverlayModule {
}
