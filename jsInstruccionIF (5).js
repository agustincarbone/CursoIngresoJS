function Mostrar()
{
//tomo la edad  
var edad;
var edad2;

edad=document.getElementById('edad').value;

edad2=parseInt(edad);

if(edad2<13||edad2>17)

{
	alert("no es adolecente");
}

}//FIN DE LA FUNCIÓN