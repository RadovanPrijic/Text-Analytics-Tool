import { TestBed } from '@angular/core/testing';

import { SentimentAnService } from './sentiment-an.service';

describe('SentimentAnService', () => {
  let service: SentimentAnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentimentAnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
