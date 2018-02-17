function Mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes)
	{
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
			{
				alert("tiene 30 días");
				break;
			}
		case"Febrero":
			{
				alert("tiene 29 días");
				break;
			}
		default:
			{
				alert("tiene 31 días");
				break;
			}




	}	

	
	



}//FIN DE LA FUNCIÓN