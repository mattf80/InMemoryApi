import { WineComponent } from './wine.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WineComponent, WineFormComponent, WineListComponent, WineDetailComponent]
})
export class WineModule { }
