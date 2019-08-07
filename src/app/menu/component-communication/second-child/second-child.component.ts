import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomService } from './../../../services/custom.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {
  serviceMsg: string ='';
  message: string ='';

  //Dependency Injection in order to use custom service    
  constructor(private customServ: CustomService) { }

  ngOnInit() {}
  
  sendMessage(){
    this.customServ.sendMessage(this.serviceMsg)
  }
  
  /*
  EventEmitter is an angular abstraction and its only purpose is to emit events in components.
  @Input() and @Output() allow Angular to share data between the parent context and child directives. 
  An @Input() property is writable while an @Output() property is observable.
  Think of @Input() and @Output() like ports or doorways—@Input() is the doorway into the component allowing data to flow in while @Output() is the doorway out of the component, allowing the child component to send data out.
  */
  @Output() messageEvent = new EventEmitter<string>();

  emitMessage() {
    this.messageEvent.emit(this.message)
  }

}
