import { Component, OnInit } from '@angular/core'; 
import{ Course} from '../course';
import {courseList} from '../course';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
    //  course:string='python';
    // courses:string[]=['Angular','python','java','javascript']
  
    // yearJoin:string='0';
    // yearLeave:string='0';
    // yearNum():number{
    // return parseInt(this.yearLeave,10) - parseInt(this.yearJoin,10);
    // }
  //    startingYear:string='';
  //    numberOfYear:string='';
  //    years:number[]=[];
  
  //    year:number=0;
      

  //  configure(){
  //     let n = parseInt(this.startingYear,10)
  //     let m = parseInt(this.numberOfYear,10)
  //     for(let i=n;i<=n+m;i++)
  //     {
  //       this.years.push(i);
  //       console.log(this.years)
  //     }
       
  //   }

 


    constructor() { }

  ngOnInit() {
  }

}
