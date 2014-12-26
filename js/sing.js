//singtherightnote.js
function Sing()
{
	this.outputNote = 40;

	this.musicPanel = new MusicPanel();
	this.notePlayer = new NotePlayer();

	this.musicPanel.setOutputNote(this.outputNote);
	this.notePlayer.setOutputNote(this.outputNote);
//	this.noteListener = new NoteListener();

}

Sing.prototype.setOutputNote = function(note)
	{
		this.outputNote = note;
	}

Sing.prototype.getOutputNote = function()
	{
		return this.outputNote;
	}

Sing.prototype.setOutputNote = function(note)
	{
		this.outputNote++;
		if(this.outputNote >55)
			this.outputNote = 38;
		this.musicPanel.setOutputNote(this.outputNote);
	}
Sing.prototype.playNote = function(note)
	{
		this.notePlayer.playNote();
	}
Sing.prototype.nextNote = function()
	{
		this.outputNote++;
		if(this.outputNote >55)
			this.outputNote = 38;
		this.musicPanel.setOutputNote(this.outputNote);
		this.notePlayer.setOutputNote(this.outputNote);

	}