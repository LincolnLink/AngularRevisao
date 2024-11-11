import { Routes } from '@angular/router';
import { HomeComponent } from '../app/Component/home/home.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    // {path: 'promise', component: ConceitoPromiseComponent},
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
