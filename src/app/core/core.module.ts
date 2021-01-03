import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { AuthService } from '../core/authentication/auth.service'
import { MessageService } from '../core/services/message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers:[
    AuthService,
    MessageService
  ]
})
export class CoreModule { }
