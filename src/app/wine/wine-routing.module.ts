import { WineFormComponent } from './wine-form/wine-form.component';
import { WineComponent } from './wine.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineListComponent } from './wine-list/wine-list.component';

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

        ],


        )],
    exports: [
        RouterModule
    ]
})
export class WineRoutingModule { }