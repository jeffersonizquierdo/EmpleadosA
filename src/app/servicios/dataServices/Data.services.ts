import { Empleado } from 'src/app/Empleado.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataServices{


    constructor( private httpClientModule:HttpClient){

    }

    cargarEmpleados(){

        return this.httpClientModule.get('https:angular-f1a27-default-rtdb.firebaseio.com/datos.json')
    }

    guadarEmpleados(empleados:Empleado[]){

        this.httpClientModule.put('https://angular-f1a27-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

            response =>console.log('Se han guardado los empleado:'),
            error => console.log('Erro: ' +  error)
        );
    }

    actualizarEmpleado(indice:number, empleado:Empleado){


        let url = 'https://angular-f1a27-default-rtdb.firebaseio.com/datos/' + indice + '.json',empleados

        this.httpClientModule.put(url,empleado).subscribe(

            response =>console.log('Se ha modificado el empleado los empleado:'),
            error => console.log('Erro: ' +  error)
        );
    }

    EliminarEmpleado(indice:number){


        let url = 'https://angular-f1a27-default-rtdb.firebaseio.com/datos/' + indice + '.json',empleados

        this.httpClientModule.delete(url).subscribe(

            response =>console.log('Se ha eliminado el empleado los empleado:'),
            error => console.log('Erro: ' +  error)
        );
    }







}