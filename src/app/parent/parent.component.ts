import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  productAdded: any;
  productSelected: boolean = false;
  product: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSelectProduct(pro: string) {
    this.productSelected = true;
    this.product = pro;
  }

  onCardAdded() {
    this.productAdded = this.product;
  }
}
