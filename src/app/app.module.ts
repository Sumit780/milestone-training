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
    DropdownwithobjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
