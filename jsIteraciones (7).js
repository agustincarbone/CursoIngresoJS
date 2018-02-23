function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	while(respuesta!="si")
	{
		contador=contador+1;

		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

		acumulador=acumulador+numero;

		respuesta=prompt("para continuar, escriba si");

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN