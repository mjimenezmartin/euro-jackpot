import { TestBed } from '@angular/core/testing';
import { ResultsResolver } from './results-resolver';
import { EuroJackpotService } from '../services/euro-jackpot.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('ResultsResolver', () => {
  let resolver: ResultsResolver;
  let euroJackpotService: EuroJackpotService;
  let activatedRouteSnapshot: ActivatedRouteSnapshot;
  let routerStateSnapshot: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResultsResolver,
        {
          provide: EuroJackpotService,
          useValue: {
            getResults: () => null,
          },
        },
        {
          provide: RouterStateSnapshot,
          useValue: {},
        },
      ],
    });
    euroJackpotService = TestBed.inject(EuroJackpotService);
    resolver = TestBed.inject(ResultsResolver);
    routerStateSnapshot = TestBed.inject(RouterStateSnapshot);
    activatedRouteSnapshot = new ActivatedRouteSnapshot();
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should call eurojackpot service on resolve', () => {
    const spy = spyOn(euroJackpotService, 'getResults').and.callThrough();
    resolver.resolve(activatedRouteSnapshot, routerStateSnapshot);
    expect(spy).toHaveBeenCalled();
  });
});
