function spellWord() {
    var word_to_spell = document.getElementById('word_to_spell').value.trim().split("");

    for (var i = 0; i < word_to_spell.length; i++) {
    	document.getElementById("audio").src = 'audios/alphabet/' + word_to_spell[i].toUpperCase() + word_to_spell[i].toLowerCase() + '.mp3';
        var sound = document.getElementById("verb_audio");

        if (i > 0){
        	try {
	            sound.load();
	            sound.play();
       		} catch (e) {
            	alert('Ocurrio un error al reproducir el audio');
        	}
        }
        
        
        (function(){

          	setTimeout(myTimer, 2000);

     	})();

    }

}

function myTimer() {
    var sound = document.getElementById("verb_audio");

    try {
            sound.load();
            sound.play();
        } catch (e) {
            alert('Ocurrio un error al reproducir el audio');
        }
}