import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';

=======
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { WineModule } from './wine/wine.module';
>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWineService }  from './data-access/in-memory-data.service';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';

<<<<<<< HEAD
import { WineService } from './services/wine.service';
import { WineModule } from './wine/wine.module';
=======
>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7

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
<<<<<<< HEAD
    WineModule,
    AppRoutingModule
    
=======
    MaterialModule.forRoot(),
    WineModule,
    AppRoutingModule
>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 