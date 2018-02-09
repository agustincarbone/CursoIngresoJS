/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var numimporte;
	var resultado;
	var resultado2;

	importe=document.getElementById('importe').value;

	numimporte=parseInt(importe);

	resultado=numimporte/100*25;

	resultado2=importe-resultado;

	document.getElementById('resultado').value=resultado2;


}
