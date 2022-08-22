import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/uxServices/message.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  userName: string = '';

  constructor(private _msgService: MessageService) {
    this._msgService.userName.subscribe((name) => (this.userName = name));
  }

  ngOnInit(): void {}
}
