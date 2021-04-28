import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery-ball',
  templateUrl: './lottery-ball.component.html',
  styleUrls: ['./lottery-ball.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LotteryBallComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
