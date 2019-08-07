import { Component, OnInit } from '@angular/core';
import { Subscription, Observable}   from 'rxjs';
import { CustomService } from '../../services/custom.service';

@Component({
  selector: 'app-directive-observable',
  templateUrl: './directive-observable.component.html',
  styleUrls: ['./directive-observable.component.css']
})
export class DirectiveObservableComponent implements OnInit {
  people1$ = {} // the sign $ indicates we have an observable
  people2 = {};
  subs: Subscription;
  selectedPerson: any;
  showSecret = false;
  color: string;

  constructor(private customServ: CustomService) { }

  ngOnInit() {
   this.people1$ = this.customServ.getPeopleV1();
   this.subs= this.customServ.getPeopleV2().subscribe(res => this.people2=res);
  }
  
  ngOnDestroy(){
    this.subs.unsubscribe()
  }

  onSelect(person: any): void {
    this.selectedPerson = person;
    console.log(this.selectedPerson)
  }

}
