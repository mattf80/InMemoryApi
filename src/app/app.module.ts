
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWineService }  from './data-access/in-memory-data.service';
import { AppComponent } from './app.component';

import { WineService } from './services/wine.service';
import { WineModule } from './wine/wine.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryWineService),
    WineModule,
    AppRoutingModule
    
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
