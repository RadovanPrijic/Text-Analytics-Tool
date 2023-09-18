import { TestBed } from '@angular/core/testing';

import { TextSimService } from './text-sim.service';

describe('TextSimService', () => {
  let service: TextSimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
