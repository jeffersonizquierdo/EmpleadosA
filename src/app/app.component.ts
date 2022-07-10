import { Empleado } from './Empleado.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados:Empleado[] = [

  new Empleado ("jefferson", "izquierdo", "Presidente", 1000),
  new Empleado ("camilo", "hernadez", "Estudiante", 2000),
  new Empleado ("Brayan", "Hurtado", "Presidente", 1500),
  new Empleado ("Andres", "Serna", "Desarrollador", 4000)

];


cuadroNombre:string = '';
cuadorApellido:string = '';
cuadroCargo:string = '';
cuadroSalario:number = 0;

  agregarEmpleado (){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadorApellido, this.cuadroCargo, this.cuadroSalario);  
    this.empleados.push(miEmpleado);

  }


}


