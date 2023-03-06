//declaro la fecha
let ahora = new Date();

//creo un bucle que se asegura de que las ciudades introducidad son esas
do{
	var ciudad = prompt("De que ciudad desea obtener la fecha y hora actual: Madrid, París, Londres")
}while(ciudad!="Londres"&&ciudad!="Madrid"&&ciudad!="Paris")

//El switch que dependiendo de la ciudad devuelve una hora u otra
switch (ciudad){
	case "Londres":
		document.write("Ciudad: Londres <br/>")
		document.write("Fecha: "+ ahora.getUTCDate()+"-"+ahora.getUTCMonth()+"-"+ahora.getUTCFullYear()+"<br/>")
		document.write("Hora: "+ ahora.getUTCHours()+":"+ahora.getUTCMinutes()+":"+ahora.getUTCSeconds())
		break;
	
	case "Madrid":
		document.write("Ciudad: Madrid <br/>")
		document.write("Fecha: "+ ahora.getUTCDate()+"-"+ahora.getUTCMonth()+"-"+ahora.getUTCFullYear()+"<br/>")
		document.write("Hora: "+ (ahora.getUTCHours()+1)+":"+ahora.getUTCMinutes()+":"+ahora.getUTCSeconds())
		break;
		
	case "Paris":
		document.write("Ciudad: Paris <br/>")
		document.write("Fecha: "+ ahora.getUTCDate()+"-"+ahora.getUTCMonth()+"-"+ahora.getUTCFullYear()+"<br/>")
		document.write("Hora: "+ (ahora.getUTCHours()+1)+":"+ahora.getUTCMinutes()+":"+ahora.getUTCSeconds())
	
		
}
	