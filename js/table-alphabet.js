var albhabet = [
                { letter: "Aa", letter_name: "ei", phonetic_albhabet: "Alpha" },
                { letter: "Bb", letter_name: "bi", phonetic_albhabet: "Bravo" },
                { letter: "Cc", letter_name: "si", phonetic_albhabet: "Charlie" },
                { letter: "Dd", letter_name: "di", phonetic_albhabet: "Delta" },
                { letter: "Ee", letter_name: "i", phonetic_albhabet: "Echo" },
                { letter: "Ff", letter_name: "ef", phonetic_albhabet: "Foxtrot" },
                { letter: "Gg", letter_name: "gi", phonetic_albhabet: "Golf" },
                { letter: "Hh", letter_name: "eich", phonetic_albhabet: "Hotel" },
                { letter: "Ii", letter_name: "ai", phonetic_albhabet: "India" },
                { letter: "Jj", letter_name: "jay", phonetic_albhabet: "Juliet" },
                { letter: "Kk", letter_name: "kei", phonetic_albhabet: "Kilo" },
                { letter: "Ll", letter_name: "el", phonetic_albhabet: "Lima" },
                { letter: "Mm", letter_name: "em", phonetic_albhabet: "Mike" },
                { letter: "Nn", letter_name: "en", phonetic_albhabet: "November" },
                { letter: "Oo", letter_name: "ou", phonetic_albhabet: "Oscar" },
                { letter: "Pp", letter_name: "pi", phonetic_albhabet: "Papa" },
                { letter: "Qq", letter_name: "qiu", phonetic_albhabet: "Quebec" },
                { letter: "Rr", letter_name: "ar", phonetic_albhabet: "Romeo" },
                { letter: "Ss", letter_name: "es", phonetic_albhabet: "Sierra" },
                { letter: "Tt", letter_name: "ti", phonetic_albhabet: "Tango" },
                { letter: "Uu", letter_name: "iu", phonetic_albhabet: "Uniform" },
                { letter: "Vv", letter_name: "vi", phonetic_albhabet: "Victor" },
                { letter: "Ww", letter_name: "doubleiu", phonetic_albhabet: "Whisky" },
                { letter: "Xx", letter_name: "ex", phonetic_albhabet: "X-Ray" },
                { letter: "Yy", letter_name: "wai", phonetic_albhabet: "Yankee" },
                { letter: "Zz", letter_name: "zi", phonetic_albhabet: "Zulu" }
];

function fillTable() {
    tbody = document.getElementById('match-data');
    for (var i = 0; i < albhabet.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);
        tr.id = albhabet[i].letter;
        tr.className = "play-letter";
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = albhabet[i].letter;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = albhabet[i].letter_name;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = albhabet[i].phonetic_albhabet;
    }
}

fillTable();