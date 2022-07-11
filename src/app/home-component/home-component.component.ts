import { Component, OnInit } from '@angular/core';
import { Empleado } from '../Empleado.model';
import { ServicioEmpleadosService } from '../servicios/mensaje/servicio-empleados.service';
import { EmpleadosServices } from '../servicios/empleados/empleados.services';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private miServicio:ServicioEmpleadosService, private empleadosServices : EmpleadosServices) { }

  ngOnInit(): void {

    this.empleados = this.empleadosServices.empleados
  }
  title = 'Listado de Empleados';
  cuadroNombre:string = '';
  cuadorApellido:string = '';
  cuadroCargo:string = '';
  cuadroSalario:number = 0;

  agregarEmpleado (){
  
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadorApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosServices.agregarEmpleadoSercicio(miEmpleado);
  }

  empleados:Empleado[]=[];  

}
