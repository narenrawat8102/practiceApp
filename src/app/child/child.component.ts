import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() productSelected: boolean = false;
  @Input() product: string = '';

  @Output() productAdded: any = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCardAdded() {
    this.productAdded.emit(this.product);
  }
}
