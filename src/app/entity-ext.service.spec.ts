import { TestBed } from '@angular/core/testing';

import { EntityExtService } from './entity-ext.service';

describe('EntityExtService', () => {
  let service: EntityExtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityExtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
