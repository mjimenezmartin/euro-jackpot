import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'euro-jackpot',
  },
  {
    path: 'euro-jackpot',
    loadChildren: () => import('./euro-jackpot/euro-jackpot.module').then(mod => mod.EuroJackpotModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
