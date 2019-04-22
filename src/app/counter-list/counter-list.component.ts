import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
   name = 'My counter list';
   counters : Counter[];
   supercounter: Counter[];
   totalSuprCnt=0; 
   superCounters : SuperCounterComponent;
  constructor() { 
     this.counters = [];
     this.supercounter=[];
  
  }

   ngOnInit() {
  }
  //create method
create()
{
  if(this.counters.length<6){
    const c=new Counter();
  this.counters.push(c);
  this.supercounter=[];
  this.totalSuprCnt=0;                                                                                     
  }  
  if((this.counters.length)%6 === 0){
    const counter=new Counter();
      
      let maxCnt=this.counters.reduce((acc,c) => {
        return acc+c.value;
      },0);
      counter.value=maxCnt;
      this.supercounter.push(counter);
      this.counters=[];
      this.totalSuprCnt++;
   }
  }
}