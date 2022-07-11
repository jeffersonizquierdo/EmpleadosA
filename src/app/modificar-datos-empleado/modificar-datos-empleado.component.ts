import { Empleado } from 'src/app/Empleado.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosServices } from '../servicios/empleados/empleados.services';
import { ServicioEmpleadosService } from '../servicios/mensaje/servicio-empleados.service';

@Component({
  selector: 'app-modificar-datos-empleado',
  templateUrl: './modificar-datos-empleado.component.html',
  styleUrls: ['./modificar-datos-empleado.component.css']
})
export class ModificarDatosEmpleadoComponent implements OnInit {

  constructor(private miServicio:ServicioEmpleadosService, private empleadosServices : EmpleadosServices, 
    private route: ActivatedRoute, private router : Router) { }

  empleados:Empleado[] = [];
  
  ngOnInit(): void {

    this.empleados = this.empleadosServices.empleados;

    this.idEmpleado = this.route.snapshot.params['id']

    let empleado: Empleado = this.empleadosServices.consultarEmpleado(this.idEmpleado);

    this.cuadroNombre = empleado.nombre;
    this.cuadorApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  idEmpleado: number;
  title = 'Listado de Empleados';
  cuadroNombre:string = '';
  cuadorApellido:string = '';
  cuadroCargo:string = '';
  cuadroSalario:number = 0;

  volverMenu(){
    this.router.navigate(['']);
  }

  modificarEmpleado (){
  
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadorApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosServices.actualizarEmpleado(miEmpleado, this.idEmpleado);
    this.volverMenu();
    
  }

}
