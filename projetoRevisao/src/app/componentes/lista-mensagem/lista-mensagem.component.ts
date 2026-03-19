import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Mensagem } from '../../models/mensagem.model';
import { MensagemService } from '../../services/mensagem.service';

@Component({
  selector: 'app-lista-mensagem',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './lista-mensagem.component.html',
  styleUrl: './lista-mensagem.component.css'
})
export class ListaMensagemComponent {
  mensagemTexto = '';

  // JSON local com as mensagens cadastradas na tela.
  mensagensJson: Mensagem[] = [];

  constructor(private readonly mensagemService: MensagemService) {}

  adicionarMensagem(): void {
    const texto = this.mensagemTexto.trim();

    if (!texto) {
      return;
    }

    const novaMensagem: Mensagem = {
      id: Date.now(),
      texto
    };

    this.mensagensJson = [...this.mensagensJson, novaMensagem];
    this.mensagemService.atualizarMensagens(this.mensagensJson);
    this.mensagemTexto = '';
  }

  deletarMensagem(id: number): void {
    this.mensagensJson = this.mensagensJson.filter((mensagem) => mensagem.id !== id);
    this.mensagemService.atualizarMensagens(this.mensagensJson);
  }

}
