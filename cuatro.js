function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numero1;
	var numero2;

	numeroUno=prompt("primer numero");
	numeroDos=prompt("segundo numero");

	numero1=parseInt(numeroUno);
	numero2=parseInt(numeroDos);

	if(numero1==numero2)
	{
		document.write(numero1*numero2);
	}else
	{
		if(numero1>numero2)
		{
			document.write(numero1-numero2);
		}else
		{
			document.write(numero1+numero2);
		}
	}

}
