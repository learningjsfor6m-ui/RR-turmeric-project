import { TestBed } from '@angular/core/testing';

import { GodownServiceService } from './godown-service.service';

describe('GodownServiceService', () => {
  let service: GodownServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GodownServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
