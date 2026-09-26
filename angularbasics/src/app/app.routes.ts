import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ServicesComponent } from './components/services/services.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { InputandoutputComponent } from './components/inputandoutput/inputandoutput.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:'data-binding',
        component:DatabindingComponent
    },
    {
        path:'services',
        component:ServicesComponent
    },
    {
        path:'pipes',
        component:PipesComponent
    },
    {
        path:'directives',
        component:DirectivesComponent
    },
    {
        path:'input-and-output',
        component:InputandoutputComponent
    }
];
