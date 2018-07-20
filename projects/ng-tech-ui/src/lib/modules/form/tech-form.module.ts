import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TechInputRadioComponent } from './components/tech-input-radio.components';
import { TechRadioLabelDirective } from './directives/tech-radio-label.directive';
import { TechInputTextDirective } from './directives/tech-input-text.directive';
import { TechInputTextComponent } from './components/tech-input-text.component';
import { TechInputLabelDirective } from './directives/tech-input-label.directive';
import { TechTextareaDirective } from './directives/tech-textarea.directive';
import { TechInputSelectComponet } from './components/tech-input-select.componet';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    TechInputRadioComponent,
    TechRadioLabelDirective,
    TechInputTextDirective,
    TechInputTextComponent,
    TechInputLabelDirective,
    TechTextareaDirective,
    TechInputSelectComponet,
  ],
  declarations: [
    TechInputRadioComponent,
    TechRadioLabelDirective,
    TechInputTextDirective,
    TechInputTextComponent,
    TechInputLabelDirective,
    TechTextareaDirective,
    TechInputSelectComponet,
  ],
  providers: [],
})
export class TechFormModule {
}
