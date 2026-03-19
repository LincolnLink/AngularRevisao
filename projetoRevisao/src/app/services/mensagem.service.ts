import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mensagem } from '../models/mensagem.model';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private readonly storageKey = 'mensagens_json';
  private readonly mensagensSubject = new BehaviorSubject<Mensagem[]>(this.carregarDoStorage());

  readonly mensagens$ = this.mensagensSubject.asObservable();

  atualizarMensagens(mensagens: Mensagem[]): void {
    this.persistir(mensagens);
  }

  adicionarMensagem(texto: string): void {
    const mensagensAtuais = this.mensagensSubject.getValue();
    const novaMensagem: Mensagem = {
      id: Date.now(),
      texto
    };

    this.persistir([...mensagensAtuais, novaMensagem]);
  }

  deletarMensagem(id: number): void {
    const mensagensAtualizadas = this
      .mensagensSubject
      .getValue()
      .filter((mensagem) => mensagem.id !== id);

    this.persistir(mensagensAtualizadas);
  }

  private carregarDoStorage(): Mensagem[] {
    if (typeof window === 'undefined') {
      return [];
    }

    const jsonSalvo = localStorage.getItem(this.storageKey);

    if (!jsonSalvo) {
      return [];
    }

    try {
      const mensagens = JSON.parse(jsonSalvo) as Mensagem[];
      return Array.isArray(mensagens) ? mensagens : [];
    } catch {
      return [];
    }
  }

  private persistir(mensagens: Mensagem[]): void {
    this.mensagensSubject.next(mensagens);

    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(mensagens));
  }
}
