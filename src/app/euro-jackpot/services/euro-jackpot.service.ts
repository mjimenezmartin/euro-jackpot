import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EuroJackpotResultDTO } from '../interfaces/interfaces';
import { ApiService } from '../../core/services/api/api.service';
import { RESULTS_URL } from '../constants/euro-jackpot.constants';

@Injectable()
export class EuroJackpotService {
  constructor(private apiService: ApiService) {}

  getResults(): Observable<EuroJackpotResultDTO> {
    return this.apiService.get<EuroJackpotResultDTO>(RESULTS_URL);
  }
}
