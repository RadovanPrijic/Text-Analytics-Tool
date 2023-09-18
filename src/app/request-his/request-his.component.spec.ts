import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestHisComponent } from './request-his.component';

describe('RequestHisComponent', () => {
  let component: RequestHisComponent;
  let fixture: ComponentFixture<RequestHisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestHisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
