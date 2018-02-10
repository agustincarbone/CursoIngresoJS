function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var metrosalamnbre;
	var numlargo;
	var numancho;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	numlargo=parseInt(largo);
	numancho=parseInt(ancho);

	perimetro=numlargo*numancho;

	metrosalamnbre=perimetro*3;

	alert("se necesitan "+metrosalamnbre);

}
