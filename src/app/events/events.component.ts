import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  totalLength:number;
  
  onChange(s:string){
   this.totalLength= s.length
  }
   
  working:string;
  options:string;
  setCourseValue:string='';
  courses:string[]=['Angular','java','Python','Bootstrap']



  eventFirst:boolean
  eventSecond:boolean
  value1:string="";
  value2:string="";
  focusoutEvent1(s:string){
    this.value1=s;
    this.eventFirst=true;
    console.log(this.eventFirst,"foev1")
    console.log("sss1")  
   }
   focusEvent1(s:string){
     this.value1=s;
     this.eventFirst=false;
     console.log(this.eventFirst,"fev1")
     console.log("sss1")  
   }
   focusoutEvent2(t:string){
    this.value2=t;
    this.eventSecond=true;
    console.log("sss2")
    console.log(this.eventFirst,"foev2")
    console.log("sss2")  
   }
   focusEvent2(t:string){
    this.value2=t;
    this.eventSecond=false;
    console.log(this.eventFirst,"fev2")
    console.log("sss2")  
  }

  constructor() { }   
  
  ngOnInit() {
  }

}
