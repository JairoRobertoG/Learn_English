function spellWord(miCallback) {
    var word_to_spell = document.getElementById('word_to_spell').value.trim().split("");

    for (var i = 0; i < word_to_spell.length; i++) {
    	document.getElementById("audio").src = 'audios/alphabet/' + word_to_spell[i].toUpperCase() + word_to_spell[i].toLowerCase() + '.mp3';
        var sound = document.getElementById("audio");    

        sound.play();
    }

}