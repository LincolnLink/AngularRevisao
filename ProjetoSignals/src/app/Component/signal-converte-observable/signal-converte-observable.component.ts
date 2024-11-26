import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-signal-converte-observable',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './signal-converte-observable.component.html',
  styleUrl: './signal-converte-observable.component.css'
})
export class SignalConverteObservableComponent {

  protected exemploCount = signal(1);

  executarComputed(){
    this.exemploCount.update(atual => atual + 1); 
  }

  protected exemploCount$ = toObservable(this.exemploCount);
  protected exemploAoContrario = toSignal(this.exemploCount$);

}
