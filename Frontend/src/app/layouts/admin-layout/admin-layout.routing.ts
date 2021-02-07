import { Routes } from '@angular/router';

import { GeneratorComponent } from '../../generator/generator.component';
import { HomeComponent } from 'app/home/home.component';
import { AssorbitoreComponent } from 'app/assorbitore/assorbitore.component';
import { InProgressComponent } from 'app/in-progress/in-progress.component';

export const AdminLayoutRoutes: Routes = [
    { path:'home',             component: HomeComponent},
    { path: 'generatore',      component: GeneratorComponent },
    { path: 'assorbitore',      component: AssorbitoreComponent },
    { path: 'caldaia...',           component: InProgressComponent }
];
 