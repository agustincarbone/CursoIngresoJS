function Mostrar()
//aparte de pedir la base por el cuadro de texto, pedir la altura de un triángulo equilátero. 
//informar perimetro y superficie.
	
{
	var base;
	var altura;
	var perimetro;
	var superficie;

	base=document.getElementById('laBase').value;
	altura=prompt("ingrese la altura");

	base=parseInt(base);
	altura=parseInt(altura);

	perimetro=base*3;
	superficie=base*(altura/2);

	alert("el perimetro es "+perimetro);
	alert("la superficie es "+superficie);


}
