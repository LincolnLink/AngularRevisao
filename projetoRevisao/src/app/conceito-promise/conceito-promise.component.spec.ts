import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceitoPromiseComponent } from './conceito-promise.component';

describe('ConceitoPromiseComponent', () => {
  let component: ConceitoPromiseComponent;
  let fixture: ComponentFixture<ConceitoPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceitoPromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceitoPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
