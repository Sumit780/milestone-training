import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {

  // urlPost="https://api.myjson.com/bins";
  // urlPost1='https://jsonplaceholder.typicode.com/todos'
  //  id:string="";
  //  brand:string="";
  //  quantity:string="";
  //  strData:string="";
  //  postData(){
//   this.apiservice.postData(this.urlPost,{"Id":this.id,"Brand":this.brand,"quantity":this.quantity}).
//   subscribe(resp=>{this.strData=JSON.stringify(resp)
//   console.log('resp',resp)})
//  }

     VIIA:string="https://api.myjson.com/bins/oqb1u";
     VIIB:string="https://api.myjson.com/bins/11tucy";
     VIIC:string="https://api.myjson.com/bins/f7dde";
     URL="https://api.myjson.com/bins/l8asa";


     class1:string="";
     classurl:string="";
     class13:string="";
      
      classes:any=       
      [{name:"VIIA",value:this.VIIA},
        {name:"VIIB",value:this.VIIB},
        {name:"VIIC",value:this.VIIC}
      ];    
     
      find(){
        
       this.allurlapi.forEach(element => {
        if(element.classid==this.class1){
          this.classurl=element.url
          console.log("sss",this.classurl)
          console.log(element.name==this.class1)
        }
       });
      }


      allurlapi:any=[];
      allStudentData:any=[];
      constructor(private apiservice:ApiService)  {}



     getData(){
     this.apiservice.getData(this.URL)
     .subscribe(resp=>{
     this.allurlapi=resp;
      this.apiservice.getData(this.classurl).subscribe(
      resp1=>{
        this.class1=resp.array.forEach(element => {
          element.classid
        });
        console.log("printing old response",resp);
         this.allStudentData=resp1;
       }
      )

     console.log(this.allStudentData)
     console.log(this.allurlapi)
      })
         }
  ngOnInit() {
  }

}


// this.class.push(item.class)
//        this.maths.push(item.maths)
//        this.science.push(item.science)
//        this.english.push(item.english)


// for(let value in resp){
//   this.name1.push(value.name)
//   this.class2.push(value.class)
//   this.maths3.push(value.maths)
//   this.science4.push(value.science)
//   this.english5.push(value.english)
// }

