/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a;
	var b;
	var suma;

	a=document.getElementById('numeroUno').value;
	b=document.getElementById('numeroDos').value;

	var c;
	var d;

	c=parseInt(a);
	d=parseInt(b);

	suma=c+d

	alert("la suma es "+suma)

}

function restar()
{
	var a;
	var b;
	var resta;
	var c;
	var d;

	a=document.getElementById('numeroUno').value;
	b=document.getElementById('numeroDos').value;

	c=parseInt(a);
	d=parseInt(b);

	resta=c-d;

	alert("el resultado es "+resta);




}

function multiplicar()
{ 
	var a;
	var b;
	var multiplicar;
	var c;
	var d;

	a=document.getElementById('numeroUno').value;
	b=document.getElementById('numeroDos').value;

	c=parseInt(a);
	d=parseInt(b);

	multiplicar=c*d;

	alert("el resultado es "+multiplicar);
		
}

function dividir()
{
	var a;
	var b;
	var division;
	var c;
	var d;

	a=document.getElementById('numeroUno').value;
	b=document.getElementById('numeroDos').value;

	c=parseInt(a);
	d=parseInt(b);

	division=c/d;

	alert("el resultado es "+division);
}

