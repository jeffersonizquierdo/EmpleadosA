import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosEmpleadoComponent } from './modificar-datos-empleado.component';

describe('ModificarDatosEmpleadoComponent', () => {
  let component: ModificarDatosEmpleadoComponent;
  let fixture: ComponentFixture<ModificarDatosEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
