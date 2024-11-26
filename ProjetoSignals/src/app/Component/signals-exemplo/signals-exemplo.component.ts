import { JsonPipe } from '@angular/common';
import { Component, computed, effect, Injector, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-signals-exemplo',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './signals-exemplo.component.html',
  styleUrl: './signals-exemplo.component.css'
})
export class SignalsExemploComponent implements OnInit {

  protected exemploSignal01 = signal('Lincoln');
  protected exemploSignal02 = signal(1);
  protected exemploSignal03 = signal('Lincoln');
  protected exemploSignal04 = signal({nome: "Lincoln", idade: 34});

  // testeFuncao(){
  //   console.log('FUNCAO');
  //   return 'FUNCAO'
  // }

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
  
  
  //----------Computed------------------------
  //Chama os metodo de dentro para fora, quando executa um metodo que está dentro
  // de outro metodo, ele executa o de dentro e o de fora!
  protected exemploCount = signal(1);
  protected showCount = signal(true); //desliga a dependencia.
  
  protected computedExemplo = computed(() => {
    console.log('COMPUTED ACIONADO!');
    if(this.showCount()){     
      return `${this.exemploCount()} computed!`
    }
    else{
      return 'NADA';
    }    
  });
 
  executarComputed(){
    this.exemploCount.update(atual => atual + 1); 
  }

  Alterar(){
    this.showCount.update(atual => !atual);
  }

 
  //---------------------------effect-----------------------------
  // deve ser declarado no construtor.
  // são disparado com um efeito colateral

  // constructor(){
  //   effect(() =>{
  //     //console.log(`ALTEROU NO EFFECT ${this.exemploCount()}`);
  //     console.log(`ALTEROU NO EFFECT <--executa aqui`);
  //     this.exemploCount()
  //   })
  // }

  constructor(private injector: Injector){}

  ngOnInit(): void {
   //Para usar o effect fora do construtor deve fazer uma Injecao de dependencia
   //Passando por parametro no construtor: "private inector: Injector".
    effect(() =>{
        //console.log(`ALTEROU NO EFFECT ${this.exemploCount()}`);
        console.log(`ALTEROU NO EFFECT <--executa aqui`);
        this.exemploCount()
    }, {injector: this.injector})
  }


  //--------------- OnPush-----------------------

  


}
