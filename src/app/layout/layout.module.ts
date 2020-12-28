import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../layout/header/header.component';
import { TemplateComponent } from '../layout/template/template.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    TemplateComponent
  ],
  imports: [
    ButtonModule,
    CommonModule
  ],
  exports:[
    TemplateComponent
  ]
})
export class LayoutModule { }
