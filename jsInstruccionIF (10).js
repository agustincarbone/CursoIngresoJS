function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaDelExamen;

	notaDelExamen=Math.floor(Math.random() * 10) + 1;

	if(notaDelExamen>8)
	{
		alert("excelente "+notaDelExamen);
	}else
	
	{
		if(notaDelExamen > 3)  //if(notaDelExamen < 9 && notaDelExamen > 3) innecesario, solo ocupa lugar
		{
			alert("aprobó "+notaDelExamen);
		}else
		
		{
			
			alert("suerte la próxima "+notaDelExamen);
			
		}
	}

}//FIN DE LA FUNCIÓN