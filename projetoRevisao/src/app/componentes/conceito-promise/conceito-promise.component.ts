import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conceito-promise',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conceito-promise.component.html',
  styleUrl: './conceito-promise.component.css'
})
export class ConceitoPromiseComponent implements OnInit {
  
  inputProduto = ''
  //pode ser resolvida ou rejeitada
  private timer = new Promise<string>((resolver, rejeitar) => {
    console.log('PROMISE INICIADA');

    setTimeout(() => {      
      resolver("RESOLVIDO PROMISE")
    }, 5000); //5s

  })

  ngOnInit(): void {

    //Chamando o resolver.
    this.timer
    .then(value => console.log(value))
  }

  adicionarProduto(){

    this.inputProduto = '';
  }



}
