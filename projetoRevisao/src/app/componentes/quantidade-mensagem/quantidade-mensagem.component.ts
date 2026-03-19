import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';
import { Mensagem } from '../../models/mensagem.model';
import { MensagemService } from '../../services/mensagem.service';

@Component({
  selector: 'app-quantidade-mensagem',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatTooltipModule, MatIconModule],
  templateUrl: './quantidade-mensagem.component.html',
  styleUrl: './quantidade-mensagem.component.css'
})
export class QuantidadeMensagemComponent implements OnInit, OnDestroy {
  totalMensagens = 0;
  ultimasMensagensTooltip = 'Nenhuma mensagem cadastrada.';

  private subscription?: Subscription;

  constructor(private readonly mensagemService: MensagemService) {}

  ngOnInit(): void {
    this.subscription = this.mensagemService.mensagens$.subscribe((mensagens) => {
      this.totalMensagens = mensagens.length;
      this.ultimasMensagensTooltip = this.montarTooltip(mensagens);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private montarTooltip(mensagens: Mensagem[]): string {
    if (mensagens.length === 0) {
      return 'Nenhuma mensagem cadastrada.';
    }

    return mensagens
      .slice(-3)
      .reverse()
      .map((mensagem, index) => `${index + 1}. ${mensagem.texto}`)
      .join(' | ');
  }

}
