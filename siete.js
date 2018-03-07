function Mostrar()
{
	var nota;
	var promedioDeNotas=0;
	var notaMasBaja;
	var sexo;
	var cantidadDeVarones=0;

	for(alumno=1;alumno<101;alumno++)
	{
		sexo=prompt("ingrese f para femenino o m para masculino");
		sexo=sexo.toLowerCase();
		nota=prompt("ingrese nota");
		nota=parseInt(nota);

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese f para femenino o m para masculino");
			sexo=sexo.toLowerCase();
		}

		while(isNaN(nota) || nota<1 || nota>10)
		{
			nota=prompt("ingrese nota valida");
			nota=parseInt(nota);
		}
		if(alumno==1)
			{
				notaMasBaja=nota;
			}else
				{
					if(notaMasBaja>nota)
					{
						notaMasBaja=nota;
					}
				}
		if(sexo=="m" && nota>5)
		{
			cantidadDeVarones++;
		}
	promedioDeNotas=promedioDeNotas+nota;
	}
	promedioDeNotas=promedioDeNotas/100;
	
	alert("promedio notas "+promedioDeNotas);	
	alert("nota mas baja "+notaMasBaja);
	alert("cantidad de varones con nota mayor a 6 "+cantidadDeVarones);
}
