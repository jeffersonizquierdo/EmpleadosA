export class Empleado {


    nombre: string = '';
    apellido: string = '';
    cargo: string = '';
    salario: number = 0;

    constructor (nombre:string, apelido:string, cargo:string, salario:number){

        this.nombre = nombre;
        this.apellido = apelido;
        this.cargo = cargo;
        this.salario = salario;

    }

}