import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardDemoComponent } from './components/card-demo';
import { FormDemoComponent } from './components/form-demo';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TechCardModule } from '../../projects/ng-tech-ui/src/lib/modules/card/tech-card.module';
import { TechButtonModule } from '../../projects/ng-tech-ui/src/lib/modules/button/tech-button.module';
import { TechFormModule } from '../../projects/ng-tech-ui/src/lib/modules/form/tech-form.module';
import { TechSpinnerModule } from '../../projects/ng-tech-ui/src/lib/modules/spinner/tech-spinner.module';
import { TypographyDemoComponent } from './components/typography-demo';
import { ButtonDemoComponent } from './components/button-demo';

@NgModule({
  declarations: [
    AppComponent,
    CardDemoComponent,
    FormDemoComponent,
    TypographyDemoComponent,
    ButtonDemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FlexLayoutModule,
    TechCardModule,
    TechButtonModule,
    TechFormModule,
    TechSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
