function Mostrar()
{

	var contador=0;
	// declarar variables
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;


	while(respuesta!='no')
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(isNaN(numero))

		{
			alert("no es un numero")
			numero=prompt("ingrese numero");
			numero=parseInt(numero);
		}	
		
		if(contador==0)
		{
			contador++;
			maximo=numero;
			minimo=numero;
		}else
		{
			if(maximo<numero)
			{
				maximo=numero;
			}else
			{
				if(minimo>numero)
				{
					min=numero;
				}
			}


		}
		respuesta=prompt("si quiere terminar, escriba 'no' ")

	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN