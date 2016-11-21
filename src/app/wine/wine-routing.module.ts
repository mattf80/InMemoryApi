import { WineFormComponent } from './wine-form/wine-form.component';
import { WineComponent } from './wine.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineListComponent } from './wine-list/wine-list.component';

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
=======

>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: '/wine',
                pathMatch: 'full'
            },
            {
                path: 'wine',
                component: WineComponent,
                children: [
                    {
                        path: 'list',
                        component: WineListComponent
                    },
                    {
                        path: 'detail/:id',
                        component: WineDetailComponent
                    },
                    {
                        path: 'add',
                        component: WineFormComponent
                    },
                    {
                        path: 'edit/:id',
                        component: WineFormComponent
                    }

                ]
            }
<<<<<<< HEAD
<<<<<<< HEAD

        ],


=======
        ],

>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
=======
        ],

>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
        )],
    exports: [
        RouterModule
    ]
})
export class WineRoutingModule { }