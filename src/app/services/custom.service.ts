import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

//just a random data table
export const PEOPLE =[
{firstName : 'Bob', lastName : 'Dean', address : {street : '4627 Colonial Drive', city : 'Wallis',state : 'Texas'}},
{firstName : 'Sam', lastName : 'Kith', address : {street : '3689 Rose Street', city : 'Oakland',state : 'California'}},
{firstName : 'Maria', lastName : 'Lanos', address : {street : '2346 Emerson Road', city : 'Shreveport',state : 'Louisiana'}},
{firstName : 'John', lastName : 'Fied', address : {street : '3994 Willow Oaks Lane', city : 'Opelousas',state : 'Louisiana'}},
{firstName : 'Kate', lastName : 'Lorrens', address : {street : '95 Fleming Way', city : 'Richmond',state : 'Virginia'}}
]


@Injectable({
  providedIn: 'root'
})
export class CustomService {
  messageHolder = '';
  
  /*---------------------- OBSERVABLES --------------------------------------------------------------------*/
  /*
  Observables provide support for passing messages between publishers and subscribers in our application. They are used  for event handling, asynchronous programming, and handling multiple values.
  The idea is that we have publishers and subscribers. Publishers are those who publish the data and subscribers are those who consume the data.
  
  As a publisher, you create an Observable instance that defines a subscriber function. 
  This is the function that is executed when a consumer calls the subscribe() method. 
  The subscriber function defines how to obtain or generate values or messages to be published.

  To execute the observable you have created and begin receiving notifications, you call its subscribe() method, passing an observer. 
  This is a JavaScript object that defines the handlers for the notifications you receive. 
  The subscribe() call returns a Subscription object that has an unsubscribe() method, which you call to stop receiving notifications.
  //More info here:  
  https://angular.io/guide/observables
  
  Creating observables: call the new Observable() and pass along one argument which represents the observer. 
  
  Subscribing to observables: use subscribe(). Note: If we don’t subscribe, the function will NOT get executed.
  Furthermore, when we subscribe to an observer, each call of subscribe() will trigger it’s own independent execution for that given observer. Subscribe calls are not shared among subscribers.
  
  Executing observables: The code inside an observable represents the execution of the observable. There are three functions available to send data to the subscriber:
    -->next(): sends one or multiple values.
    -->error(): sends a Javascript error or exception when/if it is occured.
    -->complete(): stops the execution and does not send any other values.

  Disposing observables: Observable execution can run for an infinite amount of time. In order to stop it we use unsubscribe() to close the open subscriptions (otherwise we waste memory and computing power).
  Note: http calls do not need unsubscribe as Angular does it automatically (--> check this).
  
  */
  
  people = PEOPLE;
    
  constructor() { }
  
  addPerson(person: any){
   this.people.push(person);
   console.log(this.people);
  }
  
  getPeopleV1(){
    //of is a static method of Observable that is used to create a simple Observable using data passed as argument.
    return of(this.people);
  }

  getPeopleV2(){
    return new Observable((observer) => {
        observer.next(this.people)
        observer.complete()
    })
  }


  
  /*--------------------- PASSING MESSAGES BETWEEN COMPONENTS ------------------------------------------*/
  /*--
  We can either use service to store something locally and get it whenever it is asked OR
  use subscription method. The second method is achieved by creating a subscription using observables or behaviorSubjects:
  1. Create a behaviorSubject in service. BehaviorSubjects can store a value and write on it.
  2. Create a subscription in a component to listen to BehaviorSubject. The subject will always return
  the most recent value. This communication is continuous until the component unsubscribe(). Note: To use
  subscription we first need to 'inject' a dependency of the custom service into the component that needs it.
  
  Observables and BehaviorSubject Explanation:
  Angular makes use of observables as an interface to handle a variety of common asynchronous operations. We subscribe on observables and we get the data when they are ready (we don't wait until we get it, but we know that we will get it sometime). 
  
  The Observer and Observable interfaces provide a generalized mechanism for push-based notification, also known as the observer design pattern. The Observable object represents the object that sends notifications (the provider); the Observer object represents the class that receives them (the observer).

  A Subject is both an observer and observable (we can both store a value of write on it, observables cannot write). The BehaviorSubject holds the value that needs to be shared with other components. These components subscribe to data which simple return the BehaviorSubject value.
  
  --*/
    
    messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();

    sendMessage(message: string) {
        this.messageSource.next(message)
    }
    
    getMessage(){
        return this.currentMessage //check this
    }
    
    /*----------------- GUARDS --------------------------------------------------------------------------*/
    password:string = '';
    
    setPassword(pass:string){
        this.password = pass;
    }
    
    getPassword(){
        return this.password;
    }
}
