import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
