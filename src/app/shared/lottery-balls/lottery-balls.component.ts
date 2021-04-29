import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-lottery-balls',
  template: `
    <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="4px">
      <app-lottery-ball
        *ngFor="let number of numbers"
        [number]="number"
      ></app-lottery-ball>

      <mat-icon>add</mat-icon>

      <app-lottery-ball
        class="euro-number-ball"
        *ngFor="let number of euroNumbers"
        [number]="number"
      ></app-lottery-ball>
    </div>
  `,
  styleUrls: ['./lottery-balls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LotteryBallsComponent {
  @Input() numbers!: number[];
  @Input() euroNumbers!: number[];

  constructor() {}
}
