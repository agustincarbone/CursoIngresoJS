/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var importe;
	var numimporte;
	var resultado;
	var resultado2;

	importe=document.getElementById('sueldo').value;

	numimporte=parseInt(importe);

	resultado=(numimporte/100)*10;

	resultado2=numimporte+resultado;

	document.getElementById('resultado').value="el importe con aumento es "+resultado2;



	
}
