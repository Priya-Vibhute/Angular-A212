import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { InputandoutputComponent } from './components/inputandoutput/inputandoutput.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ServiceComponent } from './components/service/service.component';

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
    },
    {
        path:'lifecycle',
        component:LifecycleComponent
    },
    {
        path:'service',
        component:ServiceComponent
    }
];
