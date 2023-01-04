import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentairesComponent } from './commentaires.component';

describe('CommentairesComponent', () => {
  let component: CommentairesComponent;
  let fixture: ComponentFixture<CommentairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
