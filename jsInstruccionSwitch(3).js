function Mostrar()
{
	//tomo la edad  
	var mes= document.getElementById('mes').value;

	switch(mes)
	{
		case"Febrero":
			{
				alert("este mes no tiene más de 29 días");
				break;
			}

		default:
			{
				alert(" este mes tiene más de 29 días");
				break;
			}
	}
	
	


}//FIN DE LA FUNCIÓN