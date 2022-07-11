import { EmpleadosServices } from './servicios/empleados/empleados.services';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CrtcsEmpleadoComponent } from './crtcs-empleado/crtcs-empleado.component';
import { ServicioEmpleadosService } from './servicios/mensaje/servicio-empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CrtcsEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService,EmpleadosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
