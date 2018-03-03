//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese un numero");
	numeroDos=prompt("ingrese otro numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}else
		{
			if(numeroUno>numeroDos)
			{
				resultado=numeroUno-numeroDos;
			}else
				{
					if (numeroUno<numeroDos)
					{
						resultado=numeroUno+numeroDos;
					}
				}
		}
	document.write("el resultado es "+resultado);
}

