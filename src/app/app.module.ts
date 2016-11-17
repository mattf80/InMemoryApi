
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWineService }  from './data-access/in-memory-data.service';
import { AppComponent } from './app.component';

import { WineService } from './services/wine.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryWineService),
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
