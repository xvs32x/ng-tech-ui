import { NgModule } from '@angular/core';
import { TechOverlayService } from './services/tech-overlay.service';
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
    TechOverlayService
  ],
})
export class TechOverlayModule {
}
