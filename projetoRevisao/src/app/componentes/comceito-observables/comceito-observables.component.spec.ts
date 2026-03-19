import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComceitoObservablesComponent } from './comceito-observables.component';

describe('ComceitoObservablesComponent', () => {
  let component: ComceitoObservablesComponent;
  let fixture: ComponentFixture<ComceitoObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComceitoObservablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComceitoObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
