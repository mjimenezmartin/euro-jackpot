import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: `./table.component.html`,
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() dataSource!: any[];
  @Input() headers!: { [key: string]: string };
  @Input() displayedColumns!: string[];

  constructor() {}

  ngOnInit(): void {}
}
