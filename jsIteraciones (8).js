function Mostrar()
{
	var positivo=0;
	var negativo=1;
	var respuesta;
	var numero;

	while(confirm("para saber el resultado, cancelar, de lo contrario, precione aceptar"))
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

		while(isNaN(numero))
			{
				numero=prompt("ingrese un numero");
				numero=parseInt(numero);
			}

			if(numero>0)
			{
				positivo=positivo+numero;
			}else
			{
				if(numero<0)
				{
					negativo=negativo*numero;
				}
			}
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN