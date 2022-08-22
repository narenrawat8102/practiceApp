import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  proSelected: boolean = false;
  productName: string = '';

  productAdded: any;

  constructor() {}

  ngOnInit(): void {}

  onSelectProduct(pro: string) {
    this.proSelected = true;
    this.productName = pro;
  }

  onAddedProductInCart(event: any) {
    this.productAdded = event;
  }
}
