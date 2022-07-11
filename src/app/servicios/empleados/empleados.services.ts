import { Empleado } from "src/app/Empleado.model";

export class EmpleadosServices{


    empleados:Empleado[] = [

        new Empleado ("jefferson", "izquierdo", "Presidente", 1000),
        new Empleado ("camilo", "hernadez", "Estudiante", 2000),
        new Empleado ("Brayan", "Hurtado", "Presidente", 1500),
        new Empleado ("Andres", "Serna", "Desarrollador", 4000)
      
      ];

      agregarEmpleadoSercicio(empleado: Empleado){

        this.empleados.push(empleado);
      }

}

