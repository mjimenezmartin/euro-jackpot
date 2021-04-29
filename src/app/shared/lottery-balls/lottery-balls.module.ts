import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotteryBallsComponent } from './lottery-balls.component';
import { LotteryBallComponent } from './lottery-ball/lottery-ball.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LotteryBallsComponent, LotteryBallComponent],
  imports: [CommonModule, MatIconModule, FlexLayoutModule],
  exports: [LotteryBallsComponent],
})
export class LotteryBallsModule {}
