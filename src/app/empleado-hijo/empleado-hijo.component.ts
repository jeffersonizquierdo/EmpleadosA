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

}
