import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinningNumbersComponent } from './pages/winning-numbers/winning-numbers.component';
import { ResultsResolver } from './resolvers/results-resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'winning-numbers',
  },
  {
    path: 'winning-numbers',
    component: WinningNumbersComponent,
    resolve: {
      results: ResultsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ResultsResolver],
})
export class EuroJackpotRoutingModule {}
