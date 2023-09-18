import { TestBed } from '@angular/core/testing';

import { LanguageDetService } from './language-det.service';

describe('LanguageDetService', () => {
  let service: LanguageDetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageDetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
