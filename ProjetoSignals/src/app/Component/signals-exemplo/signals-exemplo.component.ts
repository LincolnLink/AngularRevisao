import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


@Component({
  selector: 'app-signals-exemplo',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './signals-exemplo.component.html',
  styleUrl: './signals-exemplo.component.css'
})
export class SignalsExemploComponent {

  protected exemploSignal01 = signal('Lincoln');
  protected exemploSignal02 = signal(1);
  protected exemploSignal03 = signal('Lincoln');
  protected exemploSignal04 = signal({nome: "Lincoln", idade: 34});

  //Computed
  protected exemploCount = signal(1);
  
  protected computedExemplo = computed(() =>{
    console.log('Passei pelo computed!')
    return `${this.exemploCount()} computed!`
  });
 
  executar(){

    //Set: define o signal para um novo valor absoluto.
    this.exemploSignal01.set("Lincoln Ferreira Campos");

    // Update: Define o signal com base no valor atual.
    this.exemploSignal02.update(atual => atual +1);

    // Update: Define o signal com base no valor atual.
    this.exemploSignal03.update(atual => `${atual} update`);

    // Update: Define o signal com base no valor atual.
    this.exemploSignal04.update(atual => {
      return {
        ...atual,
        idade: 30
      }
    });

    //NÃO EXISTE MAIS.
    //Mutate: Define o signal com base no valor atual sem obj total.
    //this.exemploSignal05.mutate(atual => atual.nome = "Lincoln Ferreira Campos");
  }

  executar2(){
    this.exemploCount.update(atual => atual + 1);

    

  }

  // testeFuncao(){
  //   console.log('FUNCAO');
  //   return 'FUNCAO'
  // }
}
