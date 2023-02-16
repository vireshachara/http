import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceoperatorComponent } from './debounceoperator.component';

describe('DebounceoperatorComponent', () => {
  let component: DebounceoperatorComponent;
  let fixture: ComponentFixture<DebounceoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceoperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
