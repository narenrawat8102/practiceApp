import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  value: string = 'This is test value';
  date = new Date();

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

  constructor() {}

  ngOnInit(): void {}
}
