import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crtcs-empleado',
  templateUrl: './crtcs-empleado.component.html',
  styleUrls: ['./crtcs-empleado.component.css']
})
export class CrtcsEmpleadoComponent implements OnInit {

  @Output() crtcEmpleado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCrtc(value:string){
    this.crtcEmpleado.emit(value)
  }

}
