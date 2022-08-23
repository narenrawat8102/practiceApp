import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent implements OnInit {
  userName: string = 'Narender Rawat';
  constructor() {}

  ngOnInit(): void {}

  clickMe() {
    alert(this.userName);
  }
}
