import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadeMensagemComponent } from './quantidade-mensagem.component';

describe('QuantidadeMensagemComponent', () => {
  let component: QuantidadeMensagemComponent;
  let fixture: ComponentFixture<QuantidadeMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantidadeMensagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantidadeMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
