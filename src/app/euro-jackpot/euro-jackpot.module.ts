import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuroJackpotRoutingModule } from './euro-jackpot-routing.module';
import { WinningNumbersComponent } from './pages/winning-numbers/winning-numbers.component';


@NgModule({
  declarations: [
    WinningNumbersComponent
  ],
  imports: [
    CommonModule,
    EuroJackpotRoutingModule
  ]
})
export class EuroJackpotModule { }
