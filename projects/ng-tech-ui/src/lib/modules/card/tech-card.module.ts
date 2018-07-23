import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechCardHeaderComponent } from './components/tech-card-header.component';
import { TechCardBodyComponent } from './components/tech-card-body.component';
import { TechCardFooterComponent } from './components/tech-card-footer.component';
import { TechCardComponent } from './components/tech-card.components';
import { TechSpinnerModule } from '../spinner/tech-spinner.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    TechSpinnerModule
  ],
  exports: [
    TechCardComponent,
    TechCardHeaderComponent,
    TechCardBodyComponent,
    TechCardFooterComponent
  ],
  declarations: [
    TechCardComponent,
    TechCardHeaderComponent,
    TechCardBodyComponent,
    TechCardFooterComponent
  ],
  providers: [],
})
export class TechCardModule {
}
