import { EmpleadosServices } from './servicios/empleados/empleados.services';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CrtcsEmpleadoComponent } from './crtcs-empleado/crtcs-empleado.component';
import { ServicioEmpleadosService } from './servicios/mensaje/servicio-empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [

  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'quienes', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent}, 

]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CrtcsEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponent,
    QuienesComponentComponent,
    ContactoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService,EmpleadosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
