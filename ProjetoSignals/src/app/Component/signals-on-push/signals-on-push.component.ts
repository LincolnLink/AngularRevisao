import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { SignalService } from '../../Services/signal.service';

@Component({
  selector: 'app-signals-on-push',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './signals-on-push.component.html',
  styleUrl: './signals-on-push.component.css'
})
export class SignalsOnPushComponent {
  //Só vai chegar as alterações desse component quando o input dele for modificado
  // ou quando disparar um evento

  //valor = 1;
  valor$ = new BehaviorSubject<number>(0);
  //signal
  valorS = signal(0)


  // FORMA ANTIGA 
  // chamando service com inject
  private meuServiceSignal = inject(SignalService); // Nova forma com o `inject`
  valorInjetado$ = this.meuServiceSignal.getValorInjetado();
  // chamando service usando construtor, precisa declarar antes.
  valorDoConstrutor$ : Observable<number>




  constructor(private signalService: SignalService){

    // setInterval(() => {
    //   this.valor += 1;
    //   console.log(`Valor do onPush: ${this.valor}`);
    // }, 2000) 

    interval(2000).pipe(      
      map(() => {
        this.valor$.next(this.valor$.value + 1);

        //signal
        this.valorS.update(atual => atual +1);
      })
    ).subscribe();

    // Se for usar o construtor, deve pegar o valor dentro do construtor.
    this.valorDoConstrutor$ = signalService.getValorConstrutor();


  }

  executar(){
    const meuSignal = this.signalService.getCount();
  }

  
}
