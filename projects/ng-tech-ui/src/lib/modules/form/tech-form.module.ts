import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TechInputTextComponent } from './components/tech-input-text.component';
import { TechFormRadioComponent } from './components/tech-form-radio.components';
import { TechFormRadioLabelDirective } from './directives/tech-form-radio-label.directive';
import { TechFormLabelDirective } from './directives/tech-form-label.directive';
import { TechFormInputBackgroundDirective } from './directives/tech-form-input-background';
import { TechFormInputTextDirective } from './directives/tech-form-input-text.directive';
import { TechFormInputTextareaDirective } from './directives/tech-form-input-textarea.directive';
import { TechFormCheckboxLabelDirective } from './directives/tech-form-checkbox-label.directive';
import { TechFormCheckboxComponent } from './components/tech-form-checkbox.component';
import { TechFormSelectComponent } from './components/tech-form-select.component';
import { TechFormSelectPlaceholderDirective } from './directives/tech-form-select-placeholder.directive';
import { TechFormSelectOptionComponent } from './components/tech-form-select-option.component';
import { TechFormSelectPlaceholderComponent } from './components/tech-form-select-placeholder.component';
import { TechFormSelectBackgroundDirective } from './directives/tech-form-select-background';
import { TechFormSelectOverlayDirective } from './directives/tech-form-select-overlay.directive';

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
    TechFormInputBackgroundDirective,
    TechFormSelectComponent,
    TechFormSelectPlaceholderComponent
  ],
  declarations: [
    TechFormRadioComponent,
    TechFormRadioLabelDirective,
    TechFormCheckboxLabelDirective,
    TechFormCheckboxComponent,
    TechInputTextComponent,
    TechFormLabelDirective,
    TechFormInputBackgroundDirective,
    TechFormInputTextDirective,
    TechFormInputTextareaDirective,
    TechFormSelectComponent,
    TechFormSelectPlaceholderDirective,
    TechFormSelectOptionComponent,
    TechFormSelectPlaceholderComponent,
    TechFormSelectBackgroundDirective,
    TechFormSelectOverlayDirective
  ],
  providers: [],
})
export class TechFormModule {
}
