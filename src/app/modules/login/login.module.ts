import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
      ButtonModule,
      InputTextModule,
      PasswordModule,
      ReactiveFormsModule,
      SharedModule
  ],
  exports:[
      LoginComponent
  ]
})
export class LoginModule { }
