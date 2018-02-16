function Mostrar()
{
	//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if (edad<13)
	{
		alert("niño");
	}
	if(edad>12 && edad<18)
		{
			alert("adolecente");
		}
	if(edad>17)
	{
		alert("mayor");
	}
}//testear siempre todas las variables

//FIN DE LA FUNCIÓN