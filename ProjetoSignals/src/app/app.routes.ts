import { Routes } from '@angular/router';
import { HomeComponent } from '../app/Component/home/home.component';
import { SignalsExemploComponent } from './Component/signals-exemplo/signals-exemplo.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'signalsExemplo', component: SignalsExemploComponent},
    // {path: 'carrinho', component: CarrinhoObservablesComponent},
    // {path: 'observables', component: ComceitoObservablesComponent},
    /*{
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.routes')
        .then(r => r.CURSOS_ROUTES)
    },*/
    {path: '', redirectTo:'home', pathMatch: 'full' },
    {path: '**', redirectTo:'home', pathMatch: 'full' }
];
