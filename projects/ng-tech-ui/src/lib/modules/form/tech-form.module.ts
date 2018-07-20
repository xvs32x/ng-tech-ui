import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TechInputTextDirective } from './directives/tech-input-text.directive';
import { TechInputTextComponent } from './components/tech-input-text.component';
import { TechTextareaDirective } from './directives/tech-textarea.directive';
import { TechInputSelectComponet } from './components/tech-input-select.componet';
import { TechFormRadioComponent } from './components/tech-form-radio.components';
import { TechFormRadioLabelDirective } from './directives/tech-form-radio-label.directive';
import { TechFormLabelDirective } from './directives/tech-form-label.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    TechFormRadioComponent,
    TechFormRadioLabelDirective,
    TechInputTextDirective,
    TechInputTextComponent,
    TechFormLabelDirective,
    TechTextareaDirective,
    TechInputSelectComponet,
  ],
  declarations: [
    TechFormRadioComponent,
    TechFormRadioLabelDirective,
    TechInputTextDirective,
    TechInputTextComponent,
    TechFormLabelDirective,
    TechTextareaDirective,
    TechInputSelectComponet,
  ],
  providers: [],
})
export class TechFormModule {
}
