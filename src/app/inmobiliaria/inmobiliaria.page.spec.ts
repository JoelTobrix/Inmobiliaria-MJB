import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InmobiliariaPage } from './inmobiliaria.page';

describe('InmobiliariaPage', () => {
  let component: InmobiliariaPage;
  let fixture: ComponentFixture<InmobiliariaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InmobiliariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
