	function drawNoteLine(context, y, short)
	{
		context.beginPath();
		if(short)
			{ xStart = 180; xEnd=220;}
		else
			{ xStart = 0; xEnd=400;}
	    context.moveTo(xStart, y);
	    context.lineTo(xEnd, y);
	    context.stroke();
	}