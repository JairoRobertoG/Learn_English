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
    { id: 43, spanish: 'Llegar a ser/Convertirse en', base_form: 'Become', simple_past: 'Became', past_participle: 'Become', irregular: true, lesson: 2 },
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
    { id: 65, spanish: 'Llamar', base_form: 'Call', simple_past: 'Called', past_participle: 'Called', irregular: false, lesson: 2 },
    //Lesson 3
    { id: 66, spanish: 'Costar', base_form: 'Cost', simple_past: 'Cost', past_participle: 'Cost', irregular: true, lesson: 3 },
    { id: 67, spanish: 'Dibujar', base_form: 'Draw', simple_past: 'Drew', past_participle: 'Drawn', irregular: true, lesson: 3 },
    { id: 68, spanish: 'Crecer', base_form: 'Grow', simple_past: 'Grew', past_participle: 'Grown', irregular: true, lesson: 3 },
    { id: 69, spanish: 'Permitir', base_form: 'Let', simple_past: 'Let', past_participle: 'Let', irregular: true, lesson: 3 },
    { id: 70, spanish: 'Ver', base_form: 'See', simple_past: 'Saw', past_participle: 'Seen', irregular: true, lesson: 3 },
    { id: 71, spanish: 'Vender', base_form: 'Sell', simple_past: 'Sold', past_participle: 'Sold', irregular: true, lesson: 3 },
    { id: 72, spanish: 'Enviar', base_form: 'Send', simple_past: 'Sent', past_participle: 'Sent', irregular: true, lesson: 3 },
    { id: 73, spanish: 'Cerrar', base_form: 'Shut', simple_past: 'Shut', past_participle: 'Shut', irregular: true, lesson: 3 },
    { id: 74, spanish: 'Cantar', base_form: 'Sing', simple_past: 'Sang', past_participle: 'Sung', irregular: true, lesson: 3 },
    { id: 75, spanish: 'Sentarse', base_form: 'Sit', simple_past: 'Sat', past_participle: 'Sat', irregular: true, lesson: 3 },
    { id: 76, spanish: 'Dormir', base_form: 'Sleep', simple_past: 'Slept', past_participle: 'Slept', irregular: true, lesson: 3 },
    { id: 77, spanish: 'Gastar', base_form: 'Spend', simple_past: 'Spent', past_participle: 'Spent', irregular: true, lesson: 3 },
    { id: 78, spanish: 'Robar', base_form: 'Steal', simple_past: 'Stole', past_participle: 'Stolen', irregular: true, lesson: 3 },
    { id: 79, spanish: 'Ense\u00f1ar', base_form: 'Teach', simple_past: 'Taught', past_participle: 'Taught', irregular: true, lesson: 3 },
    { id: 80, spanish: 'Lanzar/Tirar', base_form: 'Throw', simple_past: 'Threw', past_participle: 'Threwn', irregular: true, lesson: 3 },
    { id: 81, spanish: 'Entender', base_form: 'Understand', simple_past: 'Understood', past_participle: 'Understood', irregular: true, lesson: 3 },
    { id: 82, spanish: 'Subir/Incrementar', base_form: 'Rise', simple_past: 'Rose', past_participle: 'Risen', irregular: true, lesson: 3 },
    { id: 83, spanish: 'Sonar', base_form: 'Ring', simple_past: 'Rang', past_participle: 'Rung', irregular: true, lesson: 3 },
    { id: 84, spanish: 'Colgar/Ahorcar', base_form: 'Hang', simple_past: 'Hung', past_participle: 'Hung', irregular: true, lesson: 3 },
    { id: 85, spanish: 'Ponerse/Estar de Pie', base_form: 'Stand', simple_past: 'Stood', past_participle: 'Stood', irregular: true, lesson: 3 },
    { id: 86, spanish: 'Despertar', base_form: 'Wake', simple_past: 'Woke', past_participle: 'Woken', irregular: true, lesson: 3 },
    { id: 87, spanish: 'Llevar/Traer Puesto', base_form: 'Wear', simple_past: 'Wore', past_participle: 'Worn', irregular: true, lesson: 3 },
    { id: 88, spanish: 'Ganar', base_form: 'Win', simple_past: 'Won', past_participle: 'Won', irregular: true, lesson: 3 },
    { id: 89, spanish: 'Aprender', base_form: 'Learn', simple_past: 'Learnt', past_participle: 'Learnt', irregular: true, lesson: 3 },
    { id: 90, spanish: 'Contestar', base_form: 'Answer', simple_past: 'Answered', past_participle: 'Answered', irregular: false, lesson: 3 },
    { id: 91, spanish: 'Llegar', base_form: 'Arrive', simple_past: 'Arrived', past_participle: 'Arrived', irregular: false, lesson: 3 },
    { id: 92, spanish: 'Pedir/Preguntar', base_form: 'Ask', simple_past: 'Asked', past_participle: 'Asked', irregular: false, lesson: 3 },
    { id: 93, spanish: 'Creer', base_form: 'Believe', simple_past: 'Believed', past_participle: 'Believed', irregular: false, lesson: 3 },
    { id: 94, spanish: 'Cepillar', base_form: 'Brush', simple_past: 'Brushed', past_participle: 'Brushed', irregular: false, lesson: 3 },
    { id: 95, spanish: 'Limpiar', base_form: 'Clean', simple_past: 'Cleaned', past_participle: 'Cleaned', irregular: false, lesson: 3 },
    { id: 96, spanish: 'Bailar', base_form: 'Dance', simple_past: 'Danced', past_participle: 'Danced', irregular: false, lesson: 3 },
    { id: 97, spanish: 'Brincar', base_form: 'Jump', simple_past: 'Jumped', past_participle: 'Jumped', irregular: false, lesson: 3 },
    //lesson 4
    { id: 98, spanish: 'Alimentar', base_form: 'Feed', simple_past: 'Fed', past_participle: 'Fed', irregular: true, lesson: 4 },
    { id: 99, spanish: 'Pelear', base_form: 'Fight', simple_past: 'Fought', past_participle: 'Fought', irregular: true, lesson: 4 },
    { id: 100, spanish: 'Perdonar', base_form: 'Forgive', simple_past: 'Forgave', past_participle: 'Forgiven', irregular: true, lesson: 4 },
    { id: 101, spanish: 'Esconder', base_form: 'Hide', simple_past: 'Hid', past_participle: 'Hidden', irregular: true, lesson: 4 },
    { id: 102, spanish: 'Quedar', base_form: 'Fit', simple_past: 'Fit', past_participle: 'Fit', irregular: true, lesson: 4 },
    { id: 103, spanish: 'Congelar', base_form: 'Freeze', simple_past: 'Froze', past_participle: 'Frozen', irregular: true, lesson: 4 },
    { id: 104, spanish: 'Golpear', base_form: 'Beat', simple_past: 'Beat', past_participle: 'Beaten', irregular: true, lesson: 4 },
    { id: 105, spanish: 'Apostar', base_form: 'Bet', simple_past: 'Bet', past_participle: 'Bet', irregular: true, lesson: 4 },
    { id: 106, spanish: 'Morder', base_form: 'Bite', simple_past: 'Bit', past_participle: 'Bitten', irregular: true, lesson: 4 },
    { id: 107, spanish: 'Sangrar', base_form: 'Bleed', simple_past: 'Bled', past_participle: 'Bled', irregular: true, lesson: 4 },
    { id: 108, spanish: 'Soplar/Estallar', base_form: 'Blow', simple_past: 'Blew', past_participle: 'Blown', irregular: true, lesson: 4 },
    { id: 109, spanish: 'Quemar', base_form: 'Burn', simple_past: 'Burnt', past_participle: 'Burnt', irregular: true, lesson: 4 },
    { id: 110, spanish: 'Cavar', base_form: 'Dig', simple_past: 'Dug', past_participle: 'Dug', irregular: true, lesson: 4 },
    { id: 111, spanish: 'Sumergirse', base_form: 'Dive', simple_past: 'Dove', past_participle: 'Diven', irregular: true, lesson: 4 },
    { id: 112, spanish: 'Afeitarse', base_form: 'Shave', simple_past: 'Shaved', past_participle: 'Shaven', irregular: true, lesson: 4 },
    { id: 113, spanish: 'Brillar', base_form: 'Shine', simple_past: 'Shone', past_participle: 'Shone', irregular: true, lesson: 4 },
    { id: 114, spanish: 'Prohibir', base_form: 'Forbid', simple_past: 'Forbade', past_participle: 'Forbidden', irregular: true, lesson: 4 },
    { id: 115, spanish: 'Guiar/Dirigir', base_form: 'Lead', simple_past: 'Led', past_participle: 'Led', irregular: true, lesson: 4 },
    { id: 116, spanish: 'Recostarse/Yacer', base_form: 'Lie', simple_past: 'Lay', past_participle: 'Lain', irregular: true, lesson: 4 },
    { id: 117, spanish: 'Encender/Iluminar', base_form: 'Light', simple_past: 'Lit', past_participle: 'Lit', irregular: true, lesson: 4 },
    { id: 118, spanish: 'Colocar', base_form: 'Set', simple_past: 'Set', past_participle: 'Set', irregular: true, lesson: 4 },
    { id: 119, spanish: 'Coser', base_form: 'Sew', simple_past: 'Sewed', past_participle: 'Sewn', irregular: true, lesson: 4 },
    { id: 120, spanish: 'Agitar/Sacudir', base_form: 'Shake', simple_past: 'Shook', past_participle: 'Shaken', irregular: true, lesson: 4 },
    { id: 121, spanish: 'Encoger(se)', base_form: 'Shrink', simple_past: 'Shrank', past_participle: 'Shrunk', irregular: true, lesson: 4 },
    { id: 122, spanish: 'Vivir', base_form: 'Live', simple_past: 'Lived', past_participle: 'Lived', irregular: false, lesson: 4 },
    { id: 123, spanish: 'Llover', base_form: 'Rain', simple_past: 'Rained', past_participle: 'Rained', irregular: false, lesson: 4 },
    { id: 124, spanish: 'Recordar', base_form: 'Remember', simple_past: 'Remembered', past_participle: 'Remembered', irregular: false, lesson: 4 },
    { id: 125, spanish: 'Comenzar', base_form: 'Start', simple_past: 'Started', past_participle: 'Started', irregular: false, lesson: 4 },
    { id: 126, spanish: 'Quedarse/Alojarse', base_form: 'Stay', simple_past: 'Stayed', past_participle: 'Stayed', irregular: false, lesson: 4 },
    { id: 127, spanish: 'Estudiar', base_form: 'Study', simple_past: 'Studied', past_participle: 'Studied', irregular: false, lesson: 4 },
    { id: 128, spanish: 'Viajar', base_form: 'Travel', simple_past: 'Traveled', past_participle: 'Traveled', irregular: false, lesson: 4 },
    { id: 129, spanish: 'Lavar', base_form: 'Wash', simple_past: 'Washed', past_participle: 'Washed', irregular: false, lesson: 4 },
    //lesson 5
    { id: 130, spanish: 'Pedir consejo', base_form: 'Ask for advice', simple_past: 'Asked for advice', past_participle: 'Asked for advice', irregular: false, lesson: 5 },
    { id: 131, spanish: 'Terminarse', base_form: 'Be over', simple_past: 'Was/were over', past_participle: 'Been over', irregular: false, lesson: 5 },
    { id: 132, spanish: 'Venir (visitar a alguien de manera casual)', base_form: 'Come over', simple_past: 'Came over', past_participle: 'Come over', irregular: true, lesson: 5 },
    { id: 133, spanish: 'Contar con', base_form: 'Count on', simple_past: 'Counted on', past_participle: 'Counted on', irregular: false, lesson: 5 },
    { id: 134, spanish: 'Estar harto', base_form: 'Be fed up', simple_past: 'Was/Were fed up', past_participle: 'Been fed up', irregular: false, lesson: 5 },
    { id: 135, spanish: 'Tener ganas de', base_form: 'Feel like', simple_past: 'Felt like', past_participle: 'Felt like', irregular: true, lesson: 5 },
    { id: 136, spanish: 'Salir (de algún lugar)', base_form: 'Get out', simple_past: 'Got out', past_participle: 'Gotten out', irregular: true, lesson: 5 },
    { id: 137, spanish: 'Salir (usualmente para divertirse)', base_form: 'Go out', simple_past: 'Went out', past_participle: 'Gone out', irregular: true, lesson: 5 },
    { id: 138, spanish: 'Mirar', base_form: 'Look at', simple_past: 'Looked at', past_participle: 'Looked at', irregular: false, lesson: 5 },
    { id: 139, spanish: 'Decidirse por algo', base_form: 'Make up my mind', simple_past: 'Made up my mind', past_participle: 'Made up my mind', irregular: false, lesson: 5 },
    { id: 140, spanish: 'Sufrir de (problemas de salud)', base_form: 'Suffer from', simple_past: 'Suffered from', past_participle: 'Suffered from', irregular: false, lesson: 5 },
    { id: 141, spanish: 'Cuidar', base_form: 'Take care of', simple_past: 'Took care of', past_participle: 'Taken care of', irregular: true, lesson: 5 },
    { id: 142, spanish: 'Deshacerse de/Tirar a la basura', base_form: 'Throw away', simple_past: 'Threw away', past_participle: 'Thrown away', irregular: true, lesson: 5 },
    { id: 143, spanish: 'Terminar (una relación)', base_form: 'Break up', simple_past: 'Broke up', past_participle: 'Broken up', irregular: true, lesson: 5 },
    //lesson 6
    { id: 144, spanish: 'Cuidar(por un periodo de tiempo corto)', base_form: 'Babysit', simple_past: 'Babysat', past_participle: 'Babysat', irregular: true, lesson: 6 },
    { id: 145, spanish: 'Ayudar con la tarea', base_form: 'Help with homework', simple_past: 'Helped with homework', past_participle: 'Helped with homework', irregular: false, lesson: 6 },
    { id: 146, spanish: 'Dar un aventón(a alguien)', base_form: 'Give(someone) a ride', simple_past: 'Gave a ride', past_participle: 'Given a ride', irregular: true, lesson: 6 },
    { id: 147, spanish: 'Estar al pendiente de(algo)', base_form: 'Keep an eye on(something)', simple_past: 'Kept an eye on', past_participle: 'Kept an eye on', irregular: true, lesson: 6 },
    { id: 148, spanish: 'Prestar', base_form: 'Lend', simple_past: 'Lent', past_participle: 'Lent', irregular: true, lesson: 6 },
    { id: 149, spanish: 'Tomar/Recibir prestado', base_form: 'Borrow', simple_past: 'Borrowed', past_participle: 'Borrowed', irregular: false, lesson: 6 },
    { id: 150, spanish: 'Arreglárselas', base_form: 'Get by', simple_past: 'Got by', past_participle: 'Gotten by', irregular: true, lesson: 6 },
    { id: 151, spanish: 'Quitarse(prenda o zapato)', base_form: 'Take off', simple_past: 'Took off', past_participle: 'Taken off', irregular: true, lesson: 6 },
    { id: 152, spanish: 'Asimilar, entender', base_form: 'Take in', simple_past: 'Took in', past_participle: 'Taken in', irregular: true, lesson: 6 },
    { id: 153, spanish: 'Reconciliarse(con alguien)', base_form: 'Make up(with someone)', simple_past: 'Made up', past_participle: 'Made up', irregular: true, lesson: 6 },
    { id: 154, spanish: 'Contratar', base_form: 'Take on', simple_past: 'Took on', past_participle: 'Taken on', irregular: true, lesson: 6 },
    { id: 155, spanish: 'Hablar con(alguien)', base_form: 'Talk to(somebody)', simple_past: 'Talked to ', past_participle: 'Talked to', irregular: false, lesson: 6 },
    { id: 156, spanish: 'Invitar a salir(a alguien)', base_form: 'Ask(someone) out', simple_past: 'Asked out', past_participle: 'Asked out', irregular: false, lesson: 6 },
    { id: 157, spanish: 'Descomponerse', base_form: 'Break down', simple_past: 'Broke down', past_participle: 'Broken down', irregular: true, lesson: 6 },
    { id: 158, spanish: 'Fundirse(foco), Consumirse(vela u otro combustible)', base_form: 'Burn out', simple_past: 'Burned out', past_participle: 'Burned out', irregular: false, lesson: 6 },
    { id: 159, spanish: 'Pasar por/Atravesar (situaciones difíciles)', base_form: 'Go through', simple_past: 'Went through', past_participle: 'Gone through', irregular: true, lesson: 6 },
    { id: 160, spanish: 'Dejar(algo o alguien en algún lugar)', base_form: 'Drop off', simple_past: 'Dropped off', past_participle: 'Dropped off', irregular: false, lesson: 6 },
    { id: 161, spanish: 'Salir adelante/progresar', base_form: 'Get ahead', simple_past: 'Got ahead', past_participle: 'Gotten ahead', irregular: true, lesson: 6 },
    { id: 162, spanish: 'Entrar', base_form: 'Get into', simple_past: 'Got into', past_participle: 'Gotten into', irregular: true, lesson: 6 },
    { id: 163, spanish: 'Calmarse/Establecerse', base_form: 'Settle down', simple_past: 'Settled down', past_participle: 'Settled down', irregular: false, lesson: 6 },
    { id: 164, spanish: 'Reunirse', base_form: 'Get together', simple_past: 'Got together', past_participle: 'Gotten together', irregular: true, lesson: 6 },
    { id: 165, spanish: 'Sonar(alarma)/Activarse', base_form: 'Go off', simple_past: 'Went off', past_participle: 'Gone off', irregular: true, lesson: 6 },
    { id: 166, spanish: 'Acercarse(a alguien)', base_form: 'Come up to', simple_past: 'Came up to', past_participle: 'Come up to', irregular: true, lesson: 6 },
    { id: 167, spanish: 'Seguir adelante', base_form: 'Move on', simple_past: 'Moved on', past_participle: 'Moved on', irregular: false, lesson: 6 },
    { id: 168, spanish: 'Quedarse sin(cuando se agota algo)', base_form: 'Run out of', simple_past: 'Ran out of', past_participle: 'Run out of', irregular: true, lesson: 6 },
    { id: 169, spanish: 'Llevarse [bien](con)', base_form: 'Get along', simple_past: 'Got along', past_participle: 'Gotten along', irregular: true, lesson: 6 },
    //lesson 7                       
    { id: 169, spanish: 'Aparecer', base_form: 'Crop up', simple_past: 'Cropped up', past_participle: 'Cropped up', irregular: false, lesson: 7 },
    { id: 169, spanish: 'Dejar(de asistir a) la escuela', base_form: 'Drop out of school', simple_past: 'Dropped out of school', past_participle: 'Dropped out of school', irregular: false, lesson: 7 },
    { id: 170, spanish: 'Lidiar con/Manejar(algo)', base_form: 'Deal with', simple_past: 'Dealt with', past_participle: 'Dealt with', irregular: false, lesson: 7 },
    { id: 171, spanish: 'Solicitar (visa/pasaporte)', base_form: 'Apply for', simple_past: 'Applied for', past_participle: 'Applied for', irregular: false, lesson: 7 },
    { id: 172, spanish: 'Dejar pasar (una oportunidad)', base_form: 'Pass up', simple_past: 'Passed up', past_participle: 'Passed up', irregular: false, lesson: 7 },
    { id: 173, spanish: 'Desifrar, resolver', base_form: 'Figure out', simple_past: 'Figured out', past_participle: 'Figured out', irregular: false, lesson: 7 },
    { id: 174, spanish: 'Salir furioso de (un lugar)', base_form: 'Storm out of', simple_past: 'Stormed out of', past_participle: 'Stormed out of', irregular: false, lesson: 7 },
    { id: 175, spanish: 'Desvelarse', base_form: 'Stay up late', simple_past: 'Stayed up late', past_participle: 'Stayed up late', irregular: false, lesson: 7 },
    { id: 176, spanish: 'Registrarce (en un hotel)', base_form: 'Check into hotel', simple_past: 'Checked into hotel', past_participle: 'Checked into hotel', irregular: false, lesson: 7 },
    { id: 177, spanish: 'Registrar salida (en un hotel)', base_form: 'Check out hotel', simple_past: 'Checked out hotel', past_participle: 'Checked out hotel', irregular: false, lesson: 7 },
    { id: 178, spanish: 'Ordenar', base_form: 'Sort out', simple_past: 'Sorted out', past_participle: 'Sorted out', irregular: false, lesson: 7 },
    { id: 179, spanish: 'Limpiar con un trapo', base_form: 'Wipe down', simple_past: 'Wiped down', past_participle: 'Wiped down', irregular: false, lesson: 7 },
    { id: 180, spanish: 'Bostezar', base_form: 'Yaw', simple_past: 'Yawed', past_participle: 'Yawed', irregular: false, lesson: 7 },
    { id: 181, spanish: 'Llorar', base_form: 'Weep', simple_past: 'Weept', past_participle: 'Weept', irregular: false, lesson: 7 },
    { id: 182, spanish: 'Sonreirle a (alguien)', base_form: 'Smile at', simple_past: 'Smiled at', past_participle: 'Smiled at', irregular: false, lesson: 7 },
    { id: 183, spanish: 'Gritar', base_form: 'Scream', simple_past: 'Screamed', past_participle: 'Screamed', irregular: false, lesson: 7 },
    { id: 184, spanish: 'Reise (de)', base_form: 'Laugh At', simple_past: 'Laughed At', past_participle: 'Laughed At', irregular: false, lesson: 7 },
    { id: 185, spanish: 'Besar', base_form: 'Kiss', simple_past: 'Kissed', past_participle: 'Kissed', irregular: false, lesson: 7 },
    { id: 186, spanish: 'Abrazar', base_form: 'Hug', simple_past: 'Hugged', past_participle: 'Hugged', irregular: false, lesson: 7 },
    { id: 187, spanish: 'Tener un arranque de cólera', base_form: 'Have a burst of anger', simple_past: 'Had a burst of anger', past_participle: 'Had a burst of anger', irregular: true, lesson: 7 },
    { id: 188, spanish: 'Fruncir el ceño (por/a)', base_form: 'Frown at', simple_past: 'Frowned at', past_participle: 'Frowned at', irregular: false, lesson: 7 },
    { id: 189, spanish: 'Llorar', base_form: 'Cry', simple_past: 'Cried', past_participle: 'Cried', irregular: false, lesson: 7 },
    { id: 190, spanish: 'Despertar', base_form: 'Awake', simple_past: 'Awoke', past_participle: 'Awoken', irregular: true, lesson: 7 },
    { id: 191, spanish: 'Doblar', base_form: 'Bend', simple_past: 'Bent', past_participle: 'Bent', irregular: true, lesson: 7 },
    { id: 192, spanish: 'Transmitir', base_form: 'Broadcast', simple_past: 'Broadcast', past_participle: 'Broadcast', irregular: true, lesson: 7 },
    { id: 193, spanish: 'Arrodillarse', base_form: 'Kneel', simple_past: 'Knelt', past_participle: 'Knelt', irregular: true, lesson: 7 },
    { id: 194, spanish: 'Apoyarse', base_form: 'Lean', simple_past: 'Learnt', past_participle: 'Learnt', irregular: true, lesson: 7 },
    { id: 195, spanish: 'Significar', base_form: 'Mean', simple_past: 'Meant', past_participle: 'Meant', irregular: true, lesson: 7 },
    { id: 196, spanish: 'Cruzar', base_form: 'Come across', simple_past: 'Came across', past_participle: 'Come across', irregular: true, lesson: 7 },
    { id: 197, spanish: 'Escribir', base_form: 'Write up', simple_past: 'Wrote up', past_participle: 'Wrote up', irregular: true, lesson: 7 },
    { id: 198, spanish: 'Rendirse', base_form: 'Give up', simple_past: 'Gave up', past_participle: 'Given up', irregular: true, lesson: 7 },
    { id: 199, spanish: 'Adelantar', base_form: 'Overtake', simple_past: 'Overtook', past_participle: 'Overtaken', irregular: true, lesson: 7 },
    { id: 200, spanish: 'Hundir', base_form: 'Sink', simple_past: 'Sank', past_participle: 'Sunk', irregular: true, lesson: 7 },
    { id: 201, spanish: 'Cortar (Cesped)', base_form: 'Mow', simple_past: 'Mowed', past_participle: 'Mown', irregular: true, lesson: 7 },
    { id: 202, spanish: 'Chocar', base_form: 'Crash', simple_past: 'Crashed', past_participle: 'Crashed', irregular: false, lesson: 7 },
    { id: 203, spanish: 'Atrapar a alguien', base_form: 'Trap', simple_past: 'Traped', past_participle: 'Traped', irregular: false, lesson: 7 },
    { id: 204, spanish: 'Envolver', base_form: 'Involve', simple_past: 'Involved', past_participle: 'Involve', irregular: false, lesson: 7 },
    { id: 205, spanish: 'Funcionar', base_form: 'Operate', simple_past: 'Operated', past_participle: 'Operate', irregular: false, lesson: 7 },
    { id: 206, spanish: 'Actuar', base_form: 'Perform', simple_past: 'Perform', past_participle: 'Perform', irregular: false, lesson: 7 },
    { id: 207, spanish: 'Influenciar', base_form: 'Influence', simple_past: 'Influenced', past_participle: 'Influenced', irregular: false, lesson: 7 },
    { id: 208, spanish: 'Remover', base_form: 'Remove', simple_past: 'Removed', past_participle: 'Removed', irregular: false, lesson: 7 },
    { id: 209, spanish: 'Masticar', base_form: 'Chew', simple_past: 'Chewed', past_participle: 'Chewed', irregular: false, lesson: 7 },
    { id: 210, spanish: 'Localizar', base_form: 'Locate', simple_past: 'Located', past_participle: 'Located', irregular: false, lesson: 7 },
    { id: 211, spanish: 'Desaparecer', base_form: 'Dissapear', simple_past: 'Dissapeared', past_participle: 'Dissapeared', irregular: false, lesson: 7 },
    { id: 212, spanish: 'Practicar', base_form: 'Practice', simple_past: 'Practiced', past_participle: 'Practiced', irregular: false, lesson: 7 },
    { id: 213, spanish: 'Decidir', base_form: 'Decide', simple_past: 'Decided', past_participle: 'Decided', irregular: false, lesson: 7 },
    { id: 214, spanish: 'Deacuerdo', base_form: 'Agree', simple_past: 'Agreed', past_participle: 'Agree', irregular: false, lesson: 7 },
    { id: 215, spanish: 'Mostrar', base_form: 'Show', simple_past: 'Showed', past_participle: 'Showed', irregular: false, lesson: 7 },
    { id: 216, spanish: 'Pasar', base_form: 'Pass', simple_past: 'Passed', past_participle: 'Passed', irregular: false, lesson: 7 },
    { id: 217, spanish: 'Tragar', base_form: 'Swallow', simple_past: 'Swallowed', past_participle: 'Swallowed', irregular: false, lesson: 7 },
    { id: 218, spanish: 'Diseñar', base_form: 'Design', simple_past: 'Designed', past_participle: 'Design', irregular: false, lesson: 7 },
    { id: 219, spanish: 'Desmayarse', base_form: 'Pass out', simple_past: 'Passed out', past_participle: 'Passed out', irregular: false, lesson: 7 },
    { id: 220, spanish: 'Empujar', base_form: 'Push', simple_past: 'Pushed', past_participle: 'Pushed', irregular: false, lesson: 7 },
    { id: 221, spanish: 'Manejar', base_form: 'Handle', simple_past: 'Handled', past_participle: 'Handled', irregular: false, lesson: 7 },
    { id: 222, spanish: 'Convencer', base_form: 'Convince', simple_past: 'Convinced', past_participle: 'Convinced', irregular: false, lesson: 7 },
    { id: 222, spanish: 'Cargar', base_form: 'Charge', simple_past: 'Charged', past_participle: 'Charged', irregular: false, lesson: 7 },
    { id: 223, spanish: 'Recoger', base_form: 'Pick', simple_past: 'Picked', past_participle: 'Picked', irregular: false, lesson: 7 },
    { id: 224, spanish: 'Desear', base_form: 'Wish', simple_past: 'Wished', past_participle: 'Wished', irregular: false, lesson: 7 },
    { id: 225, spanish: 'Reservar', base_form: 'Reserve', simple_past: 'Reserved', past_participle: 'Reserved', irregular: false, lesson: 7 },
    { id: 226, spanish: 'Amenazar', base_form: 'Threat', simple_past: 'Threat', past_participle: 'Threat', irregular: false, lesson: 7 },
    { id: 227, spanish: 'Secar', base_form: 'Dry', simple_past: 'Dried', past_participle: 'Dried', irregular: false, lesson: 7 },
    { id: 228, spanish: 'Afrontar', base_form: 'Face', simple_past: 'Faced', past_participle: 'Face', irregular: false, lesson: 7 },
    { id: 229, spanish: 'Alcanzar', base_form: 'Reach', simple_past: 'Reached', past_participle: 'Reached', irregular: false, lesson: 7 },
    { id: 229, spanish: 'Declarar', base_form: 'Declare', simple_past: 'Declared', past_participle: 'Declared', irregular: false, lesson: 7 },
    { id: 230, spanish: 'Afectar', base_form: 'Affect', simple_past: 'Affect', past_participle: 'Affected', irregular: false, lesson: 7 },
    { id: 231, spanish: 'Concluir', base_form: 'Concluide', simple_past: 'Concluided', past_participle: 'Concluided', irregular: false, lesson: 7 },
    { id: 232, spanish: 'Concluir', base_form: 'Concluide', simple_past: 'Concluided', past_participle: 'Concluided', irregular: false, lesson: 7 },
    { id: 233, spanish: 'Alertar', base_form: 'Alert', simple_past: 'Alerted', past_participle: 'Alerted', irregular: false, lesson: 7 },
    { id: 234, spanish: 'Reconocer', base_form: 'Recognize', simple_past: 'Recognized', past_participle: 'Recognized', irregular: false, lesson: 7 },
    { id: 235, spanish: 'Responder', base_form: 'Respond', simple_past: 'Responded', past_participle: 'Responded', irregular: false, lesson: 7 },
    { id: 236, spanish: 'Seguir', base_form: 'Follow', simple_past: 'Followed', past_participle: 'Followed', irregular: false, lesson: 7 },
    { id: 236, spanish: 'Actualizar', base_form: 'Update', simple_past: 'Updated', past_participle: 'Update', irregular: false, lesson: 7 },
    { id: 237, spanish: 'Perseguir', base_form: 'Pursue', simple_past: 'Pursued', past_participle: 'Pursue', irregular: false, lesson: 7 },
    { id: 238, spanish: 'Compartir', base_form: 'Share', simple_past: 'Shared', past_participle: 'Shared', irregular: false, lesson: 7 },
    { id: 239, spanish: 'Aceptar', base_form: 'Accept', simple_past: 'Accepted', past_participle: 'Accepted', irregular: false, lesson: 7 },
    { id: 240, spanish: 'Continuar', base_form: 'Continue', simple_past: 'Continued', past_participle: 'Continued', irregular: false, lesson: 7 },
    { id: 241, spanish: 'Identificar', base_form: 'Identify', simple_past: 'Identified', past_participle: 'Identified', irregular: false, lesson: 7 },
    { id: 242, spanish: 'Aspirar', base_form: 'Vacuum', simple_past: 'Vacuum', past_participle: 'Vacuum', irregular: false, lesson: 7 },
    { id: 243, spanish: 'Planchar', base_form: 'Iron', simple_past: 'Ironed', past_participle: 'Ironed', irregular: false, lesson: 7 },
    { id: 244, spanish: 'Limpiar polvo', base_form: 'Dust', simple_past: 'Dusted', past_participle: 'Dusted', irregular: false, lesson: 7 },
    { id: 245, spanish: 'Trapear', base_form: 'Mop', simple_past: 'Mopped', past_participle: 'Mopped', irregular: false, lesson: 7 },
    { id: 246, spanish: 'Doblar (Ropa)', base_form: 'Fold', simple_past: 'Folded', past_participle: 'Folded', irregular: false, lesson: 7 },
    { id: 247, spanish: 'Participar', base_form: 'Participate', simple_past: 'Participated', past_participle: 'Participate', irregular: false, lesson: 7 }
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
    var table_verbs = document.getElementById("select_lesson_list");

    if (table_verbs == null) {
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

            if (verb_name != "")
                document.getElementById('image-verb').src = 'images/verbs/' + verb_name.toLowerCase() + '_opt.jpg';
            else
                document.getElementById('image-verb').src = 'images/verbs/white.jpg';

            var spanish_verb = verbs.find(x => x.base_form == verb_name).spanish;
            document.getElementById('spanish').innerText = spanish_verb;
        }
    }
    else {
        select_lesson_list.onchange = function () {
            fillTableVerbs(this.value);
        }
    }

}

