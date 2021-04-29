import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryBallsComponent } from './lottery-balls.component';
import { LotteryBallComponent } from './lottery-ball/lottery-ball.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

describe('LotteryBallsComponent', () => {
  let component: LotteryBallsComponent;
  let fixture: ComponentFixture<LotteryBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [LotteryBallsComponent, LotteryBallComponent],
    })
      .overrideComponent(LotteryBallsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 lottery balls', () => {
    component.numbers = [1, 2, 3];
    fixture.detectChanges();
    const lotteryBalls = fixture.debugElement.queryAll(
      By.css('app-lottery-ball')
    );
    expect(lotteryBalls.length).toBe(3);
  });

  it('should contain 3 euro numbers lottery balls', () => {
    component.euroNumbers = [1, 2, 3];
    fixture.detectChanges();
    const lotteryBalls = fixture.debugElement.queryAll(
      By.css('.euro-number-ball')
    );
    expect(lotteryBalls.length).toBe(3);
  });
});
