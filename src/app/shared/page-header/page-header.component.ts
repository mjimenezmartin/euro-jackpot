import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <header fxLayout="row" fxLayoutAlign="start center">
      <h1 class="mat-headline">
        {{ title }}
      </h1>
    </header>
  `,
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input() title!: string;

  constructor() {}
}
