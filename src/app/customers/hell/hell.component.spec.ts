import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellComponent } from './hell.component';

describe('HellComponent', () => {
  let component: HellComponent;
  let fixture: ComponentFixture<HellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
