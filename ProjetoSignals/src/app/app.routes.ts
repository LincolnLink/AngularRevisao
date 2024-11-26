import { Routes } from '@angular/router';
import { HomeComponent } from '../app/Component/home/home.component';
import { SignalsExemploComponent } from './Component/signals-exemplo/signals-exemplo.component';
import { SignalsOnPushComponent } from './Component/signals-on-push/signals-on-push.component';
import { SignalConverteObservableComponent } from './Component/signal-converte-observable/signal-converte-observable.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'signalsExemplo', component: SignalsExemploComponent},
    {path: 'onPush', component: SignalsOnPushComponent},
    {path: 'convert', component: SignalConverteObservableComponent},
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
