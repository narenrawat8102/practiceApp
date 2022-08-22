import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/uxServices/message.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
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
