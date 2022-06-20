import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLeftdownComponent } from './animation-leftdown.component';

describe('AnimationLeftdownComponent', () => {
  let component: AnimationLeftdownComponent;
  let fixture: ComponentFixture<AnimationLeftdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimationLeftdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationLeftdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
