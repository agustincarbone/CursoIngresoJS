function Mostrar()
{

	var sexo;
	sexo=prompt("ingrese f ó m");

	while(sexo!='f' && sexo!='m')
	{
		sexo=prompt("ingrese f ó m");
	}

	if(sexo=='m')
	{
		document.getElementById('Sexo').value="masculino";
	}else
		{
			document.getElementById('Sexo').value="femenino";
		}
	



}//FIN DE LA FUNCIÓN