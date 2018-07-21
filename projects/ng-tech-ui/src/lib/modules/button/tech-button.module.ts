import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TechButtonPrimaryDirective } from './directives/tech-button-primary.directive';
import { TechButtonDirective } from './directives/tech-button.directive';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    TechButtonDirective,
    TechButtonPrimaryDirective
  ],
  declarations: [
    TechButtonDirective,
    TechButtonPrimaryDirective
  ],
  providers: [],
})
export class TechButtonModule {
}
