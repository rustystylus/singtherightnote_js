function MusicPanel () {
	this.windowLeft = 0;
	this.windowRight = 400;

	this.ledgerLineLeft = 150;
	this.ledgerLineRight = 270;

    this.middleC = 40;
    this.middleCYPosition = 90;

    this.noteInput = 40;
    this.noteOutput = 40;

    this.inputNoteColor = "#0000FF";
    this.outputNoteColor = "#000000";    

    this.rangeLow = 36;
    this.rangeHigh = 42;
    this.rangeColor = "#99FF99";

}

MusicPanel.prototype.drawPanel = 
	function (context)
	{
		context.scale(1, 1);
		context.clearRect ( 0 , 0 , 400, 400 );
		this.drawLedgerLines(context);
	/*	this.drawClefs();
		*/
		this.drawRange(context);
		/*
		this.drawInputNote();
		this.drawOutputNote();
	*/
	}

MusicPanel.prototype.setInputNote = function(note)
	{
		this.noteInput = note;
	}

MusicPanel.prototype.setOutputNote = function(note)
	{
		this.noteOutput = note;
	} 


MusicPanel.prototype.setRange = function(context,noteLow, noteHigh)
	{
		this.rangeLow = noteLow;
		this.rangeHigh = noteHigh;
		this.drawPanel(context);
	}

MusicPanel.prototype.drawInputNote = function(context)
	{
		this.drawNote(context, 0);
	}

MusicPanel.prototype.drawOutputNote = function(context)
	{
		this.drawNote(context, 1);
	}	
MusicPanel.prototype.drawLedgerLines = function(context) 
	{
		context.fillStyle = "#000000";
		//draw treble stave
		for(i=0; i<5; i++)
		{
			y = 100 + (i*16);
		    this.drawNoteLine(context, y, false)
		}
		//draw middle C
		this.drawNoteLine(context, 180, true)
	    //draw bass stave
		for(i=0; i<5; i++)
		{
			y = 196 + (i*16);
		    this.drawNoteLine(context, y, false)
		}
	}
MusicPanel.prototype.drawNote = function(context, outputFlag) 
	{
		//draw note
		//scale context horizontally
		context.scale(3, 2);
		context.beginPath();
		// create radial gradient
		//var grd = context.createRadialGradient(2, 2, 10, 150, 150, 10);
		if(outputFlag==1)
		{
			// black
			//grd.addColorStop(1, '#0000FF');
			context.strokeStyle = this.outputNoteColor;
			//.arc(x, y, radius, startAngle, endAngle)
			context.arc(55, this.middleCYPosition + ((this.noteOutput-this.middleC)* 4), 4, 0, 2*Math.PI, false);
		}
		else
		{
			// blue
			//grd.addColorStop(1, '#000000');
			context.strokeStyle = this.inputNoteColor;
			//.arc(x, y, radius, startAngle, endAngle)
			context.arc(85, this.middleCYPosition + ((this.noteInput-this.middleC)* 4), 4, 0, 2*Math.PI, false);
		}
		// white
		//grd.addColorStop(0, '#FFFFFF');

		//context.fillStyle = grd;
		context.stroke();
		//context.fill();
		context.scale(1,1);
	}

MusicPanel.prototype.drawNoteLine = 
	function (context, y, short)
	{
		//context.beginPath();
		if(short)
			{ xStart = this.ledgerLineLeft; xEnd=this.ledgerLineRight;}
		else
			{ xStart = this.windowLeft; xEnd=this.windowRight;}
	    context.moveTo(xStart, y);
	    context.lineTo(xEnd, y);
	    context.stroke();
	}

MusicPanel.prototype.drawRange = 
	function (context)
	{
		xStart = 2;
		xEnd = 4;
		context.fillStyle = this.rangeColor;
		context.fillRect(xStart, this.middleCYPosition + ((this.rangeLow-this.middleC)* 4), xEnd,  
						this.middleCYPosition + ((this.rangeHigh-this.middleC)* 4));
	}