import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsOnPushComponent } from './signals-on-push.component';

describe('SignalsOnPushComponent', () => {
  let component: SignalsOnPushComponent;
  let fixture: ComponentFixture<SignalsOnPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsOnPushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
