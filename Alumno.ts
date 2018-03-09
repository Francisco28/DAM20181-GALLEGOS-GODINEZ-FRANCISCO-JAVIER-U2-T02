class Alumnos{
    public noControl:string;
    public nombre:string;
    public apellidos:string;
    public promedio:number;
    public genero:string;
    public fechaNacimiento:Date;
    public activo:boolean;
    
    constructor(noControl:string,nombre:string,apellidos:string,promedio:number,genero:string,
    fechaNacimiento:Date,activo:boolean){
        this.noControl=noControl;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.promedio=promedio;
        this.genero=genero;
        this.fechaNacimiento=fechaNacimiento;
        this.activo=activo;
    }
}


var alumno:Alumnos;
var contador=0;
var alumnos:Alumnos[]=new Array(15);

function init():void{
    for(var i=0;i<alumnos.length;i++){
        alumnos[i]=new Alumnos("","","",0,"",new Date(),false);
    }
}
function mostrar():void{
    for(var i=0;i<alumnos.length;i++){
        if(alumnos[i].activo){
            console.log(`noControl=${alumnos[i].noControl} nombre=${alumnos[i].nombre}
              apellidos=${alumnos[i].apellidos} promedio=${alumnos[i].promedio} 
              genero=${alumnos[i].genero} fecha de nacimiento=${alumnos[i].fechaNacimiento}
              activo=${alumnos[i].activo}`);
        }
    }
}
function add(noControl:string,nombre:string,apellidos:string,promedio:number,
                 genero:string,fechaNacimiento:Date,activo:boolean):void{
                     if(contador<15){
                        alumno=new Alumnos(noControl,nombre,apellidos,promedio,genero,fechaNacimiento,activo);
                        alumnos[contador]=alumno;
                        contador++;
                     }
                    
}
function deletee(noControl:string):void{
    for(var i=0;i<alumnos.length;i++){
        if(alumnos[i].noControl===noControl){
            alumnos[i]=new Alumnos("","","",0,"",new Date(),false);
        }
    }
}
function update(noControl:string,nombre:string,apellidos:string,promedio:number,
    genero:string,fechaNacimiento:Date,activo:boolean):void{
        for(var i=0;i<alumnos.length;i++){
            if(alumnos[i].noControl==noControl){
                alumnos[i].noControl=noControl;
                alumnos[i].nombre=nombre;
                alumnos[i].apellidos=apellidos;
                alumnos[i].promedio=promedio;
                alumnos[i].genero=genero;
                alumnos[i].fechaNacimiento=fechaNacimiento;
                alumnos[i].activo=activo;
            }
        }
}
init();
add("13400409","Francisco Javier","Gallegos Godinez",100,"M",new Date(),true);
add("13400393","Edgar Ulises","Camberos Arreola",90,"M",new Date(),true);
add("13400410","Luis Ricardo","Caro Lopez",90,"M",new Date(),true);
add("13400359","Alexia Ariana","Abrego Delgado",100,"F",new Date(),true);
add("13400408","Edgar Fabrizio","Gonzalez Castellanos",80,"M",new Date(),true);
add("13400367","Alejandra Anahí","De la Rosa",100,"M",new Date(),true);
//deletee("13400409");
//deletee("13400367");
//update("13400393","Yessenia","Camberos",95,"F",new Date(),true);
//update("13400409","Ingrid Morelia","Gallegos Godinez",90,"F",new Date(),true);
mostrar();