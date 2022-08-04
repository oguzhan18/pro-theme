import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-home',
  templateUrl: './front-home.component.html',
  styleUrls: ['./front-home.component.scss']
})
export class FrontHomeComponent implements OnInit {
  value;

  onChange(value) {
    console.log(
      "This triggers only when there's a change in the value: ",
      value
    );
    this.value = value;
  }

  onBlur(value) {
    console.log(
      "This triggers even when there's no change in the value: ",
      value
    );
  }
  constructor() { }

  ngOnInit(): void {
  }

}
