import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessageService {

  constructor(private toastr: ToastrService) { }

  public successMessage(message:string) {
     this.toastr.success(message);
  }

  public warningMesage(message:string) {
    this.toastr.error(message, 'Aviso!');
  }

  public errorMesage(message:string) {
    this.toastr.error(message, 'Aviso!');
  }

}
