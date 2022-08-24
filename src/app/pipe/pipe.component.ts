import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  value: string = 'This is test value';
  date = new Date();

  nameSearch: string = '';

  namesArr = [
    'Yash',
    'Virat Rawat',
    'Aditya Rawat',
    'Narender Rawat',
    'Aadi',
    'Jitender Rawat',
    'Dhirender Rawat',
    'Surender Panchal',
    'Dharmender Kumar',
    'Rajyavardhan Singh',
  ];

  productsArr = [
    {
      snum: 1,
      name: 'Mobile',
      price: 'Rs. 14000',
      availability: 'Available',
    },
    {
      snum: 2,
      name: 'Laptop (HP)',
      price: 'Rs. 25000',
      availability: 'Not Available',
    },
    {
      snum: 3,
      name: 'Television',
      price: 'Rs. 18000',
      availability: 'Available',
    },
    // {
    //   snum: 4,
    //   name: 'Mobile (Samsung)',
    //   price: 'Rs. 12000',
    //   availability: 'Available',
    // },
    // {
    //   snum: 5,
    //   name: 'Laptop (Dell)',
    //   price: 'Rs. 25000',
    //   availability: 'Not Available',
    // },
    // {
    //   snum: 6,
    //   name: 'Television (LG)',
    //   price: 'Rs. 15000',
    //   availability: 'Available',
    // },
    // {
    //   snum: 7,
    //   name: 'Washing Machine',
    //   price: 'Rs. 10000',
    //   availability: 'Not Available',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddProduct(product: any) {
    this.productsArr.push({
      snum: 4,
      name: product.value,
      price: 'Rs. 25000',
      availability: 'Available',
    });
  }
}
