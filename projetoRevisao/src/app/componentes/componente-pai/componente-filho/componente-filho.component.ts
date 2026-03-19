import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../../../models/pessoa.model';

@Component({
  selector: 'app-componente-filho',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.css'
})
export class ComponenteFilhoComponent implements OnInit {
  // Recebe dados do pai
  @Input() pessoaRecebida!: Pessoa;

  // Emite dados para o pai
  @Output() pessoaAtualizada = new EventEmitter<Pessoa>();

  // Variável local para o formulário
  pessoaEditada: Pessoa = {
    id: 0,
    nome: '',
    email: '',
    idade: 0
  };

  ngOnInit(): void {
    // Copia os dados recebidos do pai para edição local
    this.pessoaEditada = { ...this.pessoaRecebida };
  }

  salvarDados(): void {
    // Valida se os campos estão preenchidos
    if (this.pessoaEditada.nome && this.pessoaEditada.email && this.pessoaEditada.idade > 0) {
      // Emite os dados modificados para o pai
      this.pessoaAtualizada.emit(this.pessoaEditada);
      console.log('Dados enviados para o pai:', this.pessoaEditada);
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  resetarFormulario(): void {
    // Restaura os dados originais
    this.pessoaEditada = { ...this.pessoaRecebida };
  }
}
