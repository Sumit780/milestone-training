import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-arrat51',
  templateUrl: './arrat51.component.html',
  styleUrls: ['./arrat51.component.css']
})
export class Arrat51Component implements OnInit {
// courses:string[]=['java','python','javascript','ruby'];
//courseName:string='';
// addStart(){
// this.courses.unshift(this.courseName);
// this.courseName='';
// }
// addEnd(){
// this.courses.push(this.courseName);
// this.courseName='';
// }
// removeStart(){
// this.courses.shift();

// }
// removeEnd(){
//   this.courses.pop();
// }
 numbers:number[]=[2,3,4,5];
  num:string;

  addNum():void{
    let num=parseInt(this.num);
    this.numbers.push(num);
    this.num='';
  }
    //  square(c:number):number{
    //  console.log(c);
    //   return c*c;
    // }
    count():number{//count
      let count1=0;
      this.numbers.forEach(item=>{
        if(item%2==0){
          count1=count1+1;
        }
      })
      return count1; 
    }   
    evenOdd(c:number):string{
      return (c%2==0?'even':'odd')
    }//sum
    sum():number{
     return  this.numbers.reduce((accumulator,item)=>accumulator=accumulator+item,0)
      }
  remove(c:number):void{
    let n1:number=0;
  
      for(let temp of this.numbers){
        if(temp == c){
          this.numbers.splice(n1,1);
          this.num=""+c;
          
        break;
          }
        n1=n1+1;
      }
    }
  constructor() { }

  ngOnInit() {
  }

}
