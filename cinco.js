function Mostrar()
//ingresar 3 numeros y mostrar el mayor:
{
	var primerNumero;
	var segundoNumero;
	var tercerNumero;
	var	mayor;

	primerNumero=prompt("ingrese un numero");
	segundoNumero=prompt(" ingrese otro numero");
	tercerNumero=prompt("ingrese un tercer numero");

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
	tercerNumero=parseInt(tercerNumero);

	if(primerNumero>segundoNumero && primerNumero>tercerNumero)
	{
		mayor=primerNumero;
	}else
	{
		if(segundoNumero>primerNumero && segundoNumero>tercerNumero)
		{
			mayor=segundoNumero;
		}else
		{
			mayor=tercerNumero;
		}
	}
	alert(mayor);
}
