// ============================================
// FLASHCARDS - Umlaute ä, ö, ü + Au/Äu
// Claudia Toth · A0 — Fonetică · Lecția 4 · 32 carduri
// Audio profesional pre-generat cu Hedda
// ============================================

const flashcardsData = [
    // ========== Ä/ä (8 carduri) ==========
    { de: "der Bär", ro: "ursul · ä = „e" deschis → bɛ:r", audio: "audio/letters/baer.wav" },
    { de: "der März", ro: "martie (luna) · → mɛ:rț", audio: "audio/letters/maerz.wav" },
    { de: "das Mädchen", ro: "fata · → mɛ:dhăn", audio: "audio/letters/maedchen.wav" },
    { de: "später", ro: "mai târziu · → ștpɛ:tăr", audio: "audio/letters/spaeter.wav" },
    { de: "die Träne", ro: "lacrima · → trɛ:ne", audio: "audio/letters/traene.wav" },
    { de: "die Blätter", ro: "frunzele (plural din das Blatt)", audio: "audio/letters/blaetter.wav" },
    { de: "das Häschen", ro: "iepurașul (diminutiv din der Hase)", audio: "audio/letters/haeschen.wav" },
    { de: "er gräbt", ro: "el sapă (graben → gräbt la pers. 3 sg.)", audio: "audio/letters/graebt.wav" },

    // ========== Ö/ö (8 carduri) ==========
    { de: "der Hörer", ro: "ascultătorul · ö = „o" cu limba sus → hø:răr", audio: "audio/letters/hoerer.wav" },
    { de: "böse", ro: "supărat / rău · → bø:ze", audio: "audio/letters/boese.wav" },
    { de: "schön", ro: "frumos · → șø:n (NU schon!)", audio: "audio/letters/schoen.wav" },
    { de: "der König", ro: "regele · → cø:nih", audio: "audio/letters/koenig.wav" },
    { de: "hören", ro: "a auzi · → hø:răn", audio: "audio/letters/hoeren.wav" },
    { de: "die Söhne", ro: "fiii (plural din der Sohn)", audio: "audio/letters/soehne.wav" },
    { de: "das Höschen", ro: "pantalonașul (diminutiv din die Hose)", audio: "audio/letters/hoeschen.wav" },
    { de: "die Wörter", ro: "cuvintele (plural din das Wort)", audio: "audio/letters/woerter.wav" },

    // ========== Ü/ü (8 carduri) ==========
    { de: "das Büro", ro: "biroul · ü = „u" cu limba sus → by:ro", audio: "audio/letters/buero.wav" },
    { de: "bügeln", ro: "a călca rufe · → by:găln", audio: "audio/letters/buegeln.wav" },
    { de: "die Tür", ro: "ușa · → ty:r", audio: "audio/letters/tuer.wav" },
    { de: "müde", ro: "obosit · → my:de", audio: "audio/letters/muede.wav" },
    { de: "fünf", ro: "cinci · → fünf", audio: "audio/letters/fuenf.wav" },
    { de: "grün", ro: "verde · → grün", audio: "audio/letters/gruen.wav" },
    { de: "die Füße", ro: "picioarele (plural din der Fuß)", audio: "audio/letters/fuesse.wav" },
    { de: "das Stühlchen", ro: "scăunașul (diminutiv din der Stuhl)", audio: "audio/letters/stuehlchen.wav" },

    // ========== Au + Äu (8 carduri) ==========
    { de: "das Auto", ro: "mașina · au = „au" → auto", audio: "audio/letters/auto.wav" },
    { de: "der Baum", ro: "pomul / copacul · → baum", audio: "audio/letters/baum.wav" },
    { de: "der Schaum", ro: "spuma / clăbucul · → șaum", audio: "audio/letters/schaum.wav" },
    { de: "das Haus", ro: "casa · → haus", audio: "audio/letters/haus.wav" },
    { de: "die Häuser", ro: "casele (plural au → äu = „oi") → hoizăr", audio: "audio/letters/haeuser.wav" },
    { de: "die Bäume", ro: "pomii (plural au → äu = „oi") → boime", audio: "audio/letters/baeume.wav" },
    { de: "das Häuschen", ro: "căsuța (diminutiv) → hoishăn", audio: "audio/letters/haeuschen.wav" },
    { de: "die Frau", ro: "femeia · au la sfârșit → rămâne au la plural: die Frauen", audio: "audio/letters/frau.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> cu cuvinte din lecție, grupate pe sunete (ä · ö · ü · au + äu).<br>
            Click pe card pentru a vedea traducerea și pronunția. Click pe 🔊 pentru a auzi pronunția germană (voce profesională înregistrată).
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});
