
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { WineRoutingModule } from './wine-routing.module';

import { WineComponent } from './wine.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineFormComponent } from './wine-form/wine-form.component';


import { WineService } from '../services/wine.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    WineRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    WineComponent,
    WineListComponent, 
    WineDetailComponent, 
    WineFormComponent],
  providers: [
    WineService
    ]
})
export class WineModule { }
