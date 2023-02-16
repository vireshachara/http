import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfoperatorComponent } from './ofoperator.component';

describe('OfoperatorComponent', () => {
  let component: OfoperatorComponent;
  let fixture: ComponentFixture<OfoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfoperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
