import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinningNumbersComponent } from './pages/winning-numbers/winning-numbers.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'winning-numbers',
  },
  {
    path: 'winning-numbers',
    component: WinningNumbersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuroJackpotRoutingModule { }
