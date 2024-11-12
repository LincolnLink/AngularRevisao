import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsExemploComponent } from './signals-exemplo.component';

describe('SignalsExemploComponent', () => {
  let component: SignalsExemploComponent;
  let fixture: ComponentFixture<SignalsExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsExemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
