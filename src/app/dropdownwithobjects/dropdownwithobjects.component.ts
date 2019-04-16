import { Component, OnInit } from '@angular/core';
import { Course} from '../course';
import { courseList} from '../course';
import { Student1 } from '../student1';
import {studentList} from '../student1';
import {country} from '../country';
import {countryList} from '../country';

@Component({
  selector: 'app-dropdownwithobjects',
  templateUrl: './dropdownwithobjects.component.html',
  styleUrls: ['./dropdownwithobjects.component.css']
})
export class DropdownwithobjectsComponent implements OnInit {

    selCourse:Course=null;
    myCourse:Course[]=courseList;

    stud:Student1=null;
    myStudent:Student1[]=studentList;

   Country:string="";
   selectedCity:string="";
   myCountry:country[]=countryList;
   cities: string[]=[];

  findIndex() :string[]{
 console.log("prrinting country ",this.Country)
 const countryFromCountryList=this.myCountry.find(item=>item.name==this.Country);
return this.cities=countryFromCountryList.cities;
}

  constructor() { }

  ngOnInit() {
  }

}
