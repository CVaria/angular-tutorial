import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { Subscription }   from 'rxjs';
import { CustomService } from './../../../services/custom.service';
import { ThirdChildComponent } from './../third-child/third-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit {

  serviceMsg:string;
  subscription: Subscription;
  showChild='first';
  firstMsg = "Hello First Child"
  secondMsg: string;
  thirdMsg : string; 
  
  toggleChild(name:string){
    this.showChild = name;
  }

  //Dependency Injection in order to use custom service    
  constructor(private customServ: CustomService) { console.log("constructor")}

  ngOnInit() {
    console.log("init")
    this.thirdMsg="Where is my third child?";
    
    //create a subscription to listen to the messages of others
    this.subscription=this.customServ.currentMessage.subscribe(message => this.serviceMsg = message)
  }
  
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
  
  sendFirstMsg(){
    this.firstMsg = (<HTMLInputElement>document.getElementById("inputBinding")).value;
  }
  
  /*
  Lifecycle Hooks: Components are alive!
  The lifecycle of a component/directive is managed by Angular as it creates, checks, updates, renders, and destroys them. 
  To have a view of all these occurrences and respond to these moments, Angular provides lifecycle hooks which give us visibility into these. These lifecycle hooks can be implemented by the interfaces provided in the Angular Core Library (for both components and directives). 
  Every interface contains different lifecycle hook methods (named with the interface name prefixed with ng, eg. the lifecycle hook ngOnInit() is named as ng(prefix) and OnInit (interface name)).
  Exampes of lifecycle hooks: OnInit, OnDestroy, AfterViewInit.
  */
  
  @ViewChild(ThirdChildComponent, {static: true}) child;
  
  /*ngAfterViewInit() {
    this.thirdMsg = this.child.message
  }*/
  
  ngAfterContentInit(){
    this.thirdMsg = this.child.message
  }
  
  receiveMessage($event) {
    this.secondMsg = $event
  }
}
