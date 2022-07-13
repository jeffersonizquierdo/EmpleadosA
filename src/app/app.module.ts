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
import { ModificarDatosEmpleadoComponent } from './modificar-datos-empleado/modificar-datos-empleado.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { DataServices } from './servicios/dataServices/Data.services';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';

const appRoutes:Routes = [

  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'quienes', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualizar/:id', component:ModificarDatosEmpleadoComponent },
  {path:'**', component:ErrorComponentComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CrtcsEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ModificarDatosEmpleadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService,EmpleadosServices,DataServices],
  bootstrap: [AppComponent]
})
export class AppModule {}