// ============================================
// EXERCIȚII - Umlaute ä, ö, ü + Au/Äu
// Claudia Toth · A0.1 · Lecția 4 · 5 exerciții
// ============================================

// ============================================
// EXERCIȚIUL 1: Ce umlaut e? (ä, ö sau ü)
// ============================================
const ex1Data = [
    { id: 'a', word: 'der B__r (ursul)', options: ['ä', 'ö', 'ü'], correct: 'ä', explanation: '„Bär" → bɛ:r — provine din transformarea a → ä.' },
    { id: 'b', word: 'der H__rer (ascultătorul)', options: ['ä', 'ö', 'ü'], correct: 'ö', explanation: '„Hörer" → hø:răr — derivat din „hören" (a auzi).' },
    { id: 'c', word: 'die T__r (ușa)', options: ['ä', 'ö', 'ü'], correct: 'ü', explanation: '„Tür" → ty:r — buze rotunjite ca pentru u, limba ridicată ca pentru i.' },
    { id: 'd', word: 'sch__n (frumos)', options: ['ä', 'ö', 'ü'], correct: 'ö', explanation: '„schön" → șø:n. NU confunda cu „schon" (deja, fără umlaut)!' },
    { id: 'e', word: 'm__de (obosit)', options: ['ä', 'ö', 'ü'], correct: 'ü', explanation: '„müde" → my:de — vocala ü.' },
    { id: 'f', word: 'der M__rz (martie)', options: ['ä', 'ö', 'ü'], correct: 'ä', explanation: '„März" → mɛ:rț — sună ca un „e" deschis.' },
    { id: 'g', word: 'das B__ro (biroul)', options: ['ä', 'ö', 'ü'], correct: 'ü', explanation: '„Büro" → by:ro — vocala ü.' },
    { id: 'h', word: 'b__se (supărat)', options: ['ä', 'ö', 'ü'], correct: 'ö', explanation: '„böse" → bø:ze — vocala ö.' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Care umlaut completează corect cuvântul? (ä, ö sau ü)</strong></div>`;
    ex1Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex1-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex1-${it.id}-${k}"><label for="ex1-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.word}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex1-${it.id}"]:checked`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EXERCIȚIUL 2: Plural cu umlaut
// ============================================
const ex2Data = [
    { id: 'a', sg: 'das Blatt', plArt: 'die', endings: 'er', correct: 'Blätter', accept: ['blätter', 'blaetter'], hint: 'a → ä' },
    { id: 'b', sg: 'der Sohn', plArt: 'die', endings: 'e', correct: 'Söhne', accept: ['söhne', 'soehne'], hint: 'o → ö' },
    { id: 'c', sg: 'der Fuß', plArt: 'die', endings: 'e', correct: 'Füße', accept: ['füße', 'füsse', 'fuesse', 'fuße'], hint: 'u → ü' },
    { id: 'd', sg: 'der Baum', plArt: 'die', endings: 'e', correct: 'Bäume', accept: ['bäume', 'baeume'], hint: 'au → äu' },
    { id: 'e', sg: 'der Bär', plArt: 'die', endings: 'en', correct: 'Bären', accept: ['bären', 'baeren'], hint: 'ä rămâne ä' },
    { id: 'f', sg: 'das Haus', plArt: 'die', endings: 'er', correct: 'Häuser', accept: ['häuser', 'haeuser'], hint: 'au → äu' },
    { id: 'g', sg: 'das Buch', plArt: 'die', endings: 'er', correct: 'Bücher', accept: ['bücher', 'buecher'], hint: 'u → ü' },
    { id: 'h', sg: 'das Wort', plArt: 'die', endings: 'er', correct: 'Wörter', accept: ['wörter', 'woerter'], hint: 'o → ö' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Scrie pluralul cu umlautul corect.</strong><br><em>Atenție:</em> dacă tastatura nu are ä/ö/ü, poți scrie ae/oe/ue.</div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.sg} → <strong>${it.plArt}</strong> ___ <small style="color:#6b7280;">(termin. -${it.endings} · 💡 ${it.hint})</small></label><input type="text" id="ex2-${it.id}" placeholder="forma de plural"></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = (inp.value || '').trim().toLowerCase();
        if (it.accept.some(a => a.toLowerCase() === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.plArt} ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.plArt} ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EXERCIȚIUL 3: Diminutiv cu umlaut (-chen)
// ============================================
const ex3Data = [
    { id: 'a', sg: 'das Haus (casa)', correct: 'Häuschen', accept: ['häuschen', 'haeuschen'], hint: 'au → äu + chen' },
    { id: 'b', sg: 'der Baum (pomul)', correct: 'Bäumchen', accept: ['bäumchen', 'baeumchen'], hint: 'au → äu + chen' },
    { id: 'c', sg: 'der Hase (iepurele)', correct: 'Häschen', accept: ['häschen', 'haeschen'], hint: 'a → ä + chen (e final dispare)' },
    { id: 'd', sg: 'die Hose (pantalonul)', correct: 'Höschen', accept: ['höschen', 'hoeschen'], hint: 'o → ö + chen (e final dispare)' },
    { id: 'e', sg: 'der Stuhl (scaunul)', correct: 'Stühlchen', accept: ['stühlchen', 'stuehlchen'], hint: 'u → ü + chen' },
    { id: 'f', sg: 'der Sohn (fiul)', correct: 'Söhnchen', accept: ['söhnchen', 'soehnchen'], hint: 'o → ö + chen' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Formează diminutivul cu sufixul „-chen".</strong> Toate diminutivele sunt <strong>genul neutru</strong> (das).<br><em>Regulă:</em> vocala se transformă în umlaut + adaugi „-chen". Litera „e" finală dispare uneori.</div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.sg} → das ___ <small style="color:#6b7280;">(💡 ${it.hint})</small></label><input type="text" id="ex3-${it.id}" placeholder="diminutiv cu -chen"></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = (inp.value || '').trim().toLowerCase();
        if (it.accept.some(a => a.toLowerCase() === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: das ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: das ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EXERCIȚIUL 4: Au sau äu la plural?
// ============================================
const ex4Data = [
    { id: 'a', word: 'das Haus → die ___', options: ['Hauser', 'Häuser'], correct: 'Häuser', explanation: '„Haus" e cuvânt scurt cu au în mijloc → la plural devine äu: Häuser.' },
    { id: 'b', word: 'die Frau → die ___', options: ['Frauen', 'Fräuen'], correct: 'Frauen', explanation: '„Frau" — au la SFÂRȘIT → rămâne au: Frauen.' },
    { id: 'c', word: 'der Baum → die ___', options: ['Baume', 'Bäume'], correct: 'Bäume', explanation: '„Baum" — au în mijloc → la plural äu: Bäume.' },
    { id: 'd', word: 'das Auto → die ___', options: ['Autos', 'Äutos'], correct: 'Autos', explanation: '„Auto" — au la ÎNCEPUT → rămâne au: Autos.' },
    { id: 'e', word: 'die Taube → die ___', options: ['Tauben', 'Täuben'], correct: 'Tauben', explanation: '„Taube" — au + b → rămâne au: Tauben.' },
    { id: 'f', word: 'das Auge → die ___', options: ['Augen', 'Äugen'], correct: 'Augen', explanation: '„Auge" — au la ÎNCEPUT → rămâne au: Augen.' },
    { id: 'g', word: 'der Schaum → die ___', options: ['Schaume', 'Schäume'], correct: 'Schäume', explanation: '„Schaum" — au în mijloc, fără b și nu la final → äu: Schäume.' },
    { id: 'h', word: 'die Schraube → die ___', options: ['Schrauben', 'Schräuben'], correct: 'Schrauben', explanation: '„Schraube" — au + b → rămâne au: Schrauben.' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Care e forma corectă de plural?</strong><br><em>Reține:</em> au → äu la plural, EXCEPȚIE: au + b · au la început · au la sfârșit (rămân au).</div>`;
    ex4Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex4-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex4-${it.id}-${k}"><label for="ex4-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.word}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex4-${it.id}"]:checked`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EXERCIȚIUL 5: Conjugare „graben" (a → ä)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'ich ___ <em>(eu sap)</em>', correct: 'grabe', accept: ['grabe'] },
    { id: 'b', sentence: 'du ___ <em>(tu sapi)</em>', correct: 'gräbst', accept: ['gräbst', 'graebst'] },
    { id: 'c', sentence: 'er / sie / es ___ <em>(el / ea sapă)</em>', correct: 'gräbt', accept: ['gräbt', 'graebt'] },
    { id: 'd', sentence: 'wir ___ <em>(noi săpăm)</em>', correct: 'graben', accept: ['graben'] },
    { id: 'e', sentence: 'ihr ___ <em>(voi săpați)</em>', correct: 'grabt', accept: ['grabt'] },
    { id: 'f', sentence: 'sie / Sie ___ <em>(ei / Dvs. săpați)</em>', correct: 'graben', accept: ['graben'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Conjugă verbul „graben" (a săpa) la Präsens.</strong><br><em>Atenție:</em> la persoana a 2-a și a 3-a singular, vocala <strong>a</strong> se transformă în <strong>ä</strong> (du gräbst, er gräbt). Restul rămân cu „a".</div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.sentence}</label><input type="text" id="ex5-${it.id}" placeholder="forma corectă"></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = (inp.value || '').trim().toLowerCase();
        if (it.accept.some(a => a.toLowerCase() === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

// ============================================
// INIT EXERCIȚII
// ============================================
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
