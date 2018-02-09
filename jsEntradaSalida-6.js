/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var suma;
	var num1;
	var num2;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;

	num1=parseInt(numero1);
	num2=parseInt(numero2);

	suma=num1+num2;

	alert("la suma es "+suma);
}

