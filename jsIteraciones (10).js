function Mostrar()
{

	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorDeCeros=0;
	var contadorDePares=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaEntrePositivosNegativos;
	var numero;

	while(confirm("para ver resultados, cancelar"))
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
			acumuladorPositivos+=numero;
			contadorPositivos++;
		}else
			{
				if(numero<0)
				{
					acumuladorNegativos+=numero;
					contadorNegativos++;
				}else
					{
						contadorDeCeros++;
					}
			}

		if(numero%2==0)
		{
			contadorDePares++
		}

	}
		promedioPositivos=acumuladorPositivos/contadorPositivos;
		promedioNegativos=acumuladorNegativos/contadorNegativos;

		diferenciaEntrePositivosNegativos=acumuladorPositivos-acumuladorNegativos;

		document.write("suma positivos "+acumuladorPositivos);
		document.write("<br>"+"cantidad de positivos "+contadorPositivos);
		document.write("<br>"+"promedio positivos "+promedioPositivos);
		document.write("<br>");
		document.write("<br>"+"suma negativos "+acumuladorNegativos);
		document.write("<br>"+"cantidad de negativos "+contadorNegativos);
		document.write("<br>"+"promedio negativos "+promedioNegativos);
		document.write("<br>");
		document.write("<br>"+"cantidad de ceros "+contadorDeCeros);
		document.write("<br>"+"la diferencia es "+diferenciaEntrePositivosNegativos);
		document.write("<br>");
		document.write("<br>"+"cantidad de pares "+contadorDePares);

}//FIN DE LA FUNCIÓN