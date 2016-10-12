var verbs = [
                { id: 1, spanish: 'Correr', base_form: 'Run', simple_past: 'Ran', past_participle: 'Run' },
                { id: 2, spanish: 'Escribir', base_form: 'Write', simple_past: 'Wrote', past_participle: 'Written' },
                { id: 3, spanish: 'Obtener', base_form: 'Get', simple_past: 'Got', past_participle: 'Gotten' },
                { id: 4, spanish: 'Ir', base_form: 'Go', simple_past: 'Went', past_participle: 'Gone' },
                { id: 5, spanish: 'Tener', base_form: 'Have', simple_past: 'Had', past_participle: 'Had' },
                { id: 6, spanish: 'Tomar', base_form: 'Take', simple_past: 'Took', past_participle: 'Taken' },
                { id: 7, spanish: 'Comer', base_form: 'Eat', simple_past: 'Ate', past_participle: 'Eaten' },
                { id: 8, spanish: 'Hacer', base_form: 'Do', simple_past: 'Did', past_participle: 'Done' },
                { id: 9, spanish: 'Conducir', base_form: 'Drive', simple_past: 'Drove', past_participle: 'Driven' },
                { id: 10, spanish: 'Montar/Andar en', base_form: 'Ride', simple_past: 'Rode', past_participle: 'Ridden' },
                { id: 11, spanish: 'Leer', base_form: 'Read', simple_past: 'Read', past_participle: 'Read' },
                { id: 12, spanish: 'Construir', base_form: 'Build', simple_past: 'Built', past_participle: 'Built' },
                { id: 13, spanish: 'Nadar', base_form: 'Swim', simple_past: 'Swam', past_participle: 'Swum' },
                { id: 14, spanish: 'Hablar', base_form: 'Speak', simple_past: 'Spoke', past_participle: 'Spoken' },
                { id: 14, spanish: 'Venir', base_form: 'Come', simple_past: 'Came', past_participle: 'Come' },
                { id: 15, spanish: 'Hacer', base_form: 'Make', simple_past: 'Made', past_participle: 'Made' },
                { id: 16, spanish: 'Beber', base_form: 'Drink', simple_past: 'Drank', past_participle: 'Drunk' },
                { id: 17, spanish: 'Comprar', base_form: 'Buy', simple_past: 'Bought', past_participle: 'Bought' },
                { id: 18, spanish: 'Encontrar', base_form: 'Find', simple_past: 'Found', past_participle: 'Found' },
                { id: 19, spanish: 'Perder', base_form: 'Lose', simple_past: 'Lost', past_participle: 'Lost' },
                { id: 20, spanish: 'Dar', base_form: 'Give', simple_past: 'Gave', past_participle: 'Given' },
                { id: 21, spanish: 'Ser, Estar', base_form: 'Be', simple_past: 'Was, Were', past_participle: 'Been' },
                { id: 22, spanish: 'Romper', base_form: 'Break', simple_past: 'Broke', past_participle: 'Broken' },
                { id: 23, spanish: 'Caer', base_form: 'Fall', simple_past: 'Fell', past_participle: 'Fallen' },
                { id: 26, spanish: 'Trabajar', base_form: 'Work', simple_past: 'Worked', past_participle: 'Worked' },
                { id: 27, spanish: 'Revisar/Checar', base_form: 'Check', simple_past: 'Checked', past_participle: 'Checked' },
                { id: 28, spanish: 'Ayudar', base_form: 'Help', simple_past: 'Helped', past_participle: 'Helped' },
                { id: 29, spanish: 'Cocinar', base_form: 'Cook', simple_past: 'Cooked', past_participle: 'Cooked' },
                { id: 30, spanish: 'Ver/Observar/Vigilar', base_form: 'Watch', simple_past: 'Watched', past_participle: 'Watched' },
                { id: 31, spanish: 'Caminar', base_form: 'Walk', simple_past: 'Walked', past_participle: 'Walked' },
                { id: 32, spanish: 'Jugar', base_form: 'Play', simple_past: 'Played', past_participle: 'Played' },
                { id: 33, spanish: 'Escuchar', base_form: 'Listen', simple_past: 'Listened', past_participle: 'Listened' }
];

function clear() {
    document.getElementById('simple_past_icon_success').style.visibility = "hidden";
    document.getElementById('simple_past_icon_error').style.visibility = "hidden";
    document.getElementById("simple_past_div").className = "form-group col-sm-4";

    document.getElementById('past_participle_icon_success').style.visibility = "hidden";
    document.getElementById('past_participle_icon_error').style.visibility = "hidden";
    document.getElementById("past_participle_div").className = "form-group col-sm-4";

    document.getElementById('spanish').innerText = "";
}

clear();

var select_list = document.getElementById('verb_list');

for (var i = 0; i < verbs.length; i++) {
    var verb = verbs[i];
    var element = document.createElement('option');
    element.value = verb.base_form;
    element.textContent = verb.base_form;
    select_list.appendChild(element);
}

window.onload = function () {
    select_list.onchange = function () {
        clear();
        document.getElementById("simple_past").value = "";
        past_participle_verb = document.getElementById("past_participle").value = "";
        document.getElementById("simple_past").style.border = "";
        document.getElementById("past_participle").style.border = "";

        var verb_name = this.value;

        if(verb_name != "")
            document.getElementById('image-verb').src = 'images/' + verb_name.toLowerCase() + '.png';
        else
            document.getElementById('image-verb').src = 'images/white.jpg';

        var spanish_verb = verbs.find(x => x.base_form == verb_name).spanish;
        console.log(spanish_verb);
        document.getElementById('spanish').innerText = spanish_verb;
    }
}

function search() {
    var simple_past_verb = document.getElementById("simple_past").value;
    var past_participle_verb = document.getElementById("past_participle").value;
    var verb = verbs.find(x => x.base_form == select_list.value);

    clear();

    if (simple_past_verb != "") {
        if (verb.simple_past.toLowerCase() == simple_past_verb.toLowerCase())
            validationColors('simple_past_div', 'simple_past_icon_success', 'success');
        else
            validationColors('simple_past_div', 'simple_past_icon_error', 'error');
    }
    else
        alert('You must write a simple past verb!');

    if (past_participle_verb != "") {
        if (verb.past_participle.toLowerCase() == past_participle_verb.toLowerCase())
            validationColors('past_participle_div', 'past_participle_icon_success', 'success');
        else
            validationColors('past_participle_div', 'past_participle_icon_error', 'error');
    }
    else
        alert('You must write a past participle verb!');
}

function validationColors(div_id, icon_id, success) {
    document.getElementById(div_id).className += ' has-' + success + ' has-feedback';
    document.getElementById(icon_id).style.visibility = "visible";
}
        