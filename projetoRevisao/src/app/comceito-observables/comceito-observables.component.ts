import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comceito-observables',
  standalone: true,
  imports: [],
  templateUrl: './comceito-observables.component.html',
  styleUrl: './comceito-observables.component.css'
})
export class ComceitoObservablesComponent implements OnInit {
  
  private timer$ = new Observable<string>(sub =>{
    console.log('INICIANDO OBSERVABLE');

    setTimeout(() => {

      sub.next('RESOLVIDO OBSERVABLE');

      //finaliza usando complete caso queira.
      //sub.complete();
    }, 5000);
  })

  ngOnInit(): void {

    this.timer$
    .subscribe(value => {
      console.log(value); //retorna o valor do OBSERVABLE
    })

  }

}
