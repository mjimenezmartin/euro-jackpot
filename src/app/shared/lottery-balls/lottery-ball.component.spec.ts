import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryBallsComponent } from './lottery-balls.component';

describe('LotteryBallsComponent', () => {
  let component: LotteryBallsComponent;
  let fixture: ComponentFixture<LotteryBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LotteryBallsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
