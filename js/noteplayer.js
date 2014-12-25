function NotePlayer () 
{

    this.noteToPlay = 40;
    this.instrument = 0;
    this.chord = false;
    this.noteDuration = 500; //ms
}

NotePlayer.prototype.setNote = function(note)
    {
        this.noteToPlay = note;
    }

NotePlayer.prototype.playNote = function()
    {
        //play note on synth    
       /* oscillator = this.audioContext.createOscillator();
        oscillator.frequency.value = 200;
        oscillator.connect(this.audioContext.destination);
        oscillator.start(0);
        */
       alert('PlayNote');
    }

NotePlayer.prototype.setInstrument = function(instrument)
    {
        //set instrument piano=0, cello=1, flute=2, organ=3(chords)
        if(instrument >= 0 && instrument<=5)
            this.instrument = instrument;
    }

NotePlayer.prototype.setDuration = function(duration)
    {
        //set duration of note in milliseconds
        if(duration > 10 && duration<=5000)
            this.duration = duration;
    }