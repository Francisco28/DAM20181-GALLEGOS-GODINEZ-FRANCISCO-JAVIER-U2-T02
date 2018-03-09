var Alumnos = /** @class */ (function () {
    function Alumnos(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
        this.noControl = noControl;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.promedio = promedio;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.activo = activo;
    }
    return Alumnos;
}());
var alumno;
var contador = 0;
var alumnos = new Array(15);
function init() {
    for (var i = 0; i < alumnos.length; i++) {
        alumnos[i] = new Alumnos("", "", "", 0, "", new Date(), false);
    }
}
function mostrar() {
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].activo) {
            console.log("noControl=" + alumnos[i].noControl + " nombre=" + alumnos[i].nombre + "\n              apellidos=" + alumnos[i].apellidos + " promedio=" + alumnos[i].promedio + " \n              genero=" + alumnos[i].genero + " fecha de nacimiento=" + alumnos[i].fechaNacimiento + "\n              activo=" + alumnos[i].activo);
        }
    }
}
function add(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
    if (contador < 15) {
        alumno = new Alumnos(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo);
        alumnos[contador] = alumno;
        contador++;
    }
}
function deletee(noControl) {
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].noControl === noControl) {
            alumnos[i] = new Alumnos("", "", "", 0, "", new Date(), false);
        }
    }
}
function update(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].noControl == noControl) {
            alumnos[i].noControl = noControl;
            alumnos[i].nombre = nombre;
            alumnos[i].apellidos = apellidos;
            alumnos[i].promedio = promedio;
            alumnos[i].genero = genero;
            alumnos[i].fechaNacimiento = fechaNacimiento;
            alumnos[i].activo = activo;
        }
    }
}
init();
add("13400409", "Francisco Javier", "Gallegos Godinez", 100, "M", new Date(), true);
add("13400393", "Edgar Ulises", "Camberos Arreola", 90, "M", new Date(), true);
add("13400410", "Luis Ricardo", "Caro Lopez", 90, "M", new Date(), true);
add("13400359", "Alexia Ariana", "Abrego Delgado", 100, "F", new Date(), true);
add("13400408", "Edgar Fabrizio", "Gonzalez Castellanos", 80, "M", new Date(), true);
add("13400367", "Alejandra Anahí", "De la Rosa", 100, "M", new Date(), true);
//deletee("13400409");
//deletee("13400367");
//update("13400393","Yessenia","Camberos",95,"F",new Date(),true);
//update("13400409","Ingrid Morelia","Gallegos Godinez",90,"F",new Date(),true);
mostrar();
