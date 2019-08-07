import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent implements OnInit {
  message = "Hello! I'm the third Child."

  constructor() { }

  ngOnInit() {
  }

}
