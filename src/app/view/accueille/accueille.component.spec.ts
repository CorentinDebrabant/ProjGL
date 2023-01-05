import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilleComponent } from './accueille.component';

describe('AccueilleComponent', () => {
  let component: AccueilleComponent;
  let fixture: ComponentFixture<AccueilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
