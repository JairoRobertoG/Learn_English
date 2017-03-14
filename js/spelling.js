function reproducir() {
    var palabra = document.getElementById("word_to_spell");
    if(palabra.value.length ==0){
        alert("Nada que deletrear");
        return;
    }
    word_to_spell = document.getElementById('word_to_spell').value.trim().split("");

    function spellConTime(i) {
        if (i >= palabra.value.length) {
            return;
        }
        var dummy = setTimeout(function () {
            playSound('audios/alphabet/' + word_to_spell[i].toUpperCase() + word_to_spell[i].toLowerCase() + '.mp3');
            i++;
            spellConTime(i);
        }, 2500);
    }
    spellConTime(0);
}

function playSound(src) {
    document.getElementById("audio").src = src;
        var sound = document.getElementById("audio");    

        sound.play();
}