import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
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
export class ListaMensagemComponent implements OnInit, OnDestroy {
  mensagemTexto = '';

  // JSON local com as mensagens cadastradas na tela.
  mensagensJson: Mensagem[] = [];
  private subscription?: Subscription;

  constructor(private readonly mensagemService: MensagemService) {}

  ngOnInit(): void {
    this.subscription = this.mensagemService.mensagens$.subscribe((mensagens) => {
      this.mensagensJson = mensagens;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  adicionarMensagem(): void {
    const texto = this.mensagemTexto.trim();

    if (!texto) {
      return;
    }

    this.mensagemService.adicionarMensagem(texto);
    this.mensagemTexto = '';
  }

  deletarMensagem(id: number): void {
    this.mensagemService.deletarMensagem(id);
  }

}
