import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-table',
  template: ` <table mat-table></table> `,
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() dataSource: any;
  @Input() dataStructure: [string, string][] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
