function Mostrar()

//pedir dos numeros, si son iguales concatenar, si en primero es mayor multiplicar, si el segundo es mayor restar.
{
	var primerNumero;
	var segundoNumero;
	var cálculo;

	primerNumero=prompt("ingrese primer numero");
	segundoNumero=prompt("ingrese segundo numero");

	if(primerNumero==segundoNumero)
	{
		cálculo=primerNumero+segundoNumero;
	}else
		{
			primerNumero=parseInt(primerNumero);
			segundoNumero=parseInt(segundoNumero);
			
			if(primerNumero>segundoNumero)
			{
				cálculo=primerNumero*segundoNumero;
			}else
				{
					if(primerNumero<segundoNumero)
					{
						cálculo=primerNumero-segundoNumero;
					}
				}
		
		}
	document.write(cálculo);
}
