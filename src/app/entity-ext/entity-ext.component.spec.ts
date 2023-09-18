import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityExtComponent } from './entity-ext.component';

describe('EntityExtComponent', () => {
  let component: EntityExtComponent;
  let fixture: ComponentFixture<EntityExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityExtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
