//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var metrosDeAlambre;
	
	ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	metrosDeAlambre=(ancho*2+largo*2)*6;

	alert(metrosDeAlambre);
	
}

