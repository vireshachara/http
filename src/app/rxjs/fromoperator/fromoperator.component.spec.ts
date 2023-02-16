import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromoperatorComponent } from './fromoperator.component';

describe('FromoperatorComponent', () => {
  let component: FromoperatorComponent;
  let fixture: ComponentFixture<FromoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromoperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
