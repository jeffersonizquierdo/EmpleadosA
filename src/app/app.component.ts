import { Empleado } from './Empleado.model';
import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from './servicios/mensaje/servicio-empleados.service';
import { EmpleadosServices } from './servicios/empleados/empleados.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosServices : EmpleadosServices){

    this.empleadosServices.empleados;
  }


  ngOnInit(): void {
    
    this.empleados = this.empleadosServices.empleados
  }

  cuadroNombre:string = '';
  cuadorApellido:string = '';
  cuadroCargo:string = '';
  cuadroSalario:number = 0;

  agregarEmpleado (){
  
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadorApellido, this.cuadroCargo, this.cuadroSalario);  
    this.miServicio.mostrarMensaje("nombre del empleado: " + miEmpleado.nombre + ',' + " apellido del empleado: " + miEmpleado.apellido)
    this.empleadosServices.agregarEmpleadoSercicio(miEmpleado);
  }

  empleados:Empleado[]=[];  
}


