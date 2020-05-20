import { TestBed } from '@angular/core/testing';

import { DividendsService } from './dividends.service';

describe('DividendsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DividendsService = TestBed.get(DividendsService);
    expect(service).toBeTruthy();
  });
});
