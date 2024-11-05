import { Component, inject, OnDestroy } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { Subscription, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';

//usa o AsyncPipe caso seja uma consulta simples sem API.

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnDestroy {

  carrinhoService = inject(CarrinhoService)
  qtdCarrinho$ = this.carrinhoService.ObterQuantidadeCarrinho();
  
  qtdProdutos: Number = 0
  sub = new Subscription();

  constructor(){
    const subContador = this.qtdCarrinho$
    .pipe(//modificar os valores.
      take(1) //ele ja de desinscreve.
    )
    .subscribe(qtd => this.qtdProdutos = qtd)
   
    console.log('valor recebido pelo inscrito');
    this.sub.add(subContador);
  }

  ngOnDestroy(): void {
    console.log('Component destruido')
    this.sub.unsubscribe();
  }
}
