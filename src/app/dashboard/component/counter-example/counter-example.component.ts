import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterAction from '../../../store/actions/counter.actions';

@Component({
  selector: 'app-counter-example',
  templateUrl: './counter-example.component.html',
  styleUrls: ['./counter-example.component.css']
})
export class CounterExampleComponent implements OnInit {
   count$:Observable<number> | undefined; 
  constructor(private store:Store<{counterData:number}>) { }

  ngOnInit(): void {
    this.count$ = this.store.select('counterData');  // access store
  }

  increment(){
     this.store.dispatch(counterAction.INCREMENT()); // dispatch INCREMENT action
  }

  decrement(){
     this.store.dispatch(counterAction.DECREMENT());  // dispatch DECREMENT action
  }

  reset(){
    this.store.dispatch(counterAction.RESET());   // dispatch RESET action
  }

}
