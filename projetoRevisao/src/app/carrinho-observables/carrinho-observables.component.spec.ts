import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoObservablesComponent } from './carrinho-observables.component';

describe('CarrinhoObservablesComponent', () => {
  let component: CarrinhoObservablesComponent;
  let fixture: ComponentFixture<CarrinhoObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhoObservablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
