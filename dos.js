function Mostrar()

	//ingresa un porcentaje de descuento y el importe mostrar el importe que se debe pagar
{
 	var importe;
 	var descuento;
	var importeFinal;

 	importe=prompt("ingrese importe");
 	importe=parseInt(importe);

 	descuento=prompt("ingrese descuento");
 	descuento=parseInt(descuento);

 	importeFinal=importe-(importe/100*descuento);

 	document.getElementById('importeFinal').value=importeFinal;
}