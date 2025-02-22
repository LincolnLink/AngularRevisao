import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../personalizado/input/input.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'angular-comp-avancado-2';

  //Deve por "FormBuilder" para usar o formulario reativo.
  private formBuilder = inject(FormBuilder);
  protected form = this.formBuilder.group({
    rua: [null, Validators.required],
    numero: [null, Validators.required],
    complemento: [null],
  });

  constructor(){
    // this.form.controls.rua.disable();
  }

  onClick(){
    console.log(this.form);
  }
}
