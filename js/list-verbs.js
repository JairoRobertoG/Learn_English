var verbs = [
                //irregular verbs
                { id: 1, spanish: 'Correr', base_form: 'Run', simple_past: 'Ran', past_participle: 'Run', irregular: true, lesson: 1 },
                { id: 2, spanish: 'Escribir', base_form: 'Write', simple_past: 'Wrote', past_participle: 'Written', irregular: true, lesson: 1 },
                { id: 3, spanish: 'Obtener', base_form: 'Get', simple_past: 'Got', past_participle: 'Gotten', irregular: true, lesson: 1 },
                { id: 4, spanish: 'Ir', base_form: 'Go', simple_past: 'Went', past_participle: 'Gone', irregular: true, lesson: 1 },
                { id: 5, spanish: 'Tener', base_form: 'Have', simple_past: 'Had', past_participle: 'Had', irregular: true, lesson: 1 },
                { id: 6, spanish: 'Tomar', base_form: 'Take', simple_past: 'Took', past_participle: 'Taken', irregular: true, lesson: 1 },
                { id: 7, spanish: 'Comer', base_form: 'Eat', simple_past: 'Ate', past_participle: 'Eaten', irregular: true, lesson: 1 },
                { id: 8, spanish: 'Hacer', base_form: 'Do', simple_past: 'Did', past_participle: 'Done', irregular: true, lesson: 1 },
                { id: 9, spanish: 'Conducir', base_form: 'Drive', simple_past: 'Drove', past_participle: 'Driven', irregular: true, lesson: 1 },
                { id: 10, spanish: 'Montar/Andar en', base_form: 'Ride', simple_past: 'Rode', past_participle: 'Ridden', irregular: true, lesson: 1 },
                { id: 11, spanish: 'Leer', base_form: 'Read', simple_past: 'Read', past_participle: 'Read', irregular: true, lesson: 1 },
                { id: 12, spanish: 'Construir', base_form: 'Build', simple_past: 'Built', past_participle: 'Built', irregular: true, lesson: 1 },
                { id: 13, spanish: 'Nadar', base_form: 'Swim', simple_past: 'Swam', past_participle: 'Swum', irregular: true, lesson: 1 },
                { id: 14, spanish: 'Hablar', base_form: 'Speak', simple_past: 'Spoke', past_participle: 'Spoken', irregular: true, lesson: 1 },
                { id: 14, spanish: 'Venir', base_form: 'Come', simple_past: 'Came', past_participle: 'Come', irregular: true, lesson: 1 },
                { id: 15, spanish: 'Hacer', base_form: 'Make', simple_past: 'Made', past_participle: 'Made', irregular: true, lesson: 1 },
                { id: 16, spanish: 'Beber', base_form: 'Drink', simple_past: 'Drank', past_participle: 'Drunk', irregular: true, lesson: 1 },
                { id: 17, spanish: 'Comprar', base_form: 'Buy', simple_past: 'Bought', past_participle: 'Bought', irregular: true, lesson: 1 },
                { id: 18, spanish: 'Encontrar', base_form: 'Find', simple_past: 'Found', past_participle: 'Found', irregular: true, lesson: 1 },
                { id: 19, spanish: 'Perder', base_form: 'Lose', simple_past: 'Lost', past_participle: 'Lost', irregular: true, lesson: 1 },
                { id: 20, spanish: 'Dar', base_form: 'Give', simple_past: 'Gave', past_participle: 'Given', irregular: true, lesson: 1 },
                { id: 21, spanish: 'Ser, Estar', base_form: 'Be', simple_past: 'Was, Were', past_participle: 'Been', irregular: true, lesson: 1 },
                { id: 22, spanish: 'Romper', base_form: 'Break', simple_past: 'Broke', past_participle: 'Broken', irregular: true, lesson: 1 },
                { id: 23, spanish: 'Caer', base_form: 'Fall', simple_past: 'Fell', past_participle: 'Fallen', irregular: true, lesson: 1 },
                //regular verbs
                { id: 26, spanish: 'Trabajar', base_form: 'Work', simple_past: 'Worked', past_participle: 'Worked', irregular: false, lesson: 1 },
                { id: 27, spanish: 'Revisar/Checar', base_form: 'Check', simple_past: 'Checked', past_participle: 'Checked', irregular: false, lesson: 1 },
                { id: 28, spanish: 'Ayudar', base_form: 'Help', simple_past: 'Helped', past_participle: 'Helped', irregular: false, lesson: 1 },
                { id: 29, spanish: 'Cocinar', base_form: 'Cook', simple_past: 'Cooked', past_participle: 'Cooked', irregular: false, lesson: 1 },
                { id: 30, spanish: 'Ver/Observar/Vigilar', base_form: 'Watch', simple_past: 'Watched', past_participle: 'Watched', irregular: false, lesson: 1 },
                { id: 31, spanish: 'Caminar', base_form: 'Walk', simple_past: 'Walked', past_participle: 'Walked', irregular: false, lesson: 1 },
                { id: 32, spanish: 'Jugar', base_form: 'Play', simple_past: 'Played', past_participle: 'Played', irregular: false, lesson: 1 },
                { id: 33, spanish: 'Escuchar', base_form: 'Listen', simple_past: 'Listened', past_participle: 'Listened', irregular: false, lesson: 1 },
                //lesson 2
                { id: 34, spanish: 'Traer', base_form: 'Bring', simple_past: 'Brought', past_participle: 'Brought', irregular: true, lesson: 2 },
                { id: 35, spanish: 'Atrapar', base_form: 'Catch', simple_past: 'Caught', past_participle: 'Caught', irregular: true, lesson: 2 },
                { id: 36, spanish: 'So\u00f1ar', base_form: 'Dream', simple_past: 'Dreamt', past_participle: 'Dreamt', irregular: true, lesson: 2 },
                { id: 37, spanish: 'Herir, Lastimar, Doler', base_form: 'Hurt', simple_past: 'Hurt', past_participle: 'Hurt', irregular: true, lesson: 2 },
                { id: 38, spanish: 'Poner', base_form: 'Put', simple_past: 'Put', past_participle: 'Put', irregular: true, lesson: 2 },
                { id: 39, spanish: 'Pensar', base_form: 'Think', simple_past: 'Thought', past_participle: 'Thought', irregular: true, lesson: 2 },
                { id: 40, spanish: 'Contar/Decirle a', base_form: 'Tell', simple_past: 'Told', past_participle: 'Told', irregular: true, lesson: 2 },
                { id: 41, spanish: 'Decir', base_form: 'Say', simple_past: 'Said', past_participle: 'Said', irregular: true, lesson: 2 },
                { id: 42, spanish: 'Comenzar/Empezar', base_form: 'Begin', simple_past: 'Began', past_participle: 'Begun', irregular: true, lesson: 2 },
                { id: 43, spanish: 'Llegar a ser/Convertirse en', base_form: 'Become', simple_past: 'Became', past_participle: 'Became', irregular: true, lesson: 2 },
                { id: 44, spanish: 'Escoger/Elegir', base_form: 'Choose', simple_past: 'Chose', past_participle: 'Chosen', irregular: true, lesson: 2 },
                { id: 45, spanish: 'Cortar', base_form: 'Cut', simple_past: 'Cut', past_participle: 'Cut', irregular: true, lesson: 2 },
                { id: 46, spanish: 'Sentir(se)', base_form: 'Feel', simple_past: 'Felt', past_participle: 'Felt', irregular: true, lesson: 2 },
                { id: 47, spanish: 'Volar', base_form: 'Fly', simple_past: 'Flew', past_participle: 'Flown', irregular: true, lesson: 2 },
                { id: 48, spanish: 'Olvidar', base_form: 'Forget', simple_past: 'Forgot', past_participle: 'Forgotten', irregular: true, lesson: 2 },
                { id: 49, spanish: 'O\u00edr', base_form: 'Hear', simple_past: 'Heard', past_participle: 'Heard', irregular: true, lesson: 2 },
                { id: 50, spanish: 'Golpear', base_form: 'Hit', simple_past: 'Hit', past_participle: 'Hit', irregular: true, lesson: 2 },
                { id: 51, spanish: 'Sostener/Agarrar/Esperar', base_form: 'Hold', simple_past: 'Held', past_participle: 'Held', irregular: true, lesson: 2 },
                { id: 52, spanish: 'Guardar/Mantener/Conservar', base_form: 'Keep', simple_past: 'Kept', past_participle: 'Kept', irregular: true, lesson: 2 },
                { id: 53, spanish: 'Conocer(1a vez)/Verse con/Reunirse con', base_form: 'Meet', simple_past: 'Met', past_participle: 'Met', irregular: true, lesson: 2 },
                { id: 54, spanish: 'Irse de/Dejar/Abandonar', base_form: 'Leave', simple_past: 'Left', past_participle: 'Left', irregular: true, lesson: 2 },
                { id: 55, spanish: 'Saber/Conocer', base_form: 'Know', simple_past: 'Knew', past_participle: 'Known', irregular: true, lesson: 2 },
                { id: 56, spanish: 'Prestar', base_form: 'Lend', simple_past: 'Lent', past_participle: 'Lent', irregular: true, lesson: 2 },
                { id: 57, spanish: 'Pagar', base_form: 'Pay', simple_past: 'Paid', past_participle: 'Paid', irregular: true, lesson: 2 },
                { id: 58, spanish: 'Arreglar', base_form: 'Fix', simple_past: 'Fixed', past_participle: 'Fixed', irregular: false, lesson: 2 },
                { id: 59, spanish: 'Querer', base_form: 'Want', simple_past: 'Wanted', past_participle: 'Wanted', irregular: false, lesson: 2 },
                { id: 60, spanish: 'Gustar', base_form: 'Like', simple_past: 'Liked', past_participle: 'Liked', irregular: false, lesson: 2 },
                { id: 61, spanish: 'Odiar', base_form: 'Hate', simple_past: 'Hated', past_participle: 'Hated', irregular: false, lesson: 2 },
                { id: 62, spanish: 'Amar', base_form: 'Love', simple_past: 'Loved', past_participle: 'Loved', irregular: false, lesson: 2 },
                { id: 63, spanish: 'Usar/Utilizar', base_form: 'Use', simple_past: 'Used', past_participle: 'Used', irregular: false, lesson: 2 },
                { id: 64, spanish: 'Necesitar', base_form: 'Need', simple_past: 'Needed', past_participle: 'Needed', irregular: false, lesson: 2 },
                { id: 65, spanish: 'Llamar', base_form: 'Call', simple_past: 'Called', past_participle: 'Called', irregular: false, lesson: 2 }
];

