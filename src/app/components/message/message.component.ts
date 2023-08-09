import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  // props
  @Input() tipeMessage:string;
  @Input() message:string;
  // construct
  constructor(){
    this.tipeMessage = '';
    this.message = '';
  }
}
