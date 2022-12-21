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
    this.count$ = this.store.select('counterData');
  }

  increment(){
     this.store.dispatch(counterAction.INCREMENT());
  }

  decrement(){
     this.store.dispatch(counterAction.DECREMENT());
  }

  reset(){
    this.store.dispatch(counterAction.RESET());
  }

}
