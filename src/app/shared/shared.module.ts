import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorMessageComponent } from './components/validator-message/validator-message.component';

@NgModule({
  declarations: [ValidatorMessageComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    ValidatorMessageComponent
  ]
})
export class SharedModule { }
