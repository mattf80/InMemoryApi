import { WineComponent } from './wine/wine.component';

import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';


<<<<<<< HEAD


=======
>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
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
<<<<<<< HEAD
export class AppRoutingModule {}
=======
export class AppRoutingModule {}
>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
