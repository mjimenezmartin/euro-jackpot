import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <header>
      <h2 class="mat-title">
        {{ title }}
      </h2>
    </header>
  `,
  styleUrls: ['./section-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  @Input() title!: string;

  constructor() {}
}
