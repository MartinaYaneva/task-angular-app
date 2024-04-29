import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { RedDirective } from './red.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    RedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
