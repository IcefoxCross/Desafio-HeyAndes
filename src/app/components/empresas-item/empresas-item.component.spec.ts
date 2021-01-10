import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasItemComponent } from './empresas-item.component';

describe('EmpresasItemComponent', () => {
  let component: EmpresasItemComponent;
  let fixture: ComponentFixture<EmpresasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
