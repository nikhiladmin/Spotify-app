import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number;

  constructor() {}

  ngOnInit(): void {}
  countStar(star: number) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
}
