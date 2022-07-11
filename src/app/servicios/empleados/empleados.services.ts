import { ServicioEmpleadosService } from './../mensaje/servicio-empleados.service';
import { Injectable } from "@angular/core";
import { Empleado } from "src/app/Empleado.model";

@Injectable()
export class EmpleadosServices{
  
    
  constructor( private servicioVentanaEmergente:ServicioEmpleadosService ){
  }

    empleados:Empleado[] = [

        new Empleado ("jefferson", "izquierdo", "Presidente", 1000),
        new Empleado ("camilo", "hernadez", "Estudiante", 2000),
        new Empleado ("Brayan", "Hurtado", "Presidente", 1500),
        new Empleado ("Andres", "Serna", "Desarrollador", 4000)
      
      ];

      agregarEmpleadoSercicio(empleado: Empleado){

        this.servicioVentanaEmergente.mostrarMensaje("persona a agregar " + "\n" +
        "Nombre: " + empleado.nombre + "\n" + "Apelido: " + empleado.apellido)
        this.empleados.push(empleado);
      }

      consultarEmpleado(idEmpleado: number): Empleado {
        
        let empleado:Empleado = this.empleados[idEmpleado];

        return empleado;
      }

      actualizarEmpleado(miEmpleado: Empleado, idEmpleado: number) {
        
        this.empleados[idEmpleado] = miEmpleado;
      }

}