function search() {
    var simple_past_verb = document.getElementById("simple_past").value;
    var past_participle_verb = document.getElementById("past_participle").value;
    var verb = verbs.find(x => x.base_form == select_list.value);
    clear();
    document.getElementById('spanish').innerText = verb.spanish;

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
        var verb = verbs.find(x => x.base_form == select_list.value);

        if (!verb.irregular && verb_id != 'base_form_audio')
            document.getElementById("audio").src = 'audios/regular_verb_audio/' + select_list.value.toLowerCase() + 'ed' + '.mp3';
        else {
            if (verb_id == 'base_form_audio')
                document.getElementById("audio").src = 'audios/' + verb_id + '/' + select_list.value.toLowerCase() + '.mp3';
            else if (verb_id == 'simple_past_audio')
                document.getElementById("audio").src = 'audios/' + verb_id + '/' + verb.simple_past.toLowerCase() + '.mp3';
            else if (verb_id == 'past_participle_audio')
                document.getElementById("audio").src = 'audios/' + verb_id + '/' + verb.past_participle.toLowerCase() + '.mp3';
        }

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

fillTableVerbs(0);

function fillTableVerbs(lesson) {
    tbody = document.getElementById('match-data');

    if (tbody != undefined) {
        var tr, td;
        document.getElementById("match-data").innerHTML = "";
        if (lesson > 0) {
            var verbs_list = [];
            for (var i = 0; i < verbs.length; i++) {

                if (verbs[i].lesson == lesson) {
                    verbs_list.push(verbs[i]);
                }
            }
            fillTable(verbs_list);
        }
        else
            fillTable(verbs);
    }
}

function fillTable(verbs_list) {
    for (var i = 0; i < verbs_list.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);

        td = tr.insertCell(tr.cells.length);
        td.innerHTML = verbs_list[i].base_form;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = verbs_list[i].simple_past;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = verbs_list[i].past_participle;

        td = tr.insertCell(tr.cells.length);
        td.innerHTML = verbs_list[i].spanish;

        td = tr.insertCell(tr.cells.length);
        if (verbs_list[i].irregular)
            td.innerHTML = 'Irregular';
        else
            td.innerHTML = 'Regular';
    }
    document.getElementById('search_verb').value = '';
}

function searchSpecificVerb() {
    if (search_verb.value != '') {
        tbody = document.getElementById('match-data');

        var tr, td;
        document.getElementById("match-data").innerHTML = "";
        var verbs_list = [];
        for (var i = 0; i < verbs.length; i++) {
            if (verbs[i].base_form.toLowerCase().trim() == search_verb.value.toLowerCase().trim()) {
                verbs_list.push(verbs[i]);
                break;
            }
        }
        fillTable(verbs_list);
    }
    else
        alert('The verb text is empty')
}