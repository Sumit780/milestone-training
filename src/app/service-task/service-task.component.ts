import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { api } from '../api';
import {totalCourse} from '../api';
import {studentData} from '../studentData'




@Component({
  selector: 'app-service-task',
  templateUrl: './service-task.component.html',
  styleUrls: ['./service-task.component.css']
})
export class ServiceTaskComponent implements OnInit {
  
  // allCourse:api=null;
  // myCourses:api[]= totalCourse;
  // value:string='';
  
  // apiurl:string='';

  constructor(private apiService:ApiService)   { }
 
  // findIndex():any{
  //   let p = this.myCourses.find(item=>item.name==this.value)
  //   this.apiurl=p.url
  // }       


url1="https://api.myjson.com/bins/18py7w";

// urlPost="https://api.myjson.com/bins";
// clist=['India','France','USA','Japan'];

  strData:string[]=[];
  strData1:string[]=[];
  strData2:string[]=[];
  names:string[]=[];

   p:object;

  getNames(){
  this.apiService.getData(this.url1)//this.apiuri
  .subscribe(resp=>{
    // resp.map(item=>{
    //    this.strData.push(item.course)

    //    this.strData1.push(item.desc)
    //    this.strData2.push(item.lessons)
    // })

    
    
  //this.strData=JSON.parse(resp);
  
  
  let p =Object.values(resp)
 
  for (let  key of p) {
       Object.values(p)
}
console.log("key",p)
    console.log(this.names)
});
  }

  // postData(){
  //   this.apiService.postData(this.urlPost,this.clist).subscribe(resp=>{
  //     this.strData=JSON.stringify(resp);
  //   });
  // }
  
  ngOnInit() {
  }

}
