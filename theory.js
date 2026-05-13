// ============================================
// TEORIE - UMLAUTE ä, ö, ü + ZWIELAUT Au/Äu
// Claudia Toth · A0 — Fonetică · Lecția 4 din 7
// ============================================

const theoryHTML = `
    <!-- 0: Introducere — ce sunt umlautele -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Ce sunt umlautele? + regula de transformare</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-introducere.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Ce este un Umlaut?</h4>
                <p>Umlautele sunt <strong>3 vocale unice ale limbii germane</strong>: <strong>ä, ö, ü</strong>. Au <strong>două puncte deasupra</strong> și provin din transformarea vocalelor de bază:</p>
                <ul>
                    <li><strong>a → ä</strong></li>
                    <li><strong>o → ö</strong></li>
                    <li><strong>u → ü</strong></li>
                </ul>
                <p style="margin-top: 8px;">Aceste sunete <strong>nu există în română</strong> — trebuie să le auzi și să le exersezi pentru a le pronunța corect.</p>
            </div>
            <div class="theory-box" style="background: #fffbeb; border-left: 4px solid #f59e0b; margin-bottom: 14px;">
                <h4>💡 Înainte să începem — Diacritice germane fără tastatură germană</h4>
                <p>„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:</p>
                <ul style="margin: 6px 0 4px 18px;">
                    <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ss</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ß</code> &nbsp;→&nbsp; <em>„heisst" = „heißt"</em></li>
                    <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ae</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ä</code> &nbsp;→&nbsp; <em>„Rumaenien" = „Rumänien"</em></li>
                    <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">oe</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ö</code> &nbsp;→&nbsp; <em>„schoen" = „schön"</em></li>
                    <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ue</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ü</code> &nbsp;→&nbsp; <em>„gruessen" = „grüßen"</em></li>
                </ul>
                <p>Sistemul acceptă <strong>ambele forme</strong> automat. Eu așa am început — fără tastatură germană! E o convenție oficială folosită și de germani când scriu fără diacritice."</p>
            </div>


            <div class="theory-box">
                <h4>📌 Când apar umlautele? — 3 contexte tipice</h4>
                <table class="theory-table">
                    <thead><tr><th>Context</th><th>Exemplu · traducere</th></tr></thead>
                    <tbody>
                        <tr>
                            <td rowspan="3"><strong>Plural substantive</strong></td>
                            <td>das Bl<strong>a</strong>tt → die Bl<strong>ä</strong>tter · <span class="ro-translation">frunza / frunzele</span></td>
                        </tr>
                        <tr><td>der S<strong>o</strong>hn → die S<strong>ö</strong>hne · <span class="ro-translation">fiul / fiii</span></td></tr>
                        <tr><td>der F<strong>u</strong>ß → die F<strong>ü</strong>ße · <span class="ro-translation">piciorul / picioarele</span></td></tr>
                        <tr>
                            <td rowspan="3"><strong>Diminutive</strong> (cu -chen)</td>
                            <td>der H<strong>a</strong>se → das H<strong>ä</strong>schen · <span class="ro-translation">iepurele / iepurașul</span></td>
                        </tr>
                        <tr><td>die H<strong>o</strong>se → das H<strong>ö</strong>schen · <span class="ro-translation">pantalonul / pantalonașul</span></td></tr>
                        <tr><td>der St<strong>u</strong>hl → das St<strong>ü</strong>hlchen · <span class="ro-translation">scaunul / scăunașul</span></td></tr>
                        <tr>
                            <td rowspan="2"><strong>Verbe la pers. 2 și 3 sg.</strong></td>
                            <td>gr<strong>a</strong>ben → du gr<strong>ä</strong>bst, er gr<strong>ä</strong>bt · <span class="ro-translation">a săpa</span></td>
                        </tr>
                        <tr><td>f<strong>a</strong>hren → du f<strong>ä</strong>hrst, er f<strong>ä</strong>hrt · <span class="ro-translation">a merge cu un vehicul</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 De ce e important să înveți umlautele?</h4>
                <p>În germană umlautul <strong>schimbă sensul cuvântului</strong>. Confundarea unei vocale cu umlautul ei produce un cuvânt diferit:</p>
                <ul>
                    <li><strong>der Bruder</strong> (fratele) ≠ <strong>die Brüder</strong> (frații)</li>
                    <li><strong>schon</strong> (deja) ≠ <strong>schön</strong> (frumos)</li>
                    <li><strong>fuhr</strong> (a mers — Präteritum) ≠ <strong>für</strong> (pentru)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Ä/ä -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🅰 2. Ä/ä [ɛ:] — „e" deschis</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-litera-ae.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Pronunția lui ä</h4>
                <p>Litera <strong>ä</strong> [ɛ:] se pronunță ca un <strong>„e" deschis</strong> — un sunet între „a" și „e", aproape de „e" românesc dar mai larg.</p>
                <p style="margin-top: 8px;">Truc: rostește un „e" cu gura puțin mai deschisă decât de obicei.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Cuvânt</th><th>Pronunție</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>der Bär</strong></td><td>bɛ:r (r nazal)</td><td><span class="ro-translation">ursul</span></td></tr>
                    <tr><td><strong>der März</strong></td><td>mɛ:rț</td><td><span class="ro-translation">martie</span></td></tr>
                    <tr><td><strong>das Mädchen</strong></td><td>mɛ:dhăn</td><td><span class="ro-translation">fata</span></td></tr>
                    <tr><td><strong>später</strong></td><td>ștpɛ:tăr</td><td><span class="ro-translation">mai târziu</span></td></tr>
                    <tr><td><strong>die Träne</strong></td><td>trɛ:ne</td><td><span class="ro-translation">lacrima</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>📌 De unde provine ä?</h4>
                <ul>
                    <li><strong>Verbe</strong>: graben → er gr<strong>ä</strong>bt, fahren → er f<strong>ä</strong>hrt</li>
                    <li><strong>Plural</strong>: das Bl<strong>a</strong>tt → die Bl<strong>ä</strong>tter, das H<strong>au</strong>s → die H<strong>äu</strong>ser</li>
                    <li><strong>Diminutiv</strong>: der H<strong>a</strong>se → das H<strong>ä</strong>schen</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 2: Ö/ö -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🅾 3. Ö/ö [ø:] — „o" închis cu limba sus</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-litera-oe.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Pronunția lui ö</h4>
                <p>Litera <strong>ö</strong> [ø:] se pronunță cu:</p>
                <ul>
                    <li><strong>buzele rotunjite</strong> ca pentru „o închis"</li>
                    <li><strong>limba ridicată</strong> aproape ca pentru „e închis"</li>
                </ul>
                <p style="margin-top: 8px;">Truc: rostește un „o" cu buzele rotunjite, apoi încet-încet apropie limba de „e" — fără să schimbi forma buzelor.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Cuvânt</th><th>Pronunție</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>der Hörer</strong></td><td>hø:răr (r nazal)</td><td><span class="ro-translation">ascultătorul</span></td></tr>
                    <tr><td><strong>böse</strong></td><td>bø:ze</td><td><span class="ro-translation">supărat / rău</span></td></tr>
                    <tr><td><strong>schön</strong></td><td>șø:n</td><td><span class="ro-translation">frumos</span></td></tr>
                    <tr><td><strong>der König</strong></td><td>cø:nih</td><td><span class="ro-translation">regele</span></td></tr>
                    <tr><td><strong>hören</strong></td><td>hø:răn</td><td><span class="ro-translation">a auzi</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>📌 De unde provine ö?</h4>
                <ul>
                    <li><strong>Plural</strong>: der S<strong>o</strong>hn → die S<strong>ö</strong>hne, das W<strong>o</strong>rt → die W<strong>ö</strong>rter</li>
                    <li><strong>Diminutiv</strong>: die H<strong>o</strong>se → das H<strong>ö</strong>schen</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ Atenție capcană!</h4>
                <p><strong>schon</strong> (cu o) = <em>deja</em> · <strong>schön</strong> (cu ö) = <em>frumos</em><br>
                Două cuvinte total diferite — ascultă bine sunetul!</p>
            </div>
        </div>
    </div>

    <!-- 3: Ü/ü -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🆄 4. Ü/ü [y:] — „u" cu limba ridicată ca la „i"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-litera-ue.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Pronunția lui ü</h4>
                <p>Litera <strong>ü</strong> [y:] se pronunță cu:</p>
                <ul>
                    <li><strong>buzele rotunjite</strong> ca pentru „u"</li>
                    <li><strong>limba ridicată</strong> aproape până la poziția lui „i"</li>
                </ul>
                <p style="margin-top: 8px;">Truc: rostește un „i" românesc, apoi rotunjește buzele ca pentru „u" — fără să schimbi poziția limbii.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Cuvânt</th><th>Pronunție</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>das Büro</strong></td><td>by:ro</td><td><span class="ro-translation">biroul</span></td></tr>
                    <tr><td><strong>bügeln</strong></td><td>by:găln</td><td><span class="ro-translation">a călca rufe</span></td></tr>
                    <tr><td><strong>die Tür</strong></td><td>ty:r</td><td><span class="ro-translation">ușa</span></td></tr>
                    <tr><td><strong>müde</strong></td><td>my:de</td><td><span class="ro-translation">obosit</span></td></tr>
                    <tr><td><strong>fünf</strong></td><td>fünf</td><td><span class="ro-translation">cinci</span></td></tr>
                    <tr><td><strong>grün</strong></td><td>grün</td><td><span class="ro-translation">verde</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>📌 De unde provine ü?</h4>
                <ul>
                    <li><strong>Plural</strong>: der F<strong>u</strong>ß → die F<strong>ü</strong>ße, das B<strong>u</strong>ch → die B<strong>ü</strong>cher</li>
                    <li><strong>Diminutiv</strong>: der St<strong>u</strong>hl → das St<strong>ü</strong>hlchen</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ Atenție capcană!</h4>
                <p><strong>fuhr</strong> (cu u, Präteritum) = <em>a mers</em> · <strong>für</strong> (cu ü) = <em>pentru</em></p>
            </div>
        </div>
    </div>

    <!-- 4: Au/Äu -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🅰🆄 5. Diftongul Au și transformarea în Äu</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-au-aeu.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <h4 style="color: #065f46;">📌 Au/au — diftong simplu</h4>
            <p><strong>Au/au</strong> se citește exact ca <strong>„au"</strong> în română.</p>
            <table class="theory-table">
                <thead><tr><th>Cuvânt</th><th>Pronunție</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>das Auto</strong></td><td>auto</td><td><span class="ro-translation">mașina</span></td></tr>
                    <tr><td><strong>der Baum</strong></td><td>baum</td><td><span class="ro-translation">pomul</span></td></tr>
                    <tr><td><strong>der Schaum</strong></td><td>șaum</td><td><span class="ro-translation">spuma</span></td></tr>
                    <tr><td><strong>das Haus</strong></td><td>haus</td><td><span class="ro-translation">casa</span></td></tr>
                </tbody>
            </table>

            <h4 style="color: #065f46; margin-top: 14px;">📌 Au → Äu la plural / diminutiv</h4>
            <p>Când substantivul cu <strong>au</strong> se pune la <strong>plural</strong> sau <strong>diminutiv</strong>, diftongul se transformă în <strong>äu/Äu</strong>, care se citește <strong>„oi"</strong>!</p>
            <table class="theory-table">
                <thead><tr><th>Singular</th><th>Plural / Diminutiv</th><th>Pronunție</th></tr></thead>
                <tbody>
                    <tr>
                        <td>das H<strong>au</strong>s</td>
                        <td>die H<strong>äu</strong>ser</td>
                        <td>hoizăr<br><span class="ro-translation">casele</span></td>
                    </tr>
                    <tr>
                        <td>der B<strong>au</strong>m</td>
                        <td>die B<strong>äu</strong>me</td>
                        <td>boime<br><span class="ro-translation">pomii</span></td>
                    </tr>
                    <tr>
                        <td>das H<strong>au</strong>s</td>
                        <td>das H<strong>äu</strong>schen (dim.)</td>
                        <td>hoishăn<br><span class="ro-translation">căsuța</span></td>
                    </tr>
                    <tr>
                        <td>der B<strong>au</strong>m</td>
                        <td>das B<strong>äu</strong>mchen (dim.)</td>
                        <td>boimhăn<br><span class="ro-translation">copăcelul</span></td>
                    </tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ 3 EXCEPȚII — au RĂMÂNE „au" la plural</h4>
                <table class="theory-table">
                    <thead><tr><th>Regulă</th><th>Exemplu · traducere</th></tr></thead>
                    <tbody>
                        <tr>
                            <td rowspan="3"><strong>1. au + b</strong> (urmat de b)</td>
                            <td>die Ta<strong>u</strong>be → die Tauben · <span class="ro-translation">porumbița</span></td>
                        </tr>
                        <tr><td>die Tra<strong>u</strong>be → die Trauben · <span class="ro-translation">strugurele</span></td></tr>
                        <tr><td>die Schra<strong>u</strong>be → die Schrauben · <span class="ro-translation">șurubul</span></td></tr>
                        <tr>
                            <td rowspan="3"><strong>2. au la începutul</strong> cuvântului</td>
                            <td>das <strong>Au</strong>ge → die Augen · <span class="ro-translation">ochiul</span></td>
                        </tr>
                        <tr><td>das <strong>Au</strong>to → die Autos · <span class="ro-translation">mașina</span></td></tr>
                        <tr><td>die <strong>Au</strong>fgabe → die Aufgaben · <span class="ro-translation">tema</span></td></tr>
                        <tr>
                            <td rowspan="3"><strong>3. au la sfârșitul</strong> cuvântului</td>
                            <td>der St<strong>au</strong> → die Staus · <span class="ro-translation">aglomerația</span></td>
                        </tr>
                        <tr><td>die Fr<strong>au</strong> → die Frauen · <span class="ro-translation">femeia</span></td></tr>
                        <tr><td>der Pf<strong>au</strong> → die Pfauen · <span class="ro-translation">păunul</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Reține</h4>
                <ul>
                    <li><strong>au</strong> = „au" (mereu)</li>
                    <li><strong>äu</strong> = „oi" (mereu)</li>
                    <li>La plural / diminutiv: <strong>au → äu</strong>, EXCEPȚIE: au + b, au la început, au la final</li>
                </ul>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;