var select_list = document.getElementById('verb_list');

if (select_list != undefined) {
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
}

function selectedLessons(combo_box) {
    var verb_list = document.getElementById("verb_list");
    if (combo_box.value != '0') {
        if (verb_list != undefined) {
            cleanVerbList(verb_list);
        }
    }
    else {
        cleanVerbList(verb_list);
        document.getElementById('image-verb').src = 'images/verbs/white.jpg';
    }
    
    for (var i = 0; i < verbs.length; i++) {
        if (verbs[i].lesson == combo_box.value) {
            var verb = verbs[i];

            var element = document.createElement('option');
            element.value = verb.base_form;
            element.textContent = verb.base_form;
            select_list.appendChild(element);
        }
    }
}

function cleanVerbList(verb_list) {
    verb_list.length = 0;
    var element = document.createElement('option');
    element.value = '';
    element.textContent = '--Select the verb--';
    select_list.appendChild(element);
}

window.onload = function () {

    select_lesson.onchange = function () {
        document.getElementById('image-verb').src = 'images/verbs/white.jpg';
        clear();
        selectedLessons(this);
    }

    select_list.onchange = function () {
        clear();
        document.getElementById("simple_past").value = "";
        past_participle_verb = document.getElementById("past_participle").value = "";
        document.getElementById("simple_past").style.border = "";
        document.getElementById("past_participle").style.border = "";

        var verb_name = this.value;

        if(verb_name != "")
            document.getElementById('image-verb').src = 'images/verbs/' + verb_name.toLowerCase() + '_opt.jpg';
        else
            document.getElementById('image-verb').src = 'images/verbs/white.jpg';

        var spanish_verb = verbs.find(x => x.base_form == verb_name).spanish;
        document.getElementById('spanish').innerText = spanish_verb;
    }
}

