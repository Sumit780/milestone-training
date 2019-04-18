import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Arrat51Component } from './arrat51/arrat51.component';
import { ObjectsComponent } from './objects/objects.component';
import { NgA3Component } from './ng-a3/ng-a3.component';
import { AddobjectComponent } from './addobject/addobject.component';
import { NgifComponent } from './ngif/ngif.component';
import { CheckboxradioComponent } from './checkboxradio/checkboxradio.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownwithobjectsComponent } from './dropdownwithobjects/dropdownwithobjects.component';
import { EventsComponent } from './events/events.component';
import { ServiceTaskComponent } from './service-task/service-task.component';
import {HttpClientModule} from '@angular/common/http';
import { PostdataComponent } from './postdata/postdata.component'
@NgModule({
  declarations: [
    AppComponent,
    Arrat51Component,
    ObjectsComponent,
    NgA3Component,
    AddobjectComponent,
    NgifComponent,
    CheckboxradioComponent,
    DropdownComponent,
    DropdownwithobjectsComponent,
    EventsComponent,
    ServiceTaskComponent,
    PostdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceTaskComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
