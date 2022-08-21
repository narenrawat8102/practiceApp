import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Users {
  name: string;
}
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

  // Using ViewChild
  @ViewChild('uname') inputName: ElementRef<HTMLInputElement> =
    {} as ElementRef;

  users: Users[] = [];

  constructor() {}

  ngOnInit(): void {}

  onAddUser(uname: string): void {
    this.users.push({
      name: uname,
    });
    this.inputName.nativeElement.value = ' ';
  }

  onRemoveUser(): void {
    this.users.splice(this.users.length - 1);
  }

  onRemoveItem(item: number): void {
    this.users.splice(item, 1);
  }
}