function search() {
    var simple_past_verb = document.getElementById("simple_past").value;
    var past_participle_verb = document.getElementById("past_participle").value;
    var verb = verbs.find(x => x.base_form == select_list.value);
    clear();

    if (simple_past_verb != "") {
        if (verb.simple_past.toLowerCase().trim() == simple_past_verb.toLowerCase().trim())
            validationColors('simple_past_div', 'simple_past_icon_success', 'success');
        else
            validationColors('simple_past_div', 'simple_past_icon_error', 'error');
    }
    else
        alert('You must write a simple past verb!');

    if (past_participle_verb != "") {
        if (verb.past_participle.toLowerCase().trim() == past_participle_verb.toLowerCase().trim())
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

function playAudio(verb_id) {
    var select_list = document.getElementById('verb_list');
    if (select_list.value != "") {
        var irregular_verb = verbs.find(x => x.base_form == select_list.value).irregular;

        if (!irregular_verb && verb_id != 'base_form_audio')
            document.getElementById("audio").src = 'audios/regular_verb_audio/' + select_list.value.toLowerCase() + 'ed' + '.mp3';
        else
            document.getElementById("audio").src = 'audios/' + verb_id + '/' + select_list.value.toLowerCase() + '.mp3';

        var sound = document.getElementById("verb_audio");

        try {
            sound.load();
            sound.play();
        } catch (e) {
            alert('Ocurrio un error al reproducir el audio');
        }
    }
    else
        alert('select a verb!')
    
}

tbody = document.getElementById('match-data');
if (tbody != undefined) {
    var tr, td;
    for (var i = 0; i < verbs.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);

        td = tr.insertCell(tr.cells.length);
        td.innerHTML = verbs[i].base_form;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = verbs[i].simple_past;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = verbs[i].past_participle;

        td = tr.insertCell(tr.cells.length);
        td.innerHTML = verbs[i].spanish;

        td = tr.insertCell(tr.cells.length);
        if (verbs[i].irregular)
            td.innerHTML = 'Irregular';
        else
            td.innerHTML = 'Regular';
    }

}