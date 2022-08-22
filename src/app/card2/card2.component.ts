import { Component, OnInit } from '@angular/core';
import { MessageService } from '../uxServices/message.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css'],
})
export class Card2Component implements OnInit {
  constructor(private msgService: MessageService) {}

  ngOnInit(): void {}

  subscrptionAlert() {
    this.msgService.messageAlert();
  }
}
