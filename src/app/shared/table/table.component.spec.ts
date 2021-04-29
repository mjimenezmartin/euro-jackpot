import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { HarnessLoader } from '@angular/cdk/testing';
import { ChangeDetectionStrategy } from '@angular/core';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatTableHarness } from '@angular/material/table/testing';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let loader: HarnessLoader;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatTableModule],
        declarations: [TableComponent],
      })
        .overrideComponent(TableComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default },
        })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.headers = {
      col1: 'Column 1',
      col2: 'Column 2',
      col3: 'Column 3',
    };
    component.displayedColumns = ['col1', 'col2'];
    component.dataSource = [
      { col1: 'col1 value', col2: 'col2 value', col3: 'Column 3' },
      { col1: 'col1 value2', col2: 'col2 value2', col3: 'Column 3' },
    ];
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain mat-table', async () => {
    const matTable = await loader.getHarness(MatTableHarness);
    expect(matTable).toBeTruthy();
  });

  it('should contain 2 rows', async () => {
    const matTable = await loader.getHarness(MatTableHarness);
    const rows = await matTable.getRows();
    expect(rows.length).toBe(2);
  });
});
