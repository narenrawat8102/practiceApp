import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  products = [
    {
      proImage: 'assets/ngFor-Images/laptop.jpg',
      proName: 'Laptop',
      proID: '01',
      proPrice: '35000',
    },
    {
      proImage: 'assets/ngFor-Images/mobile.jpeg',
      proName: 'Mobile',
      proID: '02',
      proPrice: '10000',
    },
    {
      proImage: 'assets/ngFor-Images/tv.jpeg',
      proName: 'Television',
      proID: '03',
      proPrice: '25000',
    },
    {
      proImage: 'assets/ngFor-Images/washing-machine.jpeg',
      proName: 'Washing Machine',
      proID: '04',
      proPrice: '12000',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
