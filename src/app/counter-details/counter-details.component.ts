import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';
import { SuperCounterComponent } from '../super-counter/super-counter.component';

@Component({
  selector: 'counter-details',
  templateUrl: './counter-details.component.html',
  styleUrls: ['./counter-details.component.css']
})
export class CounterDetailsComponent implements OnInit {

  @Input()
   counter:Counter; 
  constructor() { }

  ngOnInit() {
  }
  increment(){
    this.counter.value += 1;
  }

  decrement(){
    this.counter.value -= 1;

  }
}
