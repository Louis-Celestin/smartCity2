import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSondagesComponent } from './ajouter-sondages.component';

describe('AjouterSondagesComponent', () => {
  let component: AjouterSondagesComponent;
  let fixture: ComponentFixture<AjouterSondagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSondagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSondagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
