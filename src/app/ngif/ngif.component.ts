import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  //  v1:boolean=true;
  //  v2:boolean=true;
  // check:boolean=true
//    makeTrue():void{
//        this.check=true;
//    }
//    makeFalse():void{
//     this.check=false;
// }


// v1True(){
// this.v1=true;
// }
// v1False(){
// this.v1=false;
// }
// v2True(){
// this.v2=true;
// }
// v2False(){
// this.v2=false;
// }

  x:number=0;
  add():void{
    this.x++;
  }
  sub():void{
    this
  }
  constructor() { }

  ngOnInit() {
  }

}
