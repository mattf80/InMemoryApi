import { WineComponent } from './wine/wine.component';

import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'wine', component: WineComponent },
      { path: '', redirectTo: 'wine', pathMatch: 'full' }
      //{ path: '**', component: NotFoundComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}