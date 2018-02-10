function Mostrar()

{
//tomo la edad  
var edad;
var edad2;

edad=document.getElementById('edad').value;

edad2=parseInt(edad);

if(edad2>= 18)
{

alert("es mayor de edad");

}

else

{	
alert("es menor de edad");
}
}//FIN DE LA FUNCIÓN