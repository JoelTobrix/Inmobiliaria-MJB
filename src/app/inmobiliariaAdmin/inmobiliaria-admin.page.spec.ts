import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InmobiliariaAdminPage } from './inmobiliaria-admin.page';

describe('InmobiliariaAdminPage', () => {
  let component: InmobiliariaAdminPage;
  let fixture: ComponentFixture<InmobiliariaAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InmobiliariaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
