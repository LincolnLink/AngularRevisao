import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mensagem } from '../models/mensagem.model';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private readonly mensagensSubject = new BehaviorSubject<Mensagem[]>([]);

  readonly mensagens$ = this.mensagensSubject.asObservable();

  atualizarMensagens(mensagens: Mensagem[]): void {
    this.mensagensSubject.next(mensagens);
  }
}
