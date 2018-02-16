function Mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value; 

	if(edad<18 && estadoCivil!='Soltero')
	{
	
	}else 
	{
		if(edad>17 && estadoCivil=='Soltero')
		{
		alert("es mayor y esta soltero");
		}
	}

}//FIN DE LA FUNCIÓN