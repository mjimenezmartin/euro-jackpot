import { TestBed } from '@angular/core/testing';

import { EuroJackpotService } from './euro-jackpot.service';
import { ApiService } from '../../core/services/api/api.service';
import { resultsUrl } from '../constants/euro-jackpot.constants';

describe('EuroJackpotService', () => {
  let service: EuroJackpotService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EuroJackpotService,
        {
          provide: ApiService,
          useValue: {
            get: () => null,
          },
        },
      ],
    });
    service = TestBed.inject(EuroJackpotService);
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call api for eurojackpot results', () => {
    const spy = spyOn(apiService, 'get').and.callThrough();
    service.getResults();
    expect(spy).toHaveBeenCalledWith(resultsUrl);
  });
});
