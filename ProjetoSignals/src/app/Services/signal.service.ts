import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  //Forma antiga
  private countInjetado$ = new BehaviorSubject(5);
  private countConstrutor$ = new BehaviorSubject(0);

  getValorInjetado(){
    return this.countInjetado$.asObservable();
  }
  getValorConstrutor(){
    return this.countConstrutor$.asObservable();
  }


  // Forma com Signal
  private count = signal(1)

  getCount(){
    return this.count.asReadonly();
  }

  
  constructor() { }
}
