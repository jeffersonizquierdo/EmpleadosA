import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Empleado } from '../Empleado.model';
import { EmpleadosServices } from '../servicios/empleados/empleados.services';
import { ServicioEmpleadosService } from '../servicios/mensaje/servicio-empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosServices : EmpleadosServices) { }

  ngOnInit(): void {
  }

  volverHome(){

    this.router.navigate([''])
  }

  title = 'Listado de Empleados';
  cuadroNombre:string = '';
  cuadorApellido:string = '';
  cuadroCargo:string = '';
  cuadroSalario:number = 0;

  agregarEmpleado (){
  
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadorApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosServices.agregarEmpleadoSercicio(miEmpleado);
    this.volverHome();
  }

}
