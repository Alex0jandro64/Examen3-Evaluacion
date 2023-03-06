//Declaro las variables
var nombre
var apellido
var edad

//Solicito los datos
nombre=prompt("Cual es el Nombre del Alumno:")
apellido=prompt("Cuales son los Apellidos del Alumno:")
edad=prompt("Cual es la Edad del Alumno")

//Edad lo convierto en tipo number
edad=Number(edad)

//Construyo el objeto alumno
var alumno={
	nombre:nombre,
	apellidos:apellido,
	edad:edad
}

//Imprimo por pantalla
document.write("Nombre y apellidos: "+alumno.apellidos+", "+alumno.nombre+". <br/>")
document.write("Edad: "+alumno.edad+" ayos. <br/>")
document.write("Edad es un tipo: "+typeof(alumno.edad)+".")


