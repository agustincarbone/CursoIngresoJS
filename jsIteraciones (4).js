function Mostrar()
{

	var numero;
	numero=prompt("ingrese un número entre 0 y 9");

	while(numero>9 || numero<0)
	{
		numero=prompt("ingrese un número entre 0 y 9");
	}

	alert("bienvenido");

}//FIN DE LA FUNCIÓN