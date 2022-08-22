import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/uxServices/message.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
})
export class Comp3Component implements OnInit {
  userName: string = '';

  constructor(private _msgService: MessageService) {
    this._msgService.userName.subscribe((name) => (this.userName = name));
  }

  ngOnInit(): void {}

  updateUserName(name: any): void {
    // this.userName = name.value;
    this._msgService.userName.next(name.value);
  }
}
