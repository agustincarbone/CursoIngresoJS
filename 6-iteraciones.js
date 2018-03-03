//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeDeVentas;
	var maximo;
	var minimo;

	for(contador=0;contador<7;contador++)
	{
		importeDeVentas=prompt("ingrese importe");
		importeDeVentas=+importeDeVentas;
	
		while(isNaN(importeDeVentas)||importeDeVentas<=0)
		{
			importeDeVentas=prompt("ingrese importe");
			importeDeVentas=+importeDeVentas;
		}
	if(contador==0)
		{
			maximo=importeDeVentas;
			minimo=importeDeVentas;
		}else
			{
				if(maximo<importeDeVentas)
				{
					maximo=importeDeVentas;
				}else
					{
						if (minimo>importeDeVentas)
						{
							minimo=importeDeVentas;
						}
					}
			}
	}
	document.write(maximo);
	document.write("<br>"+minimo);
}

