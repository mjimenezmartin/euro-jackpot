import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EuroJackpotResultDTO } from '../interfaces/interfaces';
import { EuroJackpotService } from '../services/euro-jackpot.service';

@Injectable()
export class ResultsResolver implements Resolve<EuroJackpotResultDTO> {
  constructor(private euroJackpotService: EuroJackpotService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.euroJackpotService.getResults();
  }
}
