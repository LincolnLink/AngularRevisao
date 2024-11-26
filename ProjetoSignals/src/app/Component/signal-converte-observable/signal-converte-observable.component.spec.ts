import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalConverteObservableComponent } from './signal-converte-observable.component';

describe('SignalConverteObservableComponent', () => {
  let component: SignalConverteObservableComponent;
  let fixture: ComponentFixture<SignalConverteObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalConverteObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalConverteObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
