import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachePersonneComponent } from './tache-personne.component';

describe('TachePersonneComponent', () => {
  let component: TachePersonneComponent;
  let fixture: ComponentFixture<TachePersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachePersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TachePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
