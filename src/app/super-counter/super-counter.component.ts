import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

  level:number;

  @Input()
  counter:Counter;
  constructor() { 
    this.level=1;
  }

  ngOnInit() {
  }

  increment(){
    
   
          this.counter.value +=3;
    

  }
  decrement(){
    
          this.counter.value -=3;
    

  }

}
