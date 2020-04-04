import { TestBed } from '@angular/core/testing';

import { SearchLibService } from './search-lib.service';

describe('SearchLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchLibService = TestBed.get(SearchLibService);
    expect(service).toBeTruthy();
  });
});
