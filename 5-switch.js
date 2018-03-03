//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;

	mes=prompt("ingrese un mes");
	mes=mes.toLowerCase();

	switch(mes)
		{
			case"enero":
			case"febrero":
			{
				alert("verano");
				break;
			}
			default:
			{
				alert("extraño el verano");
				break;		
			}
		}
}

