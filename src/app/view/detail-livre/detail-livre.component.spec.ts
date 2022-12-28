import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLivreComponent } from './detail-livre.component';

describe('DetailLivreComponent', () => {
  let component: DetailLivreComponent;
  let fixture: ComponentFixture<DetailLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
