import { TestBed } from '@angular/core/testing';

import { DeferLoadingwithJsonApiService } from './defer-loadingwith-json-api.service';

describe('DeferLoadingwithJsonApiService', () => {
  let service: DeferLoadingwithJsonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeferLoadingwithJsonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
