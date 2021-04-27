import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
import { GlobalsService } from '../globals/globals.service';
import { GlobalsServiceStub } from '../globals/globals.service.stub';

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: GlobalsService,
          useClass: GlobalsServiceStub
        }
      ]
    });
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  describe('buildSearch()', () => {
    it('should return a well formed HttpParams object given a set of key-value duples', () => {
      const testParams = {
        category: 'Home & Garden',
        ch: 'true',
        q: 'asd',
      };

      const result = apiService.buildSearch(testParams);

      expect(result instanceof HttpParams).toBeTruthy();
      expect(result.get('category')).toEqual('Home & Garden');
    });

    it('should still create a HttpParams object even if an empty object is passed', () => {
      const testParams = {};

      const result = apiService.buildSearch(testParams);

      expect(result instanceof HttpParams).toBeTruthy();
    });
  });
});
