import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public now: Date = new Date();
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit(): void {}
}
