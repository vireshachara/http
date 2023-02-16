import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutmethodComponent } from './putmethod.component';

describe('PutmethodComponent', () => {
  let component: PutmethodComponent;
  let fixture: ComponentFixture<PutmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
