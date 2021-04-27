import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuroJackpotRoutingModule } from './euro-jackpot-routing.module';
import { WinningNumbersComponent } from './pages/winning-numbers/winning-numbers.component';
import { EuroJackpotService } from './services/euro-jackpot.service';

@NgModule({
  declarations: [WinningNumbersComponent],
  imports: [CommonModule, EuroJackpotRoutingModule],
  providers: [EuroJackpotService],
})
export class EuroJackpotModule {}
