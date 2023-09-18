import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDetComponent } from './language-det.component';

describe('LanguageDetComponent', () => {
  let component: LanguageDetComponent;
  let fixture: ComponentFixture<LanguageDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
