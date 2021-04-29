import { Component, OnInit } from '@angular/core';
import {
  PAGE_TITLE,
  TABLE_COLUMN_HEADERS,
  TABLE_COLUMNS,
} from '../../constants/euro-jackpot.constants';
import { EuroJackpotResultDTO, Rank } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { formatCurrency, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@Component({
  selector: 'app-euro-jackpot',
  templateUrl: './winning-numbers.component.html',
  styleUrls: ['./winning-numbers.component.scss'],
})
export class WinningNumbersComponent implements OnInit {
  title = PAGE_TITLE;
  results!: EuroJackpotResultDTO;
  ranks!: Rank[];
  columns = TABLE_COLUMNS;
  headers = TABLE_COLUMN_HEADERS;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.results = this.route.snapshot.data.results;
    this.ranks = this.generateRanksList();
  }

  private generateRanksList(): Rank[] {
    const ranks = Object.entries(this.results.last.odds)
      .sort(([_, prev], [__, curr]) => curr.prize - prev.prize)
      .map(([_, rank], idx) => ({
        tier: idx + 1,
        ...rank,
        formatedPrice: formatCurrency(rank.prize / 100, 'de', '€'),
      }));
    ranks.pop();
    return ranks;
  }
}
