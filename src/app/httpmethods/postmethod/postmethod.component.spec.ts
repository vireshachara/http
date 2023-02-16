import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmethodComponent } from './postmethod.component';

describe('PostmethodComponent', () => {
  let component: PostmethodComponent;
  let fixture: ComponentFixture<PostmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
