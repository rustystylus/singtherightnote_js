function MusicPanel () {
    this.noteInput = 40;
    this.noteOutput = 40;
    this.middleC = 40;
    this.middleCYPosition = 90;
}

MusicPanel.prototype.setInputNote = function(note)
	{
		this.noteInput = note;
	}

MusicPanel.prototype.setOutputNote = function(note)
	{
		this.noteOutput = note;
	} 
MusicPanel.prototype.drawInputNote = function(context)
	{
		this.drawNote(context, 0);
	}

MusicPanel.prototype.drawOutputNote = function(context)
	{
		this.drawNote(context, 1);
	}	

MusicPanel.prototype.drawNote = function(context, outputFlag) 
	{
		//draw note
		//scale context horizontally
		

		context.beginPath();
		// create radial gradient
		//var grd = context.createRadialGradient(2, 2, 10, 150, 150, 10);
		if(outputFlag==1)
		{
			// black
			//grd.addColorStop(1, '#0000FF');
			context.strokeStyle='#0000FF';
			//.arc(x, y, radius, startAngle, endAngle)
			context.arc(55, this.middleCYPosition + ((this.noteOutput-this.middleC)* 8), 4, 0, 2*Math.PI, false);
		}
		else
		{
			// blue
			//grd.addColorStop(1, '#000000');
			context.strokeStyle='#FF0000';
			//.arc(x, y, radius, startAngle, endAngle)
			context.arc(85, this.middleCYPosition + ((this.noteInput-this.middleC)* 8), 4, 0, 2*Math.PI, false);
		}
		// white
		//grd.addColorStop(0, '#FFFFFF');

		//context.fillStyle = grd;
		context.stroke();
		//context.fill();
	}
MusicPanel.prototype.drawNoteLine = 
	function (context, y, short)
	{
		context.beginPath();
		if(short)
			{ xStart = 150; xEnd=270;}
		else
			{ xStart = 0; xEnd=400;}
	    context.moveTo(xStart, y);
	    context.lineTo(xEnd, y);
	    context.stroke();
	}