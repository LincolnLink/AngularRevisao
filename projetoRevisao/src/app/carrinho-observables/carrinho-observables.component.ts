import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho-observables',
  standalone: true,
  imports: [FormsModule, CarrinhoComponent],
  templateUrl: './carrinho-observables.component.html',
  styleUrl: './carrinho-observables.component.css'
})
export class CarrinhoObservablesComponent implements OnInit {
  inputProduto = '';
  private carrinhoService = inject(CarrinhoService)

  mostrarContador = true;

  ngOnInit(): void {
    
  }
  
  adicionarProduto(){
    //add produto
    this.carrinhoService.adicionarProduto(this.inputProduto)
    
    //limpa
    this.inputProduto = '';
  }
  
}
