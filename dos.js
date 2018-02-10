function Mostrar()
{
	var importe;
	var numimporte;
	var importefinal;

	var importe=prompt("ingrese importe");

	numimporte= parseInt(importe);

	importefinal=(numimporte/100*21)+numimporte;

	document.getElementById('importeFinal').value=importefinal;
}
