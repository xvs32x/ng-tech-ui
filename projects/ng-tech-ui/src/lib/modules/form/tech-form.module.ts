import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TechInputTextComponent } from './components/tech-input-text.component';
import { TechInputSelectComponet } from './components/tech-input-select.componet';
import { TechFormRadioComponent } from './components/tech-form-radio.components';
import { TechFormRadioLabelDirective } from './directives/tech-form-radio-label.directive';
import { TechFormLabelDirective } from './directives/tech-form-label.directive';
import { TechFormInputBackgroundDirective } from './directives/tech-form-input-background';
import { TechFormInputTextDirective } from './directives/tech-form-input-text.directive';
import { TechFormInputTextareaDirective } from './directives/tech-form-input-textarea.directive';
import { TechFormCheckboxLabelDirective } from './directives/tech-form-checkbox-label.directive';
import { TechFormCheckboxComponent } from './components/tech-form-checkbox.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    TechFormRadioComponent,
    TechFormRadioLabelDirective,
    TechFormCheckboxLabelDirective,
    TechFormCheckboxComponent,
    TechInputTextComponent,
    TechFormLabelDirective,
    TechInputSelectComponet,
    TechFormInputBackgroundDirective,
    TechFormInputTextDirective,
    TechFormInputTextareaDirective
  ],
  declarations: [
    TechFormRadioComponent,
    TechFormRadioLabelDirective,
    TechFormCheckboxLabelDirective,
    TechFormCheckboxComponent,
    TechInputTextComponent,
    TechFormLabelDirective,
    TechInputSelectComponet,
    TechFormInputBackgroundDirective,
    TechFormInputTextDirective,
    TechFormInputTextareaDirective
  ],
  providers: [],
})
export class TechFormModule {
}
