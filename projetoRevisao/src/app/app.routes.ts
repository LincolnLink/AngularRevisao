import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceitoPromiseComponent } from './conceito-promise/conceito-promise.component';
import { ComceitoObservablesComponent } from './comceito-observables/comceito-observables.component';
import { CarrinhoObservablesComponent } from './carrinho-observables/carrinho-observables.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'promise', component: ConceitoPromiseComponent},
    {path: 'carrinho', component: CarrinhoObservablesComponent},
    {path: 'observables', component: ComceitoObservablesComponent},
    /*{
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.routes')
        .then(r => r.CURSOS_ROUTES)
    },*/
    {path: '', redirectTo:'home', pathMatch: 'full' },
    {path: '**', redirectTo:'home', pathMatch: 'full' }
];
