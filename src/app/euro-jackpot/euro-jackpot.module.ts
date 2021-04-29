import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuroJackpotRoutingModule } from './euro-jackpot-routing.module';
import { WinningNumbersComponent } from './pages/winning-numbers/winning-numbers.component';
import { EuroJackpotService } from './services/euro-jackpot.service';
import { PageHeaderModule } from '../shared/page-header/page-header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SectionHeaderModule } from '../shared/section-header/section-header.module';
import { TableModule } from '../shared/table/table.module';
import { LotteryBallsModule } from '../shared/lottery-balls/lottery-balls.module';

@NgModule({
  declarations: [WinningNumbersComponent],
  imports: [
    CommonModule,
    EuroJackpotRoutingModule,
    PageHeaderModule,
    FlexLayoutModule,
    SectionHeaderModule,
    TableModule,
    LotteryBallsModule,
  ],
  providers: [EuroJackpotService],
})
export class EuroJackpotModule {}
