import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
 showForm='reactive';
  constructor() { }

  ngOnInit() {
  }
  
  toggleForm(name:string){
    this.showForm = name;
  }

}
