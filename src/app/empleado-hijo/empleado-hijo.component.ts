import { Empleado } from './../Empleado.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() empleadoDeLista:Empleado;
  @Input() indice: number;

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

  arrayCrtcs = ['']

  agregarCaracteristica (nuevaCrtc:string){

    this.arrayCrtcs.push(nuevaCrtc)

  }

}
