import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotteryBallsComponent } from './lottery-balls.component';
import { LotteryBallComponent } from './lottery-ball/lottery-ball.component';

@NgModule({
  declarations: [LotteryBallsComponent, LotteryBallComponent],
  imports: [CommonModule],
  exports: [LotteryBallsComponent],
})
export class LotteryBallsModule {}
