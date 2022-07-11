
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicios/mensaje/servicio-empleados.service';

@Component({
  selector: 'app-crtcs-empleado',
  templateUrl: './crtcs-empleado.component.html',
  styleUrls: ['./crtcs-empleado.component.css']
})
export class CrtcsEmpleadoComponent implements OnInit {

  @Output() crtcEmpleado = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregarCrtc(value:string){

    this.crtcEmpleado.emit(value)
  }

}
