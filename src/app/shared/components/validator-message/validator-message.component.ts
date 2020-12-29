import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cbm-validator-message',
  templateUrl: './validator-message.component.html',
  styleUrls: ['./validator-message.component.css']
})
export class ValidatorMessageComponent implements OnInit {

  @Input()
  message:string;

  @Input()
  styles;

  constructor() { }

  ngOnInit(): void {
  }

}
