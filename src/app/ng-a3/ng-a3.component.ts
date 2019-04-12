import { Component, OnInit } from '@angular/core';
import{ hero } from '../Hero';

@Component({
  selector: 'app-ng-a3',
  templateUrl: './ng-a3.component.html',
  styleUrls: ['./ng-a3.component.css']
})
export class NgA3Component implements OnInit {

 allHero:hero[]=[
    {firstName:'SpiderMan',lastName:'PeterParker',age:19},
    {firstName:'BlackWidow',lastName:'Natasha',age:28},
    {firstName:'IronMan',lastName:'TonyStark',age:34},
    { firstName:'CaptainAmerica',lastName:'Chris Evans',age:32}
  ];


   remove(i:number):void{
     this.allHero.splice(i,1);
   }
   donelesson(i:number):void{
     let st1:hero=this.allHero[i];
     st1.age=st1.age+1;
     console.log(st1)

   }


  constructor() { }

  ngOnInit() {
  }
}
