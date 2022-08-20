import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css'],
})
export class SwitchCaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedProduct: any = '';

  getProductVal(val: any) {
    this.selectedProduct = val.target.value;
  }
}
