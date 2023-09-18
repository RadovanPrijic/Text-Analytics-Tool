import { TestBed } from '@angular/core/testing';

import { RequestHisService } from './request-his.service';

describe('RequestHisService', () => {
  let service: RequestHisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestHisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
