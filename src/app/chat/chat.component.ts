import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  [x: string]: any;
  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  constructor() {

  }
  ngOnInit(): void {

  }
  submitMessage(event: any) {
    // alert(event.target.value);
    // event.preventDefault();
    // event.stopImmediatePropogation();
    let value = event.target.value;
    event.target.value = '';
    if (value.length > 1) {
      this.conversation.messages.push({
        id: 1,
        body: value,
        time: '8:21AM',
        me: true
      });
    }
  }
}
