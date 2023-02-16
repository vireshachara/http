import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromeventoperatorComponent } from './fromeventoperator.component';

describe('FromeventoperatorComponent', () => {
  let component: FromeventoperatorComponent;
  let fixture: ComponentFixture<FromeventoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromeventoperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromeventoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
