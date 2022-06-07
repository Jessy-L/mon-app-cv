import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLangagesComponent } from './mes-langages.component';

describe('MesLangagesComponent', () => {
  let component: MesLangagesComponent;
  let fixture: ComponentFixture<MesLangagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesLangagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesLangagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
