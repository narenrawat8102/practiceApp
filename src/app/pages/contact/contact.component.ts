import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/uxServices/message.service';

interface Items {
  name: string;
  id: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  allUsers: any = [];

  constructor(private _msgService: MessageService) {}

  ngOnInit() {
    this._msgService.products().subscribe((res) => (this.allUsers = res));
  }
}
