$(document).ready(function(e) {
    hideSpinner();
    setFocusWordToSpell();
    
    $('#word_to_spell').on('keypress', function (e) {
         if(e.which === 13){
            spellingWord();
         }
    });
});

function spellingWord() {
    showSpinner();
    var word = $('#word_to_spell').val();

    if (validateWord(word.trim())) {
        document.getElementById("audio").src = "audio.php?word="+word;
        var sound = document.getElementById("audio"); 

        document.querySelector("#audio").addEventListener("ended", hideSpinner, false);

        sound.play();    
    }
}

function validateWord(word) {
    if(word.length == 0) {
        alert("You must write a word");
        setFocusWordToSpell();
        hideSpinner();

        return false;
    }

    var regex = /^[a-zA-Z]*$/;

    if(!word.search(regex))
        return true;
    else {
        alert('you must write word only with letters from A to Z and without space');
        setFocusWordToSpell();    
        hideSpinner();
        return false;
    }
        
}

function showSpinner() {
    $('#fidget-spinner').show();
}

function hideSpinner() {
    $('#fidget-spinner').hide();
}

function setFocusWordToSpell() {
    $('#word_to_spell').val('');
    $('#word_to_spell').focus();
}