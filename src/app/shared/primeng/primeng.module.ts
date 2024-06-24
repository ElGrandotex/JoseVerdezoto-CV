import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [],
  imports: [
    RippleModule,
    ButtonModule
  ],
  exports: [
    RippleModule,
    ButtonModule
  ]
})
export class PrimengModule { }
