import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOutilsComponent } from './site-outils.component';

describe('SiteOutilsComponent', () => {
  let component: SiteOutilsComponent;
  let fixture: ComponentFixture<SiteOutilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteOutilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteOutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
