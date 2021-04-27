import { GlobalsService } from './globals.service';
import { environment } from '../../../../environments/environment';
import { EnvironmentKeys } from '../../../../environments/evironment.types';

describe('GlobalsService', () => {
  let service: GlobalsService;
  beforeEach(() => {
    service = new GlobalsService();
  });

  it('should retrieve a given value', () => {
    expect(service.get(EnvironmentKeys.apiBaseUrl)).toEqual(environment[EnvironmentKeys.apiBaseUrl]);
  });

  it('should store a given value', () => {
    const newValue = 'it';
    service.set('SITE_LANGUAGE', newValue);
    expect(service.get('SITE_LANGUAGE')).toEqual(newValue);
  });
});
