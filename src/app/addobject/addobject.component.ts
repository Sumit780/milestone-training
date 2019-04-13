import { Component, OnInit } from '@angular/core';
import{Student} from '../student';
import {Product} from '../Product';
@Component({
  selector: 'app-addobject',
  templateUrl: './addobject.component.html',
  styleUrls: ['./addobject.component.css']
})
export class AddobjectComponent implements OnInit {
  
  
  // allStudent:Student[]=[ {name:'james' ,course:'Angular', lesson:8,comp:34 },
  //                         {name:'marry' ,course:'Paython', lesson:16,comp:41 },
  //                         {name:'bob' ,course:'Java', lesson:35,comp:66 },
  //                         {name:'pam' ,course:'Android', lesson:3,comp:32 }
  //                       ];

 allProduct:Product[]=[
        {id:'P104',brand:'pepsi',price:4,quantity:22,value:88},
        {id:'C124',brand:'coke',price:4,quantity:26,value:104},
        {id:'M155',brand:'Maggie',price:6,quantity:10,value:60},
        {id:'DM241',brand:'Cadburys',price:8,quantity:15,value:150},
        {id:'5S118',brand:'5 Star',price:10,quantity:8,value:64},];
         p:Product={id:'',brand:'',price:0,quantity:0,value:0};

       totalProduct():number { return this.allProduct.length }


       add(){
         this.allProduct.push(this.p)
         this.p= {id:'',brand:'',price:0,quantity:0,value:0};
       }


        soldProduct(){
            var count=0;
            this.allProduct.forEach(item=>{
                if(item.quantity!=0){
                count++;
                 }
               })
               return count;
            }

          totalQuantitySold(){ return  this.allProduct.map(i=>i.quantity).reduce((a,b)=>{return a=a+b},0); }

          totalSales(){
          let valueArr = this.allProduct.map(i=>i.value);
          let sum=valueArr.reduce((accu,item)=>accu=accu + item)
          return sum;
                }

    reset(x:number):void{ var st2:Product=this.allProduct[x]
                            st2.quantity=0;
                             st2.value=0;}
    increment(x:number):void{ var str1:Product=this.allProduct[x];
                              str1.quantity=str1.quantity+1; }
    totalvalue(i:number){
      return this.allProduct[i].value= this.allProduct[i].price * this.allProduct[i].quantity}
  constructor() { }

  ngOnInit() {
  }

}
