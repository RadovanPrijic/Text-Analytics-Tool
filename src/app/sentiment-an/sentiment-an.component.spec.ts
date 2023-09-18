import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentAnComponent } from './sentiment-an.component';

describe('SentimentAnComponent', () => {
  let component: SentimentAnComponent;
  let fixture: ComponentFixture<SentimentAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentAnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
