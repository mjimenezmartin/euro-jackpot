import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lottery-balls',
  template: `<p>lottery-balls works!</p>`,
  styleUrls: ['./lottery-balls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LotteryBallsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
