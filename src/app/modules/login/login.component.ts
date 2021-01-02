import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'cbm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  validationMessageStyles={
    'margin-bottom':'15px',
    'margin-left':'5px',
  }

  constructor(private formBuilder:FormBuilder,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login:['', Validators.required],
      senha:['', Validators.required]
    });
  }

  public logar() {
      this.authService.login(this.form.get('login').value, this.form.get('senha').value);
  }

}
