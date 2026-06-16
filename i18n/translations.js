// ===================== I18N TRANSLATIONS =====================
// Supported languages: 'it' (Italian), 'en' (English)

const TRANSLATIONS = {
  it: {
    // Language selector
    'lang.title':             '🌍 Benvenuto!',
    'lang.subtitle':          'Scegli la lingua / Choose your language',
    'lang.btn.it':            '🇮🇹 Italiano',
    'lang.btn.en':            '🇬🇧 English',

    // Page titles
    'page.title.choose':      '⚙️ Scegli il Genere',
    'page.title.game':        '🎉 Gender Reveal Game',

    // chosee_gender.html — choose section
    'choose.title':           '⚙️ Gender Reveal',
    'choose.subtitle':        '⚠️ Quale sarà il sesso del bimbo? ⚠️',
    'choose.names.title':     '👶 Chi sta aspettando il bimbo?',
    'choose.mom.label':       'Nome della mamma 👩',
    'choose.dad.label':       'Nome del papà 👨',
    'choose.btn.boy':         '👦 Maschietto',
    'choose.btn.girl':        '👧 Femminuccia',
    'choose.warn':            'Una volta scelto il genere verrà creato un QR code!',

    // chosee_gender.html — QR section
    'qr.title':               '🎉 QR Code Pronto!',
    'qr.boy.label':           '👦 Maschietto selezionato',
    'qr.girl.label':          '👧 Femminuccia selezionata',
    'qr.info':                'Scansiona il QR code.<br>Il gioco partirà automaticamente! 🚀',
    'qr.reset':               '🔄 Cambia scelta',

    // index.html — error screen
    'error.title':            '❌ Link non valido',
    'error.msg':              'Questo link non contiene un codice valido.<br>Chiedi a chi ha generato il QR di rifarlo!',

    // index.html — ready screen
    'ready.title':            '📱 Pronti?',
    'ready.welcome':          '💌 Oggi scopriamo il genere del bebè! Di {mom} e {dad}',
    'ready.msg':              'Premi Inizia per cominciare!',
    'ready.btn':              '🚀 Inizia!',

    // Phase 1 — Maze (sperm race)
    'phase1.intro.title':     '🏊‍♂️ La Corsa del Vermicello!',
    'phase1.intro.sub':       "Attraversa il labirinto fino all'ovetto!",
    'phase1.intro.warn':      '⚠️ 3 colpi dai virus = si ricomincia!',
    'phase1.hint':            '🏊 Attraversa il labirinto!',
    'phase1.win':             "💫 L'ovetto è stato fecondato!",

    // Quiz phase — intro screen
    'quiz.intro.title':       'Fase Questionario',
    'quiz.intro.sub1':        'Rispondi alle domande e scopri',
    'quiz.intro.sub2':        'cosa predicono per il tuo bebè!',

    // Quiz phase — question screen
    'quiz.progress':          'Domanda {current} di {total}',
    'quiz.tap':               '👆 Tocca per rispondere',

    // Quiz phase — result screen
    'quiz.result.title':      'Secondo le vostre risposte...',
    'quiz.result.boy':        'Potrebbe essere un MASCHIETTO!',
    'quiz.result.girl':       'Potrebbe essere una FEMMINUCCIA!',
    'quiz.result.disclaimer': "⚠️ Ma è solo un'ipotesi!",
    'quiz.tap.continue':      '👆 Tocca per continuare',

    // Quiz questions
    'quiz.q1':    'La mamma ha più voglia di...',
    'quiz.q1.a1': '🧂 Salato',
    'quiz.q1.a2': '🍰 Dolce',

    'quiz.q2':    "Com'è la pancia della mamma?",
    'quiz.q2.a1': '⬇️ Bassa e a punta',
    'quiz.q2.a2': '⬆️ Alta e rotonda',

    'quiz.q3':    'La pelle della mamma è...',
    'quiz.q3.a1': '✨ Luminosa e bella',
    'quiz.q3.a2': '😤 Ha qualche imperfezione',

    'quiz.q4':    'Il papà ha preso peso?',
    'quiz.q4.a1': "🍔 Sì, un po'!",
    'quiz.q4.a2': '🏃 No, come prima',

    'quiz.q5':    'I capelli della mamma sono...',
    'quiz.q5.a1': '💇 Più folti e lucenti',
    'quiz.q5.a2': "🪮 Un po' più sottili",

    'quiz.q6':    'La mamma preferisce dormire...',
    'quiz.q6.a1': '⬅️ Sul fianco sinistro',
    'quiz.q6.a2': '➡️ Sul fianco destro',

    'quiz.q7':    "L'umore della mamma è...",
    'quiz.q7.a1': '😌 Tranquillo e sereno',
    'quiz.q7.a2': "🎢 Un po' altalenante",

    'quiz.q8':    'Quanto è la frequenza cardiaca del bebè?',
    'quiz.q8.a1': '💓 Sopra i 140 battiti al minuto',
    'quiz.q8.a2': '💗 Sotto i 140 battiti al minuto',

    'quiz.q9':    'Di che colore è la pipì della mamma?',
    'quiz.q9.a1': '🟡 Giallo opaco',
    'quiz.q9.a2': '✨ Giallo brillante',

    // Phase 2 — Nurture fetus
    'phase2.intro.title':     'Prenditi cura del feto e fallo crescere!',
    'phase2.intro.sub':       'Accarezzalo, dagli da mangiare\ne proteggilo dai virus!',
    'phase2.hint':            '🤚 Accarezza  |  👆 Prendi cibo  |  👊 Colpisci virus',

    // Phase 3 — Reveal
    'phase3.stork':           'La cicogna sta arrivando!',
    'reveal.boy':             'È un MASCHIETTO!',
    'reveal.girl':            'È una FEMMINUCCIA!',
    'reveal.congrats':        '🎉 Congratulazioni! 🎉',
  },

  en: {
    // Language selector
    'lang.title':             '🌍 Welcome!',
    'lang.subtitle':          'Scegli la lingua / Choose your language',
    'lang.btn.it':            '🇮🇹 Italiano',
    'lang.btn.en':            '🇬🇧 English',

    // Page titles
    'page.title.choose':      '⚙️ Choose Gender',
    'page.title.game':        '🎉 Gender Reveal Game',

    // chosee_gender.html — choose section
    'choose.title':           '⚙️ Gender Reveal',
    'choose.subtitle':        "⚠️ What will the baby's gender be? ⚠️",
    'choose.names.title':     '👶 Who is waiting for the baby?',
    'choose.mom.label':       "Mom's name 👩",
    'choose.dad.label':       "Dad's name 👨",
    'choose.btn.boy':         '👦 Boy',
    'choose.btn.girl':        '👧 Girl',
    'choose.warn':            'Once the gender is chosen, a QR code will be created!',

    // chosee_gender.html — QR section
    'qr.title':               '🎉 QR Code Ready!',
    'qr.boy.label':           '👦 Boy selected',
    'qr.girl.label':          '👧 Girl selected',
    'qr.info':                'Scan the QR code.<br>The game will start automatically! 🚀',
    'qr.reset':               '🔄 Change choice',

    // index.html — error screen
    'error.title':            '❌ Invalid Link',
    'error.msg':              'This link does not contain a valid code.<br>Ask whoever generated the QR to create a new one!',

    // index.html — ready screen
    'ready.title':            '📱 Ready?',
    'ready.welcome':          '💌 Today we will discover the baby\'s gender! Of {mom} & {dad}',
    'ready.msg':              'Press Start to begin!',
    'ready.btn':              '🚀 Start!',

    // Phase 1 — Maze (sperm race)
    'phase1.intro.title':     '🏊‍♂️ The Sperm Race!',
    'phase1.intro.sub':       "Navigate the maze to reach the egg!",
    'phase1.intro.warn':      '⚠️ 3 virus hits = restart!',
    'phase1.hint':            '🏊 Navigate the maze!',
    'phase1.win':             '💫 The egg has been fertilized!',

    // Quiz phase — intro screen
    'quiz.intro.title':       'Quiz Phase',
    'quiz.intro.sub1':        'Answer the questions and discover',
    'quiz.intro.sub2':        "what they predict for your baby!",

    // Quiz phase — question screen
    'quiz.progress':          'Question {current} of {total}',
    'quiz.tap':               '👆 Tap to answer',

    // Quiz phase — result screen
    'quiz.result.title':      'According to your answers...',
    'quiz.result.boy':        'It could be a BOY!',
    'quiz.result.girl':       'It could be a GIRL!',
    'quiz.result.disclaimer': "⚠️ But it's just a prediction!",
    'quiz.tap.continue':      '👆 Tap to continue',

    // Quiz questions
    'quiz.q1':    'The mom is craving...',
    'quiz.q1.a1': '🧂 Salty',
    'quiz.q1.a2': '🍰 Sweet',

    'quiz.q2':    "How does the mom's belly look?",
    'quiz.q2.a1': '⬇️ Low and pointed',
    'quiz.q2.a2': '⬆️ High and round',

    'quiz.q3':    "The mom's skin is...",
    'quiz.q3.a1': '✨ Glowing and beautiful',
    'quiz.q3.a2': '😤 Has some blemishes',

    'quiz.q4':    'Has the dad gained weight?',
    'quiz.q4.a1': '🍔 Yes, a little!',
    'quiz.q4.a2': '🏃 No, same as before',

    'quiz.q5':    "The mom's hair is...",
    'quiz.q5.a1': '💇 Thicker and shinier',
    'quiz.q5.a2': '🪮 A bit thinner',

    'quiz.q6':    'The mom prefers to sleep...',
    'quiz.q6.a1': '⬅️ On the left side',
    'quiz.q6.a2': '➡️ On the right side',

    'quiz.q7':    "The mom's mood is...",
    'quiz.q7.a1': '😌 Calm and peaceful',
    'quiz.q7.a2': '🎢 A bit up and down',

    'quiz.q8':    "What is the baby's heart rate?",
    'quiz.q8.a1': '💓 Above 140 beats per minute',
    'quiz.q8.a2': '💗 Below 140 beats per minute',

    'quiz.q9':    "What's the color of the mom's pee?",
    'quiz.q9.a1': '🟡 Dull yellow',
    'quiz.q9.a2': '✨ Bright yellow',

    // Phase 2 — Nurture fetus
    'phase2.intro.title':     'Take care of the fetus and help it grow!',
    'phase2.intro.sub':       'Caress it, feed it\nand protect it from viruses!',
    'phase2.hint':            '🤚 Caress  |  👆 Pick food  |  👊 Hit virus',

    // Phase 3 — Reveal
    'phase3.stork':           'The stork is coming!',
    'reveal.boy':             "It's a BOY!",
    'reveal.girl':            "It's a GIRL!",
    'reveal.congrats':        '🎉 Congratulations! 🎉',
  }
};

// ===================== I18N CORE =====================
let _lang = localStorage.getItem('gr_lang') || null;

/**
 * Translate a key. Supports {placeholder} substitution.
 * @param {string} key
 * @param {Object} [vars]  e.g. { current: 3, total: 9 }
 * @returns {string}
 */
function T(key, vars) {
  const dict = TRANSLATIONS[_lang] || TRANSLATIONS['it'];
  let str = dict[key];
  if (str === undefined) {
    console.warn('[i18n] Missing key:', key, 'for lang:', _lang);
    str = key;
  }
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
  }
  return str;
}

/**
 * Apply translations to all [data-i18n] and [data-i18n-html] elements in the document.
 */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = T(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = T(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = T(el.getAttribute('data-i18n-placeholder'));
  });
  // Update page title if a key is set
  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey) document.title = T(titleKey);
}

/**
 * Set the active language, persist it, and apply translations.
 * @param {string} lang  'it' or 'en'
 */
function setLang(lang) {
  _lang = lang;
  localStorage.setItem('gr_lang', lang);
  applyTranslations();
}

/**
 * Get the currently active language code.
 * @returns {string}
 */
function getLang() {
  return _lang || 'it';
}
