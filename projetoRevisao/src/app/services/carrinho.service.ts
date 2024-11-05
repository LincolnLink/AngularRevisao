import { Injectable } from "@angular/core";
import { Compra } from "../models/carrinho.model";
import { BehaviorSubject, identity, Observable, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CarrinhoService{
    private carrinho: Compra[] = [];

    //BehaviorSubject -> é um Observable deve ser inicializado.
    //Subject - é um Observable que tem mais controle.
    private produtoAdicionado$ = new BehaviorSubject<Number>(0);
    

    // Exemplo que funciona, mas chama toda hora muitas requisições descontrolada.
    // get carrinhoQtd(){
    //     //console.log('lendo')
    //     return this.carrinho.length;       
    // }

    ObterQuantidadeCarrinho(){
        return this.produtoAdicionado$.asObservable();
    }

    adicionarProduto(produto: string){
        const produtoCompra: Compra = {
            id: this.carrinho.length + 1,
            produto: produto,
        }
        this.carrinho.push(produtoCompra)

        // next-> emite um valor para quem está inscrito!
        this.produtoAdicionado$.next(this.carrinho.length)

        console.log('valores: ', this.carrinho);
    }
}