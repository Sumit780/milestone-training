import { Component, OnInit } from '@angular/core';
// import{ hero } from '../Hero';
import {Product} from '../Product'

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {
  
  // allHero:hero[]=[
  //   {firstName:'SpiderMan',lastName:'PeterParker',age:19},
  //   {firstName:'BlackWidow',lastName:'Natasha',age:28},
  //   {firstName:'IronMan',lastName:'TonyStark',age:34},
  //   { firstName:'CaptainAmerica',lastName:'Chris Evans',age:32}
  // ];

  allProduct:Product[]=[
    {id:'P104',brand:'pepsi',price:4,quantity:22,value:88},
    {id:'C124',brand:'coke',price:4,quantity:26,value:104},
    {id:'M155',brand:'Maggie',price:6,quantity:10,value:60},
    {id:'DM241',brand:'Cadburys',price:8,quantity:15,value:150},
    {id:'5S118',brand:'5 Star',price:10,quantity:8,value:64},
  ];
     number():number{      
       return this.allProduct.length;
     } 

    tqty():number{
          //  let arr1=this.allProduct.map(num => num.quantity); 
          //  let fgh= arr1.reduce((a, b)=> {return a+b},0);
          let quant = this.allProduct.map(i=>i.quantity).reduce((a,b)=>{return a=a+b},0);
        return quant;
    }
    sales():number{  
         let valueArr = this.allProduct.map(i=>i.value);
         let sum=valueArr.reduce((accu,item)=>accu=accu + item)

         console.log("sum called with ",valueArr)
         return sum;
    }
    value(i:number):number{
      return this.allProduct[i].price * this.allProduct[i].quantity;
     }
     reset(i:number){
         let st1:Product=this.allProduct[i];
            st1.quantity=0; 
            st1.value=0;       
     }
     remove(i:number){
       console.log("rem"+i);
       let st1:Product=this.allProduct[i];
       st1.quantity+=1;

     }
     qsold(){
       var count=0;
       this.allProduct.forEach(item=>{
         if(item.quantity!=0){
           count++;
         }
       })
       return count;
        
     }
  constructor(){ }

  ngOnInit() {
  }

}
