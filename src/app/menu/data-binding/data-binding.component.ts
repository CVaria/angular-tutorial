import { Component, OnInit } from '@angular/core';
import { CustomService } from '../../services/custom.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  myString: string = "This is a string."
  myImgPath: string ='assets/logo.png';
  myTitle ='Learning data binding';
  myUsername:string = 'dsdfsf';
  

  constructor() { }

  ngOnInit() {
  }

  changeMyTitle(){
    this.myTitle='Learning event binding'
  }

}
