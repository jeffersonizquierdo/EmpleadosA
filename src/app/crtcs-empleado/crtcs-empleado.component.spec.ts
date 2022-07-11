import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtcsEmpleadoComponent } from './crtcs-empleado.component';

describe('CrtcsEmpleadoComponent', () => {
  let component: CrtcsEmpleadoComponent;
  let fixture: ComponentFixture<CrtcsEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrtcsEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtcsEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
