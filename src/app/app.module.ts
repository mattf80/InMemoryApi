import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { WineModule } from './wine/wine.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWineService }  from './data-access/in-memory-data.service';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryWineService),
    MaterialModule.forRoot(),
    WineModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 