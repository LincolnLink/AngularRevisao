import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceitoPromiseComponent } from './componentes/conceito-promise/conceito-promise.component';
import { ComceitoObservablesComponent } from './componentes/comceito-observables/comceito-observables.component';
import { CarrinhoObservablesComponent } from './componentes/carrinho-observables/carrinho-observables.component';
import { ComponentePaiComponent } from './componentes/componente-pai/componente-pai.component';
import { ListaMensagemComponent } from './componentes/lista-mensagem/lista-mensagem.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'promise', component: ConceitoPromiseComponent},
    {path: 'carrinho', component: CarrinhoObservablesComponent},
    {path: 'observables', component: ComceitoObservablesComponent},
    {path: 'componentePai', component: ComponentePaiComponent},
    {path: 'listaMensagem', component: ListaMensagemComponent},
    /*{
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.routes')
        .then(r => r.CURSOS_ROUTES)
    },*/
    {path: '', redirectTo:'home', pathMatch: 'full' },
    {path: '**', redirectTo:'home', pathMatch: 'full' }
];
