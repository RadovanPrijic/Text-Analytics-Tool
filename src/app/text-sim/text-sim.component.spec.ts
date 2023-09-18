import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSimComponent } from './text-sim.component';

describe('TextSimComponent', () => {
  let component: TextSimComponent;
  let fixture: ComponentFixture<TextSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
