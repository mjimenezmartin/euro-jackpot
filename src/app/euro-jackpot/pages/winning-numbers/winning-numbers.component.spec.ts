import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningNumbersComponent } from './winning-numbers.component';
import { By } from '@angular/platform-browser';
import { PAGE_TITLE } from '../../constants/euro-jackpot.constants';
import { euroJackpotResult } from '../../mocks/euro-jackpot-result';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PageHeaderModule } from '../../../shared/page-header/page-header.module';
import { SectionHeaderModule } from '../../../shared/section-header/section-header.module';
import { TableModule } from '../../../shared/table/table.module';
import { LotteryBallsModule } from '../../../shared/lottery-balls/lottery-balls.module';
import { Rank } from '../../interfaces/interfaces';

describe('WinningNumbersComponent', () => {
  let component: WinningNumbersComponent;
  let fixture: ComponentFixture<WinningNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PageHeaderModule,
        SectionHeaderModule,
        TableModule,
        LotteryBallsModule,
      ],
      declarations: [WinningNumbersComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                results: euroJackpotResult,
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningNumbersComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should contain proper header', () => {
    const pageHeader = fixture.debugElement.query(By.css('app-page-header'))
      .nativeElement;
    console.log(pageHeader);
    expect(pageHeader.textContent).toContain(PAGE_TITLE.toUpperCase());
  });

  it('should contain proper section header', () => {
    const sectionHeader = fixture.debugElement.query(
      By.css('app-section-header')
    ).nativeElement;
    console.log(sectionHeader);
    expect(sectionHeader.textContent).toContain(
      euroJackpotResult.last.date.full
    );
  });

  it('should contain app table', () => {
    const table = fixture.debugElement.query(By.css('app-table'));
    expect(table).toBeTruthy();
  });

  it('should parse ranks from results', () => {
    const sampleRank = component.results.last.odds.rank1;
    const rankFromList = component.ranks.find(
      (rank) => rank.prize === sampleRank.prize
    ) as Rank;

    expect(rankFromList).toBeTruthy();
    expect(rankFromList.tier).toBe(1);
    expect(sampleRank.winners).toBe(rankFromList.winners);
    expect(rankFromList.formatedPrice).toContain('€');
  });
});
