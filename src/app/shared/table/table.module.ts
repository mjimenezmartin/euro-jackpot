import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatTableModule, FlexLayoutModule],
  exports: [TableComponent],
})
export class TableModule {}
