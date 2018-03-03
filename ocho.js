function Mostrar()
//pedir 3 datos hasta que el cliente quiera: nombre del animal, peso del animal y temperatura del habitat del animal ( -40 a 40)
// informar nombre de animal más pesado, nombre del animal de la temperatura mas bajas, cantidad de temperaturas pares y 
//el promedio del peso de todos los animales, temperatura maxima y minima.
{
	var nombreDelAnimal;
	var pesoDelAnimal;
	var temperaturaDelHabitat;
	var contandorTemperaturasPares=0;
	var contador=0;
	var pesoDelAnimal2;
	var temperaturaDelHabitat2;
	var nombreDelMasPesado;
	var nombreDelAnimalDelHabitatMasFrio;
	var cantidadDeAnimales=0;
	var acumuladorDePeso=0;
	var promedioPeso;
	var temperaturaMaxima;
	var temperaturaMinima;

	while(confirm("cancelar para dejar de ingresar datos"))
	{
		cantidadDeAnimales++;
		nombreDelAnimal=prompt("ingrese nombre");
		pesoDelAnimal2=prompt("ingrese peso");
		temperaturaDelHabitat2=prompt("ingrese temperatura");

		pesoDelAnimal2=parseInt(pesoDelAnimal2);
		temperaturaDelHabitat2=parseInt(temperaturaDelHabitat2);

		while(isNaN(pesoDelAnimal2) || pesoDelAnimal2<0)
		{
			pesoDelAnimal2=prompt("ingrese peso");
			pesoDelAnimal2=parseInt(pesoDelAnimal2);
		}

		while(isNaN(temperaturaDelHabitat2)||temperaturaDelHabitat2>41||temperaturaDelHabitat2<-41)
		
		{
			temperaturaDelHabitat2=prompt("ingrese un temperatura");
			temperaturaDelHabitat2=parseInt(temperaturaDelHabitat2);
		}

		
	acumuladorDePeso=acumuladorDePeso+pesoDelAnimal2;

	if(contador==0)
	{
		nombreDelAnimal=nombreDelAnimal;
		pesoDelAnimal=pesoDelAnimal2;
		temperaturaDelHabitat=temperaturaDelHabitat2;
		
		contador++

	}else
		{
			if(pesoDelAnimal<pesoDelAnimal2)
			{
				pesoDelAnimal=pesoDelAnimal2;
				nombreDelMasPesado=nombreDelAnimal;
			}
			
			if (temperaturaDelHabitat>temperaturaDelHabitat2)
			{
				temperaturaDelHabitat=temperaturaDelHabitat2;
				nombreDelAnimalDelHabitatMasFrio=nombreDelAnimal;
				temperaturaMinima=temperaturaDelHabitat2;

			}else
			{
				if(temperaturaDelHabitat<temperaturaDelHabitat2)
				{
					temperaturaMaxima=temperaturaDelHabitat2;
				}
			}		
			if(temperaturaDelHabitat%2==0)
				{
					contandorTemperaturasPares++;
				}
		}
	
	}

	promedioPeso=acumuladorDePeso/cantidadDeAnimales;

	document.write("nombre mas pesado  "+nombreDelMasPesado);
	document.write("<br>"+"nombre mas frio "+nombreDelAnimalDelHabitatMasFrio);
	document.write("<br>"+"temperaturas pares "+contandorTemperaturasPares);
	document.write("<br>"+"peso promedio "+promedioPeso);
	document.write("<br>"+"temperaturaMaxima "+temperaturaMaxima);
	document.write("<br>"+"temperaturaMinima "+temperaturaMinima);

}
