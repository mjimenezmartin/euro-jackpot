import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <p>
      section-header works!
    </p>
  `,
  styleUrls: ['./section-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
