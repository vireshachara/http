import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervaloperatorComponent } from './intervaloperator.component';

describe('IntervaloperatorComponent', () => {
  let component: IntervaloperatorComponent;
  let fixture: ComponentFixture<IntervaloperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervaloperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervaloperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
