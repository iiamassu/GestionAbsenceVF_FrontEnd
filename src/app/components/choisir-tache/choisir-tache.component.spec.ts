import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirTacheComponent } from './choisir-tache.component';

describe('ChoisirTacheComponent', () => {
  let component: ChoisirTacheComponent;
  let fixture: ComponentFixture<ChoisirTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisirTacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoisirTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
