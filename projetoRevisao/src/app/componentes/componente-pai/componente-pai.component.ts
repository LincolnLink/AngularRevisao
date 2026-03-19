import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-componente-pai',
  standalone: true,
  imports: [CommonModule, ComponenteFilhoComponent],
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})
export class ComponentePaiComponent {
  pessoa: Pessoa = {
    id: 1,
    nome: 'João Silva',
    email: 'joao@example.com',
    idade: 30
  };

  mensagem: string = '';

  receberDadosDoFilho(pessoaModificada: Pessoa): void {
    console.log('Dados recebidos do filho:', pessoaModificada);
    this.pessoa = pessoaModificada;
    this.mensagem = `Dados atualizados: ${pessoaModificada.nome}`;
  }
}
