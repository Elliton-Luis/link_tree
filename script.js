/**
 * ==========================================================================
 * Aethel OS - Minimalist Retro 3D Desktop Experience
 * ==========================================================================
 */

// 1. Catálogo Completo dos 14 Aplicativos
const APPS = [
  {
    id: "blog-aletheia",
    title: "Blog Aletheia",
    exe: "aletheia.exe",
    url: "https://blog-aletheia.vercel.app/",
    slogan: "Desperte sua mente e enxergue além das aparências",
    pitch: "Ensaios filosóficos provocativos e reflexões profundas sobre verdade, sociedade e a condição humana. Para quem recusa respostas fáceis.",
    badge: "🔥 Destaque Editorial",
    rating: "5.0 ★★★★★",
    tag: "Filosofia & Pensamento",
    icon: "🕯️",
    color: "#e63946"
  },
  {
    id: "rex-mundi",
    title: "Rex Mundi",
    exe: "rexmundi.exe",
    url: "https://rex-mundi.vercel.app/",
    slogan: "Governe impérios. Reescreva a história do mundo",
    pitch: "Um jogo de grande estratégia e conquista geopolítica onde cada jogada diplomática, econômica e militar decide o destino de impérios inteiros.",
    badge: "👑 Épico / Estratégia",
    rating: "4.9 ★★★★★",
    tag: "Grande Estratégia & RPG",
    icon: "👑",
    color: "#8338ec"
  },
  {
    id: "eclesia-rpg",
    title: "Eclesia RPG",
    exe: "eclesiarpg.exe",
    url: "https://eclesia-rpg.vercel.app/",
    slogan: "Sua lenda começa aqui. O chamado da aventura",
    pitch: "Mergulhe em um universo de RPG medieval repleto de combates estratégicos, lore expansivo e escolhas morais de tirar o fôlego.",
    badge: "⚔️ RPG Imersivo",
    rating: "5.0 ★★★★★",
    tag: "RPG & Aventura",
    icon: "⚔️",
    color: "#d90429"
  },
  {
    id: "catedra-sacra",
    title: "Cátedra Sacra",
    exe: "catedrasacra.exe",
    url: "https://catedra-sacra.vercel.app/",
    slogan: "Dois mil anos de sabedoria na palma da sua mão",
    pitch: "Acesso direto aos grandes clássicos da teologia patrística, tradição e filosofia ocidental. Eleve seu intelecto com as fontes originais.",
    badge: "🏛️ Sabedoria Nobre",
    rating: "5.0 ★★★★★",
    tag: "Teologia & Patrística",
    icon: "🏛️",
    color: "#457b9d"
  },
  {
    id: "anima-puritas",
    title: "Anima Puritas",
    exe: "animapuritas.exe",
    url: "https://anima-puritas.vercel.app/",
    slogan: "Paz mental e renovação espiritual em meio ao caos",
    pitch: "Seu santuário digital contra a poluição sonora e mental do mundo moderno. Cultive serenidade, foco puro e disciplina interior diária.",
    badge: "🕊️ Paz & Serenidade",
    rating: "4.9 ★★★★★",
    tag: "Espiritualidade & Mente",
    icon: "🕊️",
    color: "#3a86ff"
  },
  {
    id: "leitura-tau",
    title: "Leitura Tau",
    exe: "leituratau.exe",
    url: "https://leitura-tau.vercel.app/",
    slogan: "Menos distração superficial. Mais profundidade",
    pitch: "Uma experiência de leitura focada e tipografia sob medida, livre dos algoritmos que drenam sua atenção. Retome o prazer de ler de verdade.",
    badge: "📖 Foco Absoluto",
    rating: "5.0 ★★★★★",
    tag: "Leitura Contemplativa",
    icon: "📖",
    color: "#b08968"
  },
  {
    id: "oratio-rosarii",
    title: "Oratio Rosarii",
    exe: "rosarii.exe",
    url: "https://oratio-rosarii.vercel.app/",
    slogan: "Transforme a oração diária em um hábito inabalável",
    pitch: "O companheiro definitivo para rezar o Santo Rosário. Meditações ilustradas, mistérios do dia e suporte visual para aprofundar sua devoção.",
    badge: "📿 Devoção Viva",
    rating: "5.0 ★★★★★",
    tag: "Oração & Devoção",
    icon: "📿",
    color: "#6c5ce7"
  },
  {
    id: "epifania-notas",
    title: "Epifania Notas",
    exe: "epifania.exe",
    url: "https://epifania-notas.vercel.app/",
    slogan: "Nunca mais perca uma ideia genial por falta de velocidade",
    pitch: "Capture insights, pensamentos relâmpago e epifanias no exato segundo em que surgem. Interface instantânea, minimalista e sem atritos.",
    badge: "💡 Produtividade Ágil",
    rating: "4.9 ★★★★★",
    tag: "Anotações Instantâneas",
    icon: "💡",
    color: "#e9c46a"
  },
  {
    id: "compasso-money",
    title: "Compasso Money",
    exe: "compasso.exe",
    url: "https://compasso-money.vercel.app/",
    slogan: "Assuma o controle total do seu dinheiro e viva livre",
    pitch: "A bússola que descomplica sua vida financeira. Saiba exatamente onde cortar custos, visualize metas e construa prosperidade com clareza.",
    badge: "🧭 Gestão Financeira",
    rating: "4.9 ★★★★★",
    tag: "Finanças Pessoais",
    icon: "🧭",
    color: "#2a9d8f"
  },
  {
    id: "momento-vita",
    title: "Momento Vita",
    exe: "momentovita.exe",
    url: "https://momento-vita.vercel.app/",
    slogan: "Lembre-se de que o tempo passa. Viva com urgência e honra",
    pitch: "Inspirado no princípio de Memento Mori, transforme sua relação com o tempo. Construa hábitos fortes e pare de adiar o que realmente importa.",
    badge: "⏳ Memento Mori",
    rating: "5.0 ★★★★★",
    tag: "Hábitos & Rotina",
    icon: "⏳",
    color: "#e76f51"
  },
  {
    id: "evo-quest",
    title: "Evo Quest",
    exe: "evoquest.exe",
    url: "https://evo-quest.vercel.app/",
    slogan: "Transforme suas tarefas diárias em um jogo épico",
    pitch: "Gamifique sua vida real: cumpra objetivos do dia a dia, suba de nível, derrote a procrastinação e receba recompensas de pura dopamina positiva.",
    badge: "🎯 Gamificação Pura",
    rating: "4.8 ★★★★★",
    tag: "Evolução & Metas",
    icon: "🎯",
    color: "#f72585"
  },
  {
    id: "exercitium",
    title: "Exercitium",
    exe: "exercitium.exe",
    url: "https://exercitium.vercel.app/",
    slogan: "Corpo forte, mente disciplinada, energia sem limites",
    pitch: "O guia prático e rigoroso para transformar seu corpo através de rotinas de treino consistentes. Sem desculpas: puro rendimento atlético.",
    badge: "🛡️ Força & Disciplina",
    rating: "4.9 ★★★★★",
    tag: "Treino & Saúde",
    icon: "🛡️",
    color: "#4361ee"
  },
  {
    id: "codice-quiz",
    title: "Códice Quiz",
    exe: "codicequiz.exe",
    url: "https://codice-quiz.vercel.app/",
    slogan: "Teste sua erudição e comprove sua inteligência",
    pitch: "Perguntas desafiadoras de cultura geral, história, teologia e sabedoria clássica. Um teste intelectual envolvente que separa curiosos de eruditos.",
    badge: "📜 Desafio Intelectual",
    rating: "4.8 ★★★★★",
    tag: "Quiz & Trivia",
    icon: "📜",
    color: "#d4a373"
  },
  {
    id: "estuda-links",
    title: "Estuda Links",
    exe: "estudalinks.exe",
    url: "https://estuda-links.vercel.app/",
    slogan: "O mapa do tesouro para dominar qualquer matéria",
    pitch: "A melhor curadoria de links, recursos didáticos e rotas de aprendizagem da internet reunidos em um só lugar. Aprenda mais rápido com o melhor material.",
    badge: "🔗 Curadoria de Ouro",
    rating: "5.0 ★★★★★",
    tag: "Rotas de Aprendizado",
    icon: "🔗",
    color: "#00b4d8"
  }
];

const PROFILE = {
  name: "Aethel",
  title: "Desenvolvedor & Criador de Sistemas",
  bio: "Projetos, ensaios & criações focadas em interfaces autônomas, exploração cognitiva e computação artesanal.",
  github: "https://github.com/Elliton-Luis"
};

// Estado global do SO
const SystemState = {
  highestZIndex: 100,
  soundEffectsEnabled: true,
  audioCtx: null,
  activeWindowId: "win-profile",
  isCompiz3d: true,
  music: {
    isPlaying: false,
    interval: null,
    volume: 0.035,
    seconds: 0,
    noteIndex: 0,
    currentTrackIndex: 0,
    pausedByVisibility: false
  }
};

// --------------------------------------------------------------------------
// 2. Sistema de Áudio (Web Audio API Synthesizer)
// --------------------------------------------------------------------------
function getAudioContext() {
  if (!SystemState.audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      SystemState.audioCtx = new AudioContext();
    }
  }
  if (SystemState.audioCtx && SystemState.audioCtx.state === 'suspended') {
    SystemState.audioCtx.resume();
  }
  return SystemState.audioCtx;
}

// Efeitos de clique e janela
function playRetroSound(type) {
  if (!SystemState.soundEffectsEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.035);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      osc.start(now);
      osc.stop(now + 0.035);
    } else if (type === "open") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(659.25, now + 0.06);
      osc.frequency.setValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === "close") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(500, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    console.debug("Sound suppressed", e);
  }
}

// --------------------------------------------------------------------------
// 3. Sintetizador de Música 16-Bit (5 Faixas de 30s em Tons Diferentes)
// --------------------------------------------------------------------------
const N = {
  _: 0,
  C1: 32.70, D1: 36.71, E1: 41.20, F1: 43.65, G1: 49.00, A1: 55.00, B1: 61.74,
  C2: 65.41, Cs2: 69.30, D2: 73.42, Ds2: 77.78, E2: 82.41, F2: 87.31, Fs2: 92.50, G2: 98.00, Gs2: 103.83, A2: 110.00, As2: 116.54, B2: 123.47,
  C3: 130.81, Cs3: 138.59, D3: 146.83, Ds3: 155.56, E3: 164.81, F3: 174.61, Fs3: 185.00, G3: 196.00, Gs3: 207.65, A3: 220.00, As3: 233.08, B3: 246.94,
  C4: 261.63, Cs4: 277.18, D4: 293.66, Ds4: 311.13, E4: 329.63, F4: 349.23, Fs4: 369.99, G4: 392.00, Gs4: 415.30, A4: 440.00, As4: 466.16, B4: 493.88,
  C5: 523.25, Cs5: 554.37, D5: 587.33, Ds5: 622.25, E5: 659.25, F5: 698.46, Fs5: 739.99, G5: 783.99, Gs5: 830.61, A5: 880.00, As5: 932.33, B5: 987.77,
  C6: 1046.50, Cs6: 1108.73, D6: 1174.66, Ds6: 1244.51, E6: 1318.51, F6: 1396.91, Fs6: 1479.98, G6: 1567.98, Gs6: 1661.22, A6: 1760.00, As6: 1864.66, B6: 1975.53
};

function build16BitTracks() {
  function makeTrack(id, title, keyName, genre, tempoMs, totalSteps, composer) {
    const pattern = [];
    for (let s = 0; s < totalSteps; s++) {
      pattern.push(composer(s, Math.floor(s / 8), s % 8));
    }
    return { id, title, keyName, genre, tempoMs, durationSec: (totalSteps * tempoMs) / 1000, pattern };
  }

  // 1. Aethel Odyssey (RPG Épico - Dó Maior / Lá Menor, 30.08s)
  const track1 = makeTrack("aethel-odyssey", "Aethel Odyssey (RPG Épico)", "Dó Maior / Lá Menor", "Heroic JRPG Overworld", 235, 128, (s, bar, bStep) => {
    let bass = N.C2, harm = N.G3;
    if (bar === 0 || bar === 4) { bass = N.C2; harm = bStep % 2 === 0 ? N.G3 : N.E4; }
    else if (bar === 1) { bass = N.G2; harm = bStep % 2 === 0 ? N.D4 : N.B3; }
    else if (bar === 2 || bar === 8 || bar === 14) { bass = N.A2; harm = bStep % 2 === 0 ? N.E4 : N.C4; }
    else if (bar === 3 || bar === 6 || bar === 9 || bar === 12) { bass = N.F2; harm = bStep % 2 === 0 ? N.C4 : N.A3; }
    else if (bar === 5 || bar === 11) { bass = N.E2; harm = bStep % 2 === 0 ? N.B3 : N.G3; }
    else if (bar === 7 || bar === 10 || bar === 13) { bass = N.G2; harm = bStep % 2 === 0 ? N.D4 : N.B3; }
    else if (bar === 15) { bass = N.C2; harm = bStep % 2 === 0 ? N.C4 : N.G4; }

    const leadSeq = [
      N.C5, N.E5, N.G5, N.C6,  N.B5, N.G5, N.E5, N.G5,
      N.D5, N.G5, N.B5, N.D6,  N.C6, N.B5, N.A5, N.G5,
      N.A5, N.C6, N.E6, N.C6,  N.B5, N.A5, N.G5, N.E5,
      N.F5, N.A5, N.C6, N.D6,  N.C6, N._,  N.G5, N._,
      N.C5, N.G5, N.C6, N.D6,  N.E6, N.D6, N.C6, N.G5,
      N.E5, N.G5, N.B5, N.E6,  N.D6, N.C6, N.B5, N.A5,
      N.A5, N.C6, N.F6, N.E6,  N.D6, N.C6, N.D6, N.E6,
      N.D6, N.B5, N.G5, N.D5,  N.G5, N.A5, N.B5, N.D6,
      N.E6, N.C6, N.A5, N.E5,  N.A5, N.B5, N.C6, N.E6,
      N.F6, N.E6, N.D6, N.C6,  N.A5, N.F5, N.A5, N.C6,
      N.D6, N.C6, N.B5, N.G5,  N.B5, N.D6, N.F6, N.E6,
      N.E6, N.B5, N.G5, N.E5,  N.G5, N.B5, N.D6, N.B5,
      N.C6, N.A5, N.F5, N.A5,  N.C6, N.D6, N.E6, N.F6,
      N.G6, N.F6, N.E6, N.D6,  N.B5, N.G5, N.B5, N.D6,
      N.E6, N.D6, N.C6, N.A5,  N.C6, N.D6, N.E6, N.G6,
      N.C6, N._,  N.G5, N._,   N.E5, N._,  N.C5, N._
    ];
    let perc = (bStep === 0 || bStep === 4) ? "kick" : (bStep === 2 || bStep === 6) ? "snare" : "hihat";
    return { lead: leadSeq[s % leadSeq.length], harm, bass, perc };
  });

  // 2. Cyber Sanctuary (Neon City - Ré Menor / Fá Maior, 30.00s)
  const track2 = makeTrack("cyber-sanctuary", "Cyber Sanctuary (Neon City)", "Ré Menor / Fá Maior", "16-bit Cyberpunk / Synthwave", 250, 120, (s, bar, bStep) => {
    let bass = N.D2, harm = N.A3;
    if (bar < 2 || (bar >= 6 && bar < 8) || bar === 14) {
      bass = bStep % 4 === 0 ? N.D2 : N.D3; harm = bStep % 2 === 0 ? N.F4 : N.A4;
    } else if (bar >= 2 && bar < 4) {
      bass = bStep % 4 === 0 ? N.As2 : N.As3; harm = bStep % 2 === 0 ? N.D4 : N.F4;
    } else if (bar >= 4 && bar < 6) {
      bass = bStep % 4 === 0 ? N.C2 : N.C3; harm = bStep % 2 === 0 ? N.E4 : N.G4;
    } else if (bar >= 8 && bar < 10) {
      bass = bStep % 4 === 0 ? N.F2 : N.F3; harm = bStep % 2 === 0 ? N.A4 : N.C5;
    } else if (bar >= 10 && bar < 12) {
      bass = bStep % 4 === 0 ? N.G2 : N.G3; harm = bStep % 2 === 0 ? N.As4 : N.D5;
    } else {
      bass = bStep < 4 ? N.As2 : N.C3; harm = bStep % 2 === 0 ? N.F4 : N.E4;
    }

    const leadSeq = [
      N.D5, N._,  N.F5, N.G5,  N.A5, N.D6, N.C6, N.A5,
      N.F5, N.D5, N.F5, N.G5,  N.A5, N.G5, N.F5, N.D5,
      N.D5, N.F5, N.As5, N.C6, N.D6, N.C6, N.As5, N.A5,
      N.G5, N.A5, N.As5, N.C6, N.As5, N.A5, N.G5, N.F5,
      N.E5, N.G5, N.C6, N.D6,  N.E6, N.D6, N.C6, N.G5,
      N.A5, N.Gs5, N.G5, N.F5, N.D5, N.F5, N.A5, N.C6,
      N.D6, N.A5, N.F5, N.D5,  N.F5, N.G5, N.A5, N.C6,
      N.D6, N.E6, N.F6, N.E6,  N.D6, N.C6, N.A5, N.G5,
      N.A5, N.C6, N.F6, N.E6,  N.C6, N.A5, N.C6, N.E6,
      N.F6, N.E6, N.C6, N.A5,  N.F5, N.A5, N.C6, N.D6,
      N.D6, N.As5, N.G5, N.D5, N.G5, N.As5, N.D6, N.F6,
      N.G6, N.F6, N.D6, N.As5, N.G5, N.F5, N.G5, N.A5,
      N.As5, N.C6, N.D6, N.F6, N.E6, N.D6, N.C6, N.A5,
      N.G5, N.A5, N.C6, N.E6,  N.D6, N._,  N.A5, N._,
      N.D5, N.F5, N.A5, N.D6,  N._,  N._,  N._,  N._
    ];
    let perc = (bStep === 0 || bStep === 3) ? "kick" : (bStep === 2 || bStep === 6) ? "snare" : "hihat";
    return { lead: leadSeq[s % leadSeq.length], harm, bass, perc };
  });

  // 3. Castle of Shadows (Gothic Boss - Mi Menor, 29.92s)
  const track3 = makeTrack("castle-shadows", "Castle of Shadows (Gothic Boss)", "Mi Menor", "16-bit Gothic Action / Castlevania", 220, 136, (s, bar, bStep) => {
    let bass = N.E2, harm = N.B3;
    if (bar === 0 || bar === 3 || bar === 4 || bar === 10 || bar === 15 || bar === 16) {
      bass = bStep % 2 === 0 ? N.E2 : N.E3; harm = bStep % 2 === 0 ? N.G4 : N.B4;
    } else if (bar === 1 || bar === 6 || bar === 12) {
      bass = bStep % 2 === 0 ? N.C2 : N.C3; harm = bStep % 2 === 0 ? N.E4 : N.G4;
    } else if (bar === 2 || bar === 7 || bar === 9 || bar === 13) {
      bass = bStep % 2 === 0 ? N.D2 : N.D3; harm = bStep % 2 === 0 ? N.Fs4 : N.A4;
    } else if (bar === 5) {
      bass = bStep % 2 === 0 ? N.B1 : N.B2; harm = bStep % 2 === 0 ? N.D4 : N.Fs4;
    } else if (bar === 8) {
      bass = bStep % 2 === 0 ? N.G2 : N.G3; harm = bStep % 2 === 0 ? N.B4 : N.D5;
    } else if (bar === 11 || bar === 14) {
      bass = bStep % 2 === 0 ? N.B1 : N.B2; harm = bStep % 2 === 0 ? N.Ds4 : N.A4;
    }

    const leadSeq = [
      N.E5, N.G5, N.B5, N.E6,  N.D6, N.B5, N.G5, N.E5,
      N.C6, N.B5, N.A5, N.G5,  N.Fs5, N.G5, N.A5, N.C6,
      N.D6, N.C6, N.B5, N.A5,  N.G5, N.A5, N.B5, N.D6,
      N.E6, N.D6, N.B5, N.G5,  N.E5, N.G5, N.B5, N.D6,
      N.E6, N.Fs6, N.G6, N.Fs6, N.E6, N.D6, N.C6, N.B5,
      N.B5, N.D6, N.Fs6, N.D6,  N.B5, N.A5, N.G5, N.Fs5,
      N.G5, N.A5, N.B5, N.C6,   N.D6, N.C6, N.B5, N.A5,
      N.A5, N.B5, N.C6, N.D6,   N.E6, N.Fs6, N.G6, N.A6,
      N.B6, N.G6, N.D6, N.B5,  N.D6, N.G6, N.B6, N.A6,
      N.A6, N.Fs6, N.D6, N.A5, N.D6, N.Fs6, N.A6, N.G6,
      N.G6, N.E6, N.B5, N.G5,  N.B5, N.E6, N.G6, N.Fs6,
      N.Fs6, N.Ds6, N.B5, N.A5, N.B5, N.Ds6, N.Fs6, N.A6,
      N.G6, N.E6, N.C6, N.G5,  N.C6, N.E6, N.G6, N.Fs6,
      N.Fs6, N.D6, N.A5, N.Fs5, N.A5, N.D6, N.Fs6, N.E6,
      N.Ds6, N.B5, N.A5, N.Fs5, N.Ds5, N.Fs5, N.A5, N.B5,
      N.E6, N.B5, N.G5, N.E5,  N.G5, N.B5, N.E6, N.G6,
      N.E6, N._,  N.B5, N._,   N.G5, N._,  N.E5, N._
    ];
    let perc = (bStep === 0 || bStep === 4) ? "kick" : (bStep === 2 || bStep === 6) ? "snare" : "hihat";
    return { lead: leadSeq[s % leadSeq.length], harm, bass, perc };
  });

  // 4. Celestial Highlands (Fantasia - Sol Maior, 30.00s)
  const track4 = makeTrack("celestial-highlands", "Celestial Highlands (Fantasia)", "Sol Maior", "Pastoral Fantasy Meadow / Zelda ALttP", 250, 120, (s, bar, bStep) => {
    let bass = N.G2, harm = N.D4;
    if (bar === 0 || bar === 4 || bar === 10 || bar === 14) {
      bass = N.G2; harm = bStep % 2 === 0 ? N.B3 : N.D4;
    } else if (bar === 1 || bar === 7 || bar === 11 || bar === 13) {
      bass = N.D2; harm = bStep % 2 === 0 ? N.A3 : N.Fs4;
    } else if (bar === 2 || bar === 8) {
      bass = N.E2; harm = bStep % 2 === 0 ? N.G3 : N.B3;
    } else if (bar === 3 || bar === 6 || bar === 9 || bar === 12) {
      bass = N.C2; harm = bStep % 2 === 0 ? N.E4 : N.G4;
    } else if (bar === 5) {
      bass = N.B1; harm = bStep % 2 === 0 ? N.D4 : N.Fs4;
    }

    const leadSeq = [
      N.G5, N.A5, N.B5, N.D6,  N.B5, N.G5, N.A5, N.B5,
      N.A5, N.Fs5, N.D5, N.Fs5, N.A5, N.B5, N.C6, N.A5,
      N.G5, N.E5, N.G5, N.B5,  N.G5, N.E5, N.G5, N.A5,
      N.E5, N.G5, N.C6, N.E6,  N.D6, N.C6, N.B5, N.A5,
      N.G5, N.B5, N.D6, N.G6,  N.Fs6, N.E6, N.D6, N.B5,
      N.D6, N.B5, N.Fs5, N.D5, N.Fs5, N.A5, N.B5, N.D6,
      N.E6, N.D6, N.C6, N.B5,  N.A5, N.G5, N.A5, N.B5,
      N.A5, N.D5, N.Fs5, N.A5, N.D6, N.E6, N.Fs6, N.A6,
      N.G6, N.E6, N.D6, N.B5,  N.G5, N.B5, N.D6, N.E6,
      N.E6, N.C6, N.A5, N.G5,  N.E5, N.G5, N.A5, N.C6,
      N.B5, N.G5, N.D5, N.G5,  N.B5, N.D6, N.G6, N.Fs6,
      N.Fs6, N.D6, N.A5, N.Fs5, N.D5, N.Fs5, N.A5, N.C6,
      N.B5, N.C6, N.D6, N.E6,  N.G6, N.Fs6, N.E6, N.D6,
      N.D6, N.B5, N.A5, N.G5,  N.A5, N.B5, N.C6, N.D6,
      N.G5, N._,  N.D5, N._,   N.B4, N._,  N.G4, N._
    ];
    let perc = bStep === 0 ? "kick" : bStep === 4 ? "snare" : (bStep % 2 === 0 ? "hihat" : null);
    return { lead: leadSeq[s % leadSeq.length], harm, bass, perc };
  });

  // 5. Midnight Reverie (Synthwave - Si Menor / Ré Maior, 30.00s)
  const track5 = makeTrack("midnight-reverie", "Midnight Reverie (Synthwave)", "Si Menor / Ré Maior", "16-bit Dreamy Chill / Aquatic Ambiance", 300, 100, (s, bar, bStep) => {
    let bass = N.B1, harm = N.Fs3;
    const barFloat = s / 8;
    if (barFloat < 2) { bass = N.B1; harm = bStep % 2 === 0 ? N.D4 : N.Fs4; }
    else if (barFloat < 4) { bass = N.G1; harm = bStep % 2 === 0 ? N.B3 : N.D4; }
    else if (barFloat < 6) { bass = N.D2; harm = bStep % 2 === 0 ? N.Fs4 : N.A4; }
    else if (barFloat < 8) { bass = N.A1; harm = bStep % 2 === 0 ? N.Cs4 : N.E4; }
    else if (barFloat < 10) { bass = N.B1; harm = bStep % 2 === 0 ? N.D4 : N.Fs4; }
    else if (barFloat < 11.5) { bass = N.G1; harm = bStep % 2 === 0 ? N.B3 : N.E4; }
    else { bass = N.A1; harm = bStep % 2 === 0 ? N.Cs4 : N.Fs4; }

    const leadSeq = [
      N.Fs5, N.B5, N.D6, N.Fs6, N.E6, N.D6, N.B5, N.A5,
      N.B5, N.D6, N.Fs5, N.A5,  N.G5, N.Fs5, N.D5, N.B4,
      N.D5, N.Fs5, N.A5, N.D6,  N.Cs6, N.B5, N.A5, N.Fs5,
      N.E5, N.Fs5, N.A5, N.Cs6, N.B5, N.A5, N.Fs5, N.E5,
      N.D5, N.Fs5, N.B5, N.D6,  N.Fs6, N.E6, N.D6, N.B5,
      N.E5, N.G5, N.B5, N.E6,   N.D6, N.B5, N.G5, N.E5,
      N.Fs5, N.A5, N.Cs6, N.Fs6, N.E6, N.Cs6, N.A5, N.Fs5,
      N.G5, N.B5, N.D6, N.G6,   N.Fs6, N.D6, N.B5, N.A5,
      N.A5, N.D6, N.Fs6, N.A6,  N.G6, N.Fs6, N.E6, N.D6,
      N.Cs6, N.A5, N.E5, N.Cs5, N.E5, N.A5, N.Cs6, N.E6,
      N.D6, N.B5, N.Fs5, N.D5,  N.Fs5, N.B5, N.D6, N.Fs6,
      N.G6, N.Fs6, N.D6, N.B5,  N.G5, N.A5, N.B5, N.Cs6,
      N.B5, N._,  N.Fs5, N._,   N.D5, N._,  N.B4, N._
    ];
    let perc = bStep === 0 ? "kick" : bStep === 4 ? "snare" : (bStep === 2 || bStep === 6 ? "hihat" : null);
    return { lead: leadSeq[s % leadSeq.length], harm, bass, perc };
  });

  return [track1, track2, track3, track4, track5];
}

const TRACKS_16BIT = build16BitTracks();

function getCurrentTrack() {
  const idx = SystemState.music.currentTrackIndex || 0;
  return TRACKS_16BIT[(idx % TRACKS_16BIT.length + TRACKS_16BIT.length) % TRACKS_16BIT.length];
}

// Bateria 16-Bit Estilo Console (Kick, Snare com ruído, Hi-hat)
function play16BitDrum(ctx, type, now, masterVol, dest) {
  try {
    if (type === "kick") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(36, now + 0.08);

      gain.gain.setValueAtTime(masterVol * 1.5, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(dest);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "snare") {
      const bufferSize = Math.floor(ctx.sampleRate * 0.07);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "highpass";
      noiseFilter.frequency.setValueAtTime(1000, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(masterVol * 0.75, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(dest);
      noise.start(now);
    } else if (type === "hihat") {
      const bufferSize = Math.floor(ctx.sampleRate * 0.03);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.setValueAtTime(6500, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(masterVol * 0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(dest);
      noise.start(now);
    }
  } catch (e) {
    console.debug("Drum error suppressed", e);
  }
}

// Reprodução polifônica 16-bit por passo (Lead + Harmonia + Baixo + Percussão)
function play16BitStep(track, stepIndex) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const step = track.pattern[stepIndex % track.pattern.length];
    if (!step) return;

    const now = ctx.currentTime;
    const dur = (track.tempoMs / 1000) * 0.95;
    const masterVol = SystemState.music.volume || 0.035;

    // Filtro DAC que simula a saída analógica clássica dos chips de 16 bits (SNES SPC700 / Genesis)
    const dacFilter = ctx.createBiquadFilter();
    dacFilter.type = "lowpass";
    dacFilter.frequency.setValueAtTime(3400, now);
    dacFilter.Q.setValueAtTime(1.1, now);
    dacFilter.connect(ctx.destination);

    // 1. LEAD VOICE (Melodia Principal: Onda Quadrada com brilho Sawtooth e chorus de +5 cents)
    if (step.lead && step.lead > 0) {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const leadGain = ctx.createGain();

      osc1.type = "square";
      osc2.type = "sawtooth";
      osc1.frequency.setValueAtTime(step.lead, now);
      osc2.frequency.setValueAtTime(step.lead, now);
      osc2.detune.setValueAtTime(5, now);

      leadGain.gain.setValueAtTime(0.0001, now);
      leadGain.gain.linearRampToValueAtTime(masterVol * 0.95, now + 0.012);
      leadGain.gain.exponentialRampToValueAtTime(masterVol * 0.65, now + dur * 0.35);
      leadGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc1.connect(leadGain);
      osc2.connect(leadGain);
      leadGain.connect(dacFilter);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + dur);
      osc2.stop(now + dur);
    }

    // 2. HARMONY VOICE (Contra-canto / Acordes)
    if (step.harm && step.harm > 0) {
      const harmOsc = ctx.createOscillator();
      const harmGain = ctx.createGain();
      harmOsc.type = "triangle";
      harmOsc.frequency.setValueAtTime(step.harm, now);

      harmGain.gain.setValueAtTime(0.0001, now);
      harmGain.gain.linearRampToValueAtTime(masterVol * 0.55, now + 0.02);
      harmGain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 0.85);

      harmOsc.connect(harmGain);
      harmGain.connect(dacFilter);

      harmOsc.start(now);
      harmOsc.stop(now + dur * 0.85);
    }

    // 3. BASSLINE VOICE (Sub-grave com presença analógica)
    if (step.bass && step.bass > 0) {
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bassOsc.type = "triangle";
      bassOsc.frequency.setValueAtTime(step.bass, now);

      bassGain.gain.setValueAtTime(masterVol * 1.15, now);
      bassGain.gain.exponentialRampToValueAtTime(masterVol * 0.55, now + 0.05);
      bassGain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 1.1);

      bassOsc.connect(bassGain);
      bassGain.connect(dacFilter);

      bassOsc.start(now);
      bassOsc.stop(now + dur * 1.1);
    }

    // 4. PERCUSSÃO 16-BIT
    if (step.perc) {
      play16BitDrum(ctx, step.perc, now, masterVol, dacFilter);
    }
  } catch (e) {
    console.debug("16-bit step error suppressed", e);
  }
}

function start16BitMusic() {
  if (SystemState.music.isPlaying) return;
  getAudioContext();
  SystemState.music.isPlaying = true;
  updateMusicUI(true);

  if (SystemState.music.interval) {
    clearInterval(SystemState.music.interval);
    SystemState.music.interval = null;
  }

  const runLoop = () => {
    const currentTrack = getCurrentTrack();
    SystemState.music.interval = setInterval(() => {
      if (!SystemState.music.isPlaying) return;

      const track = getCurrentTrack();
      play16BitStep(track, SystemState.music.noteIndex);
      SystemState.music.noteIndex = (SystemState.music.noteIndex + 1) % track.pattern.length;

      // Visualizador AethelAmp com barras responsivas
      const vizBars = document.querySelectorAll(".v-bar");
      vizBars.forEach(bar => {
        const h = Math.floor(Math.random() * 18) + 4;
        bar.style.height = `${h}px`;
      });

      SystemState.music.seconds += track.tempoMs / 1000;
      if (SystemState.music.seconds >= track.durationSec) {
        SystemState.music.seconds = 0;
      }

      const totalSec = Math.floor(SystemState.music.seconds);
      const m = String(Math.floor(totalSec / 60)).padStart(2, "0");
      const s = String(totalSec % 60).padStart(2, "0");
      const timerEl = document.getElementById("amp-timer");
      if (timerEl) timerEl.textContent = `${m}:${s} / 00:30`;
    }, currentTrack.tempoMs);
  };

  runLoop();
}

function pause16BitMusic() {
  SystemState.music.isPlaying = false;
  if (SystemState.music.interval) {
    clearInterval(SystemState.music.interval);
    SystemState.music.interval = null;
  }
  const vizBars = document.querySelectorAll(".v-bar");
  vizBars.forEach(bar => (bar.style.height = "3px"));
  updateMusicUI(false);
}

function toggle16BitMusic() {
  if (SystemState.music.isPlaying) {
    pause16BitMusic();
  } else {
    start16BitMusic();
  }
}

function change16BitTrack(index, autoPlay = null) {
  const wasPlaying = autoPlay !== null ? autoPlay : SystemState.music.isPlaying;
  pause16BitMusic();

  SystemState.music.currentTrackIndex = ((index % TRACKS_16BIT.length) + TRACKS_16BIT.length) % TRACKS_16BIT.length;
  SystemState.music.noteIndex = 0;
  SystemState.music.seconds = 0;

  const currentTrack = getCurrentTrack();
  const trackNameEl = document.getElementById("amp-track-name");
  const trackSelect = document.getElementById("amp-track-select");
  const timerEl = document.getElementById("amp-timer");

  if (trackNameEl) {
    trackNameEl.textContent = `♪ [${SystemState.music.currentTrackIndex + 1}/5] ${currentTrack.title} [${currentTrack.keyName}] ♪`;
  }
  if (trackSelect) {
    trackSelect.value = String(SystemState.music.currentTrackIndex);
  }
  if (timerEl) {
    timerEl.textContent = "00:00 / 00:30";
  }

  updateMusicUI(wasPlaying);

  if (wasPlaying) {
    start16BitMusic();
  }
}

function next16BitTrack() {
  playRetroSound("click");
  change16BitTrack(SystemState.music.currentTrackIndex + 1);
}

function prev16BitTrack() {
  playRetroSound("click");
  change16BitTrack(SystemState.music.currentTrackIndex - 1);
}

// Aliases para compatibilidade total com o restante da interface
const start8BitMusic = start16BitMusic;
const pause8BitMusic = pause16BitMusic;
const toggle8BitMusic = toggle16BitMusic;

function updateMusicUI(playing) {
  const ampPlayBtn = document.getElementById("amp-play-pause-btn");
  const chipBtn = document.getElementById("music-chip-btn");
  const chipLabel = document.getElementById("music-chip-label");
  const ampChip = document.getElementById("amp-status-chip");
  const trackSelect = document.getElementById("amp-track-select");
  const trackNameEl = document.getElementById("amp-track-name");
  const currentTrack = getCurrentTrack();

  if (trackSelect) {
    trackSelect.value = String(SystemState.music.currentTrackIndex);
  }
  if (trackNameEl) {
    trackNameEl.textContent = `♪ [${SystemState.music.currentTrackIndex + 1}/5] ${currentTrack.title} [${currentTrack.keyName}] ♪`;
  }

  if (playing) {
    if (ampPlayBtn) ampPlayBtn.textContent = "❚❚ Pausar";
    if (chipBtn) chipBtn.textContent = "❚❚";
    if (chipLabel) chipLabel.textContent = `16-bit: [${SystemState.music.currentTrackIndex + 1}/5] Tocando`;
    if (ampChip) ampChip.textContent = "ESTADO: TOCANDO";
  } else {
    if (ampPlayBtn) ampPlayBtn.textContent = "► Iniciar";
    if (chipBtn) chipBtn.textContent = "►";
    if (chipLabel) chipLabel.textContent = "16-bit: Desligado";
    if (ampChip) ampChip.textContent = "ESTADO: PAUSADO";
  }
}

// --------------------------------------------------------------------------
// 3.1 Page Visibility API - Pausa a sessão e o áudio ao sair da aba
// --------------------------------------------------------------------------
function initPageVisibility() {
  function handleVisibilityChange() {
    if (document.hidden) {
      // Usuário saiu da aba ou minimizou o navegador
      if (SystemState.music.isPlaying) {
        SystemState.music.pausedByVisibility = true;
        pause8BitMusic();
      }

      // Suspende AudioContext para zerar consumo de CPU e evitar ruídos
      if (SystemState.audioCtx && SystemState.audioCtx.state === "running") {
        try {
          SystemState.audioCtx.suspend();
        } catch (e) {
          console.debug("AudioContext suspend suppressed", e);
        }
      }
    } else {
      // Usuário retornou à aba ativa
      if (SystemState.audioCtx && SystemState.audioCtx.state === "suspended") {
        try {
          SystemState.audioCtx.resume();
        } catch (e) {
          console.debug("AudioContext resume suppressed", e);
        }
      }

      // Retoma automaticamente apenas se estava tocando antes de mudar de aba
      if (SystemState.music.pausedByVisibility) {
        SystemState.music.pausedByVisibility = false;
        start8BitMusic();
      }
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);

  // Fallbacks de ciclo de vida de página
  window.addEventListener("pagehide", () => {
    if (SystemState.music.isPlaying) {
      SystemState.music.pausedByVisibility = true;
      pause8BitMusic();
    }
  });

  window.addEventListener("pageshow", () => {
    if (SystemState.music.pausedByVisibility && !document.hidden) {
      SystemState.music.pausedByVisibility = false;
      start8BitMusic();
    }
  });
}

// --------------------------------------------------------------------------
// 4. Inicialização Principal do Sistema
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderDesktopApps();
  renderExplorerProjects();
  renderStartMenuPrograms();
  initWindowsManager();
  initDesktopIcons();
  initStartMenu();
  initSystemClock();
  initTerminal();
  initAethelAmpControls();
  initTabs();
  init3DParallax();
  initNotepad();
  initCalculator();
  initSettings();
  initDesktopSelection();
  initContextMenu();
  initCalendarPopup();
  initPageVisibility();

  // Define o estado inicial das janelas (No celular e desktop: foco em "Sobre o que é o Aethel")
  setupInitialWindowsState();

  // A música não toca mais ao iniciar; fica disponível na tela para o usuário tocar se quiser
  setupMusicInterface();
});

function setupInitialWindowsState() {
  const profileWin = document.getElementById("win-profile");
  const projectsWin = document.getElementById("win-projects");
  const playerWin = document.getElementById("win-player");

  if (window.innerWidth <= 768) {
    // No celular: Foca estritamente em explicar "Sobre o que é o Aethel"
    // Minimiza o player e projetos para não poluir a tela compacta
    if (playerWin) playerWin.classList.add("minimized");
    if (projectsWin) projectsWin.classList.add("minimized");
    if (profileWin) {
      profileWin.classList.remove("minimized");
      window.focusWindow(profileWin);
    }
  } else {
    // No Desktop: Mantém Sobre o Aethel em destaque na frente e projetos/player abertos
    if (profileWin) {
      profileWin.classList.remove("minimized");
      window.focusWindow(profileWin);
    }
  }
}

function setupMusicInterface() {
  // Garante estado desligado/pausado inicial
  SystemState.music.isPlaying = false;
  updateMusicUI(false);

  // Exibe balão estilo XP convidando a tocar a música se o usuário desejar
  setTimeout(showBalloonNotification, 1200);
}

function showBalloonNotification() {
  const balloon = document.getElementById("xp-balloon");
  if (!balloon) return;
  balloon.classList.remove("hidden");

  const closeBtn = document.getElementById("balloon-close");
  const dismissBtn = document.getElementById("balloon-dismiss-btn");
  const playBtn = document.getElementById("balloon-play-btn");

  const hideBalloon = () => balloon.classList.add("hidden");

  closeBtn?.addEventListener("click", hideBalloon, { once: true });
  dismissBtn?.addEventListener("click", hideBalloon, { once: true });

  playBtn?.addEventListener("click", () => {
    playRetroSound("click");
    start8BitMusic();
    hideBalloon();
  }, { once: true });

  setTimeout(() => {
    if (balloon && !balloon.classList.contains("hidden")) {
      balloon.classList.add("hidden");
    }
  }, 12000);
}

// --------------------------------------------------------------------------
// 5. Renderização dos Aplicativos (Desktop & Explorer)
// --------------------------------------------------------------------------
function renderDesktopApps() {
  const container = document.getElementById("desktop-apps-container");
  if (!container) return;
  container.innerHTML = "";

  APPS.forEach(app => {
    const iconEl = document.createElement("div");
    iconEl.className = "desktop-icon";
    iconEl.tabIndex = 0;
    iconEl.dataset.appId = app.id;
    iconEl.title = `${app.title} - ${app.slogan}\n${app.pitch}`;

    iconEl.innerHTML = `
      <div class="icon-graphic has-shortcut">
        <div class="app-badge-icon" style="background: linear-gradient(135deg, #ffffff 0%, #edf2f7 100%);">
          <span>${app.icon}</span>
        </div>
      </div>
      <span class="icon-label">${app.title}</span>
    `;

    iconEl.addEventListener("click", () => {
      document.querySelectorAll(".desktop-icon").forEach(i => i.classList.remove("selected"));
      iconEl.classList.add("selected");
      playRetroSound("click");
      if (window.innerWidth <= 768) {
        launchApp(app);
      }
    });

    iconEl.addEventListener("dblclick", () => launchApp(app));
    iconEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") launchApp(app);
    });

    container.appendChild(iconEl);
  });
}

function renderExplorerProjects() {
  const container = document.getElementById("projects-list-retro");
  const countStatus = document.getElementById("projects-count-status");
  const hoverInfo = document.getElementById("project-hover-info");
  if (!container) return;

  container.innerHTML = "";
  if (countStatus) countStatus.textContent = `${APPS.length} aplicativos disponíveis`;

  APPS.forEach(app => {
    const card = document.createElement("div");
    card.className = "project-card-retro";
    card.tabIndex = 0;

    card.innerHTML = `
      <div class="card-top-bar">
        <span class="card-badge">${app.badge}</span>
        <span class="card-rating">${app.rating}</span>
      </div>
      <div class="card-main-content">
        <div class="proj-icon-wrapper">
          <span class="proj-icon-glyph">${app.icon}</span>
        </div>
        <div class="proj-info">
          <div class="proj-title">${app.title}</div>
          <div class="proj-slogan">${app.slogan}</div>
          <div class="proj-pitch">${app.pitch}</div>
        </div>
      </div>
      <div class="card-footer-cta">
        <a href="${app.url}" target="_blank" rel="noopener" class="card-link-btn" title="Abrir em Nova Aba com controle total">🚀 Abrir Link ↗</a>
        <button type="button" class="card-cta-btn" title="Abrir Caixinha de Opções">Opções / Testar ►</button>
      </div>
    `;

    // Botão direto para nova aba não dispara a caixinha
    const linkBtn = card.querySelector(".card-link-btn");
    if (linkBtn) {
      linkBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        playRetroSound("click");
      });
    }

    const ctaBtn = card.querySelector(".card-cta-btn");
    if (ctaBtn) {
      ctaBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        launchApp(app);
      });
    }

    card.addEventListener("mouseenter", () => {
      playRetroSound("click");
      if (hoverInfo) {
        hoverInfo.innerHTML = `
          <div class="sidebar-showcase">
            <div class="sidebar-showcase-icon">${app.icon}</div>
            <div class="sidebar-showcase-title">${app.title}</div>
            <div class="sidebar-showcase-slogan">"${app.slogan}"</div>
            <div class="sidebar-showcase-pitch">${app.pitch}</div>
            <div style="font-size:9px; color:#2e7d32; font-weight:bold; margin-top:2px;">★ ${app.rating} (${app.tag})</div>
            <div style="display:flex; gap:4px; margin-top:8px;">
              <a href="${app.url}" target="_blank" rel="noopener" class="card-link-btn" style="flex:1; justify-content:center; padding:5px 4px;">🚀 Abrir Link ↗</a>
              <button type="button" class="sidebar-dialog-btn xp-btn" style="flex:1; padding:4px;">👁️ Opções</button>
            </div>
          </div>
        `;

        const sideBtn = hoverInfo.querySelector(".sidebar-dialog-btn");
        if (sideBtn) {
          sideBtn.addEventListener("click", () => launchApp(app));
        }
      }
    });

    card.addEventListener("click", () => launchApp(app));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") launchApp(app);
    });

    container.appendChild(card);
  });

  const filterAllBtn = document.getElementById("filter-all-btn");
  if (filterAllBtn) {
    filterAllBtn.addEventListener("click", (e) => {
      e.preventDefault();
      renderExplorerProjects();
      playRetroSound("click");
    });
  }
}

function renderStartMenuPrograms() {
  const submenu = document.getElementById("all-programs-menu");
  const trigger = document.getElementById("all-programs-trigger");
  if (!submenu || !trigger) return;
  submenu.innerHTML = "";

  APPS.forEach(app => {
    const item = document.createElement("div");
    item.className = "sub-prog-item";
    item.innerHTML = `<span>${app.icon}</span><span>${app.title}</span>`;
    item.addEventListener("click", () => {
      launchApp(app);
      document.getElementById("start-menu")?.classList.add("hidden");
      submenu.classList.add("hidden");
    });
    submenu.appendChild(item);
  });

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    playRetroSound("click");
    submenu.classList.toggle("hidden");
  });
}

// --------------------------------------------------------------------------
// 6. Caixinha de Execução (Abrir Link ou Testar Agora)
// --------------------------------------------------------------------------
function launchApp(app) {
  playRetroSound("open");

  const win = document.getElementById("win-app-viewer");
  if (!win) {
    window.open(app.url, "_blank");
    return;
  }

  // Atualiza metadados da caixinha
  win.dataset.title = `Executar: ${app.title}`;
  const titleEl = document.getElementById("app-viewer-title");
  const iconEl = document.getElementById("app-viewer-icon");
  const badgeIcon = document.getElementById("launcher-icon-badge");
  const appNameEl = document.getElementById("launcher-app-name");
  const sloganEl = document.getElementById("launcher-slogan");
  const badgeEl = document.getElementById("launcher-badge");
  const ratingEl = document.getElementById("launcher-rating");
  const pitchEl = document.getElementById("launcher-pitch");
  const urlLinkEl = document.getElementById("launcher-url-link");
  const btnOpenExt = document.getElementById("btn-open-link-ext");
  const boxView = document.getElementById("launcher-box-view");
  const embeddedView = document.getElementById("launcher-embedded-view");
  const iframe = document.getElementById("app-viewer-iframe");
  const btnTest = document.getElementById("btn-test-embedded");
  const btnCancel = document.getElementById("btn-launcher-cancel");
  const bannerExt = document.getElementById("embedded-banner-open-ext");
  const bannerBack = document.getElementById("embedded-banner-back");
  const bannerName = document.getElementById("embedded-banner-name");

  if (titleEl) titleEl.textContent = `Executar: ${app.title} (${app.exe})`;
  if (iconEl) iconEl.textContent = app.icon;
  if (badgeIcon) badgeIcon.textContent = app.icon;
  if (appNameEl) appNameEl.textContent = app.title;
  if (sloganEl) sloganEl.textContent = `"${app.slogan}"`;
  if (badgeEl) badgeEl.textContent = app.badge;
  if (ratingEl) ratingEl.textContent = app.rating;
  if (pitchEl) pitchEl.textContent = app.pitch;

  if (urlLinkEl) {
    urlLinkEl.textContent = app.url;
    urlLinkEl.href = app.url;
  }

  // Botão Principal: Abrir o link (Sem iframe, controle de mouse 100% perfeito)
  if (btnOpenExt) {
    btnOpenExt.href = app.url;
    btnOpenExt.onclick = () => {
      playRetroSound("click");
    };
  }

  // Garante que a janela abre na visão da Caixinha (não carrega o iframe direto!)
  if (boxView) boxView.classList.remove("hidden");
  if (embeddedView) embeddedView.classList.add("hidden");
  if (iframe) iframe.src = "about:blank"; // Não captura eventos de mouse/touch em background

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    win.style.width = "";
    win.style.height = "";
    win.style.left = "";
    win.style.top = "";
    win.classList.remove("maximized");
  } else {
    win.style.width = "540px";
    win.style.height = "auto";
  }

  // Botão 2: Testar agora (embutido)
  if (btnTest) {
    btnTest.onclick = () => {
      playRetroSound("click");
      if (boxView) boxView.classList.add("hidden");
      if (embeddedView) embeddedView.classList.remove("hidden");
      if (iframe) iframe.src = app.url;
      if (bannerName) bannerName.textContent = `Visualizando: ${app.title}`;
      if (bannerExt) bannerExt.href = app.url;

      if (window.innerWidth <= 768) {
        win.classList.add("maximized");
      } else {
        win.style.width = "720px";
        win.style.height = "520px";
      }
    };
  }

  // Botão Voltar para a Caixinha
  if (bannerBack) {
    bannerBack.onclick = () => {
      playRetroSound("click");
      if (boxView) boxView.classList.remove("hidden");
      if (embeddedView) embeddedView.classList.add("hidden");
      if (iframe) iframe.src = "about:blank";

      if (window.innerWidth <= 768) {
        win.classList.remove("maximized");
      } else {
        win.style.width = "540px";
        win.style.height = "auto";
      }
    };
  }

  // Botão Cancelar
  if (btnCancel) {
    btnCancel.onclick = () => {
      playRetroSound("close");
      win.classList.add("minimized");
      if (window.innerWidth <= 768) {
        win.classList.remove("maximized");
      }
    };
  }

  win.classList.remove("minimized");
  window.focusWindow(win);
}

// --------------------------------------------------------------------------
// 7. Gerenciador de Janelas (Drag, Focus, Minimize, Maximize, Close)
// --------------------------------------------------------------------------
function initWindowsManager() {
  const windows = document.querySelectorAll(".window");
  const taskbarTasks = document.getElementById("taskbar-tasks");

  windows.forEach(win => {
    makeWindowInteractive(win);
  });

  updateTaskbar();

  function makeWindowInteractive(win) {
    const titlebar = win.querySelector(".window-titlebar");
    const btnMin = win.querySelector(".win-btn-min");
    const btnMax = win.querySelector(".win-btn-max");
    const btnClose = win.querySelector(".win-btn-close");

    win.addEventListener("mousedown", () => focusWindow(win));

    if (btnClose) {
      btnClose.addEventListener("click", (e) => {
        e.stopPropagation();
        playRetroSound("close");
        win.classList.add("minimized");
        updateTaskbar();
      });
    }

    if (btnMin) {
      btnMin.addEventListener("click", (e) => {
        e.stopPropagation();
        playRetroSound("click");
        win.classList.add("minimized");
        updateTaskbar();
      });
    }

    if (btnMax) {
      btnMax.addEventListener("click", (e) => {
        e.stopPropagation();
        playRetroSound("click");
        win.classList.toggle("maximized");
      });
    }

    // Suporte ao clique duplo na barra de título para Maximizar/Restaurar (Estilo Windows XP)
    if (titlebar) {
      titlebar.addEventListener("dblclick", (e) => {
        if (e.target.closest(".titlebar-controls")) return;
        playRetroSound("click");
        win.classList.toggle("maximized");
      });
    }

    // Adiciona os 8 handles de redimensionamento e o grip clássico de canto
    addResizeSupport(win);

    if (titlebar) {
      let isDragging = false;
      let startX, startY, initialLeft, initialTop;
      let lastMoveX = 0;

      titlebar.addEventListener("mousedown", (e) => {
        if (e.target.closest(".titlebar-controls")) return;
        if (win.classList.contains("maximized")) return;

        isDragging = true;
        focusWindow(win);
        playRetroSound("click");

        startX = e.clientX;
        startY = e.clientY;
        initialLeft = win.offsetLeft;
        initialTop = win.offsetTop;

        function onMouseMove(moveEvent) {
          if (!isDragging) return;
          const deltaX = moveEvent.clientX - startX;
          const deltaY = moveEvent.clientY - startY;

          win.style.left = `${initialLeft + deltaX}px`;
          win.style.top = `${Math.max(0, initialTop + deltaY)}px`;
        }

        function onMouseUp() {
          isDragging = false;
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      });
    }
  }

  // Função que instala os 8 handles de redimensionamento e o grip clássico do XP
  function addResizeSupport(win) {
    if (win.querySelector(".resize-handle")) return;

    const directions = ["n", "s", "e", "w", "nw", "ne", "sw", "se"];
    directions.forEach(dir => {
      const handle = document.createElement("div");
      handle.className = `resize-handle rh-${dir}`;
      handle.dataset.dir = dir;
      win.appendChild(handle);
      setupHandle(handle, dir);
    });

    // Grip pontilhado clássico de redimensionamento no canto da barra de status
    const statusbar = win.querySelector(".window-statusbar");
    if (statusbar && !statusbar.querySelector(".xp-statusbar-grip")) {
      const grip = document.createElement("div");
      grip.className = "xp-statusbar-grip";
      grip.title = "Arrastar para redimensionar";
      statusbar.appendChild(grip);
      setupHandle(grip, "se");
    }

    function setupHandle(el, dir) {
      el.addEventListener("mousedown", (e) => {
        if (win.classList.contains("maximized")) return;
        e.preventDefault();
        e.stopPropagation();

        focusWindow(win);
        playRetroSound("click");

        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = win.offsetWidth;
        const startHeight = win.offsetHeight;
        const startLeft = win.offsetLeft;
        const startTop = win.offsetTop;

        const minW = 240;
        const minH = 140;

        const desktopEl = document.getElementById("desktop");
        if (desktopEl) desktopEl.classList.add("resizing-active");

        function onMouseMove(moveEvent) {
          const deltaX = moveEvent.clientX - startX;
          const deltaY = moveEvent.clientY - startY;

          let newW = startWidth;
          let newH = startHeight;
          let newLeft = startLeft;
          let newTop = startTop;

          // Horizontal
          if (dir.includes("e")) {
            newW = Math.max(minW, startWidth + deltaX);
          }
          if (dir.includes("w")) {
            const calcW = startWidth - deltaX;
            if (calcW >= minW) {
              newW = calcW;
              newLeft = startLeft + deltaX;
            } else {
              newW = minW;
              newLeft = startLeft + (startWidth - minW);
            }
          }

          // Vertical
          if (dir.includes("s")) {
            newH = Math.max(minH, startHeight + deltaY);
          }
          if (dir.includes("n")) {
            const calcH = startHeight - deltaY;
            if (calcH >= minH) {
              newH = calcH;
              newTop = startTop + deltaY;
            } else {
              newH = minH;
              newTop = startTop + (startHeight - minH);
            }
          }

          win.style.width = `${newW}px`;
          win.style.height = `${newH}px`;
          win.style.left = `${newLeft}px`;
          win.style.top = `${Math.max(0, newTop)}px`;
        }

        function onMouseUp() {
          if (desktopEl) desktopEl.classList.remove("resizing-active");
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      });
    }
  }

  window.focusWindow = function(win) {
    if (!win) return;
    SystemState.highestZIndex += 1;
    win.style.zIndex = SystemState.highestZIndex;
    document.querySelectorAll(".window").forEach(w => w.classList.remove("active-win"));
    win.classList.add("active-win");
    SystemState.activeWindowId = win.id;
    updateTaskbar();
  };

  window.openWindow = function(winId) {
    const win = document.getElementById(winId);
    if (!win) return;
    win.classList.remove("minimized");
    focusWindow(win);
    playRetroSound("open");
    updateTaskbar();
  };

  function updateTaskbar() {
    if (!taskbarTasks) return;
    taskbarTasks.innerHTML = "";

    const windows = document.querySelectorAll(".window");
    windows.forEach(win => {
      const isMin = win.classList.contains("minimized");
      const isActive = win.classList.contains("active-win") && !isMin;
      const title = win.dataset.title || win.querySelector(".titlebar-title")?.textContent || "Janela";
      const icon = win.querySelector(".titlebar-icon")?.textContent || "🪟";

      const tab = document.createElement("button");
      tab.className = `task-tab ${isActive ? "active" : ""}`;
      tab.innerHTML = `<span>${icon}</span><span>${title}</span>`;

      tab.addEventListener("click", () => {
        playRetroSound("click");
        if (isMin) {
          win.classList.remove("minimized");
          focusWindow(win);
        } else if (isActive) {
          win.classList.add("minimized");
          win.classList.remove("active-win");
        } else {
          focusWindow(win);
        }
        updateTaskbar();
      });

      taskbarTasks.appendChild(tab);
    });
  }
}

// --------------------------------------------------------------------------
// 8. Ícones do Desktop (Sistema)
// --------------------------------------------------------------------------
function initDesktopIcons() {
  const icons = document.querySelectorAll("#system-icons-group .desktop-icon");
  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      document.querySelectorAll(".desktop-icon").forEach(i => i.classList.remove("selected"));
      icon.classList.add("selected");
      playRetroSound("click");
      if (window.innerWidth <= 768) {
        const targetWin = icon.dataset.window;
        if (targetWin) window.openWindow(targetWin);
      }
    });

    icon.addEventListener("dblclick", () => {
      const targetWin = icon.dataset.window;
      if (targetWin) window.openWindow(targetWin);
    });

    icon.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const targetWin = icon.dataset.window;
        if (targetWin) window.openWindow(targetWin);
      }
    });
  });

  const ghIcon = document.getElementById("link-github-external");
  if (ghIcon) {
    ghIcon.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        window.open(PROFILE.github, "_blank");
      }
    });
    ghIcon.addEventListener("dblclick", () => {
      window.open(PROFILE.github, "_blank");
    });
  }
}

// --------------------------------------------------------------------------
// 9. Menu Iniciar & Barra de Tarefas
// --------------------------------------------------------------------------
function initStartMenu() {
  const startBtn = document.getElementById("start-button");
  const startMenu = document.getElementById("start-menu");
  const soundToggle = document.getElementById("tray-sound-toggle");
  const soundStatusLabel = document.getElementById("sound-status-label");
  const toggleSoundBtn = document.getElementById("toggle-sound-btn");
  const compizBtn = document.getElementById("btn-compiz-wobble");
  const restartBtn = document.getElementById("btn-restart");
  const ghLink = document.getElementById("start-github-link");
  const trayMusicToggle = document.getElementById("tray-music-toggle");

  if (startBtn && startMenu) {
    startBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      playRetroSound("click");
      const isHidden = startMenu.classList.toggle("hidden");
      startBtn.setAttribute("aria-expanded", !isHidden);
    });

    document.addEventListener("click", (e) => {
      if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
        startMenu.classList.add("hidden");
        document.getElementById("all-programs-menu")?.classList.add("hidden");
        startBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll(".start-item, .start-sub-item").forEach(item => {
    item.addEventListener("click", () => {
      const target = item.dataset.target;
      if (target) {
        window.openWindow(target);
        if (startMenu) startMenu.classList.add("hidden");
      }
    });
  });

  if (ghLink) {
    ghLink.addEventListener("click", () => {
      window.open(PROFILE.github, "_blank");
    });
  }

  if (trayMusicToggle) {
    trayMusicToggle.addEventListener("click", () => {
      window.openWindow("win-player");
    });
  }

  function toggleSoundFX() {
    SystemState.soundEffectsEnabled = !SystemState.soundEffectsEnabled;
    const label = SystemState.soundEffectsEnabled ? "🔊" : "🔇";
    if (soundToggle) soundToggle.textContent = label;
    if (soundStatusLabel) soundStatusLabel.textContent = `Sons: ${SystemState.soundEffectsEnabled ? "Ativados" : "Desativados"}`;
    if (SystemState.soundEffectsEnabled) playRetroSound("click");
  }

  if (soundToggle) soundToggle.addEventListener("click", toggleSoundFX);
  if (toggleSoundBtn) toggleSoundBtn.addEventListener("click", toggleSoundFX);

  if (compizBtn) {
    compizBtn.addEventListener("click", () => {
      SystemState.isCompiz3d = !SystemState.isCompiz3d;
      compizBtn.innerHTML = `<span>🧊 Compiz 3D: ${SystemState.isCompiz3d ? "ON" : "OFF"}</span>`;
      playRetroSound("click");
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      playRetroSound("close");
      document.querySelectorAll(".window").forEach(w => w.classList.remove("minimized", "maximized"));
      window.openWindow("win-projects");
      if (startMenu) startMenu.classList.add("hidden");
    });
  }

  const btnProj = document.getElementById("btn-open-projects");
  const btnTerm = document.getElementById("btn-open-terminal");
  if (btnProj) btnProj.addEventListener("click", () => window.openWindow("win-projects"));
  if (btnTerm) btnTerm.addEventListener("click", () => window.openWindow("win-terminal"));
}

function initSystemClock() {
  const clockEl = document.getElementById("tray-clock");
  const calDigitalEl = document.getElementById("cal-digital-clock");
  function updateTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    if (clockEl) clockEl.textContent = `${h}:${m}`;
    if (calDigitalEl) calDigitalEl.textContent = `${h}:${m}:${s}`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// --------------------------------------------------------------------------
// 10. Controles do Tocador AethelAmp & Taskbar Chip
// --------------------------------------------------------------------------
function initAethelAmpControls() {
  const ampPlayPause = document.getElementById("amp-play-pause-btn");
  const ampStop = document.getElementById("amp-stop");
  const ampPrev = document.getElementById("amp-prev");
  const ampNext = document.getElementById("amp-next");
  const ampTrackSelect = document.getElementById("amp-track-select");
  const ampVol = document.getElementById("amp-vol");
  const chip = document.getElementById("taskbar-music-chip");
  const chipBtn = document.getElementById("music-chip-btn");

  if (ampPlayPause) {
    ampPlayPause.addEventListener("click", () => {
      playRetroSound("click");
      toggle16BitMusic();
    });
  }

  if (chip) {
    chip.addEventListener("click", () => {
      playRetroSound("click");
      toggle16BitMusic();
    });
  }

  if (chipBtn) {
    chipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      playRetroSound("click");
      toggle16BitMusic();
    });
  }

  if (ampStop) {
    ampStop.addEventListener("click", () => {
      playRetroSound("click");
      pause16BitMusic();
      SystemState.music.seconds = 0;
      SystemState.music.noteIndex = 0;
      const timerEl = document.getElementById("amp-timer");
      if (timerEl) timerEl.textContent = "00:00 / 00:30";
    });
  }

  if (ampPrev) {
    ampPrev.addEventListener("click", () => {
      prev16BitTrack();
    });
  }

  if (ampNext) {
    ampNext.addEventListener("click", () => {
      next16BitTrack();
    });
  }

  if (ampTrackSelect) {
    ampTrackSelect.addEventListener("change", (e) => {
      const selectedIndex = parseInt(e.target.value, 10);
      if (!isNaN(selectedIndex)) {
        playRetroSound("click");
        change16BitTrack(selectedIndex);
      }
    });
  }

  if (ampVol) {
    ampVol.addEventListener("input", (e) => {
      const pct = parseInt(e.target.value, 10) / 100;
      SystemState.music.volume = pct * 0.05;
    });
  }
}

// --------------------------------------------------------------------------
// 11. Bloco de Notas (Notepad XP com Persistência)
// --------------------------------------------------------------------------
function initNotepad() {
  const textarea = document.getElementById("notepad-textarea");
  const charCount = document.getElementById("notepad-char-count");
  const menuNovo = document.getElementById("notepad-menu-novo");
  const menuSalvar = document.getElementById("notepad-menu-salvar");
  const menuLimpar = document.getElementById("notepad-menu-limpar");
  if (!textarea) return;

  const DEFAULT_NOTE = `=====================================================
AETHEL OS - VITRINE DOS APLICATIVOS (GUIA OFICIAL)
=====================================================
Bem-vindo ao ecossistema Aethel. Cada ferramenta abaixo foi
artesanalmente projetada para resolver um desafio real:

[01] 🕯️ BLOG ALETHEIA
     "Desperte sua mente e enxergue além das aparências."
     Ensaios filosóficos e reflexões para mentes profundas.

[02] 👑 REX MUNDI
     "Governe impérios. Reescreva a história do mundo."
     Grande estratégia e conquista geopolítica em tempo real.

[03] ⚔️ ECLESIA RPG
     "Sua lenda começa aqui. O chamado da aventura."
     Universo imersivo de RPG com escolhas morais épicas.

[04] 🏛️ CÁTEDRA SACRA
     "Dois mil anos de sabedoria na palma da sua mão."
     O acervo definitivo de teologia patrística e filosofia.

[05] 🕊️ ANIMA PURITAS
     "Paz mental e renovação espiritual em meio ao caos."
     Seu santuário diário de clareza, serenidade e foco.

[06] 📖 LEITURA TAU
     "Menos distração superficial. Mais profundidade."
     Ambiente de leitura imersivo, limpo e contemplativo.

[07] 📿 ORATIO ROSARII
     "Transforme a oração diária em um hábito inabalável."
     O guia meditativo e intuitivo para o Santo Rosário.

[08] 💡 EPIFANIA NOTAS
     "Nunca mais perca uma ideia genial por falta de velocidade."
     Captura ultrarrápida de pensamentos e insights raros.

[09] 🧭 COMPASSO MONEY
     "Assuma o controle total do seu dinheiro e viva livre."
     A bússola que descomplica finanças e gera prosperidade.

[10] ⏳ MOMENTO VITA
     "Lembre-se de que o tempo passa. Viva com urgência e honra."
     Memento Mori na prática: construa hábitos que perduram.

[11] 🎯 EVO QUEST
     "Transforme suas tarefas diárias em um jogo épico."
     Gamificação de metas para vencer a procrastinação.

[12] 🛡️ EXERCITIUM
     "Corpo forte, mente disciplinada, energia sem limites."
     Rotinas de treino consistentes para alta performance.

[13] 📜 CÓDICE QUIZ
     "Teste sua erudição e comprove sua inteligência."
     Desafios intelectuais de história, cultura e sabedoria.

[14] 🔗 ESTUDA LINKS
     "O mapa do tesouro para dominar qualquer matéria."
     A melhor curadoria de links de aprendizado da internet.
-----------------------------------------------------
Criado por Aethel (Elliton Luis) • github.com/Elliton-Luis
(Você pode editar e salvar suas anotações neste bloco!)`;

  const saved = localStorage.getItem("aethel_note_content");
  textarea.value = saved !== null ? saved : DEFAULT_NOTE;
  updateStats();

  textarea.addEventListener("input", () => {
    localStorage.setItem("aethel_note_content", textarea.value);
    updateStats();
  });

  if (menuNovo) {
    menuNovo.addEventListener("click", () => {
      playRetroSound("click");
      textarea.value = "";
      localStorage.removeItem("aethel_note_content");
      updateStats();
    });
  }

  if (menuSalvar) {
    menuSalvar.addEventListener("click", () => {
      playRetroSound("click");
      localStorage.setItem("aethel_note_content", textarea.value);
      alert("Arquivo salvo com sucesso no LocalStorage do sistema!");
    });
  }

  if (menuLimpar) {
    menuLimpar.addEventListener("click", () => {
      playRetroSound("click");
      textarea.value = "";
      updateStats();
    });
  }

  function updateStats() {
    if (!charCount) return;
    const lines = textarea.value.split("\n").length;
    const chars = textarea.value.length;
    charCount.textContent = `Linhas: ${lines} | Caracteres: ${chars}`;
  }
}

// --------------------------------------------------------------------------
// 12. Calculadora XP
// --------------------------------------------------------------------------
function initCalculator() {
  const display = document.getElementById("calc-display");
  if (!display) return;

  let currentVal = "0";
  let prevVal = null;
  let currentOp = null;
  let resetNext = false;

  document.querySelectorAll(".calc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      playRetroSound("click");
      const val = btn.dataset.val;
      const action = btn.dataset.action;

      if (val !== undefined) {
        if (currentVal === "0" || resetNext) {
          currentVal = val;
          resetNext = false;
        } else {
          currentVal += val;
        }
        display.value = currentVal;
      } else if (action === "clear") {
        currentVal = "0";
        prevVal = null;
        currentOp = null;
        display.value = currentVal;
      } else if (action === "back") {
        currentVal = currentVal.length > 1 ? currentVal.slice(0, -1) : "0";
        display.value = currentVal;
      } else if (action === "op") {
        prevVal = parseFloat(currentVal);
        currentOp = btn.dataset.val;
        resetNext = true;
      } else if (action === "equals") {
        if (prevVal !== null && currentOp) {
          const next = parseFloat(currentVal);
          let res = 0;
          if (currentOp === "+") res = prevVal + next;
          else if (currentOp === "-") res = prevVal - next;
          else if (currentOp === "*") res = prevVal * next;
          else if (currentOp === "/") res = next !== 0 ? prevVal / next : "Erro";

          currentVal = String(res);
          display.value = currentVal;
          prevVal = null;
          currentOp = null;
          resetNext = true;
        }
      }
    });
  });
}

// --------------------------------------------------------------------------
// 13. Painel de Controle (Temas e Configurações)
// --------------------------------------------------------------------------
function initSettings() {
  const themeRadios = document.querySelectorAll("input[name='theme-color']");
  const chkSound = document.getElementById("chk-sound");
  const chkCompiz = document.getElementById("chk-compiz");
  const chkWatermark = document.getElementById("chk-watermark");
  const btnSave = document.getElementById("btn-save-settings");
  const watermark = document.querySelector(".desktop-watermark");

  themeRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      document.body.className = "";
      if (e.target.value === "silver") document.body.classList.add("theme-silver");
      if (e.target.value === "noir") document.body.classList.add("theme-noir");
    });
  });

  if (chkSound) {
    chkSound.addEventListener("change", (e) => {
      SystemState.soundEffectsEnabled = e.target.checked;
    });
  }

  if (chkCompiz) {
    chkCompiz.addEventListener("change", (e) => {
      SystemState.isCompiz3d = e.target.checked;
    });
  }

  if (chkWatermark && watermark) {
    chkWatermark.addEventListener("change", (e) => {
      watermark.classList.toggle("hidden-wm", !e.target.checked);
    });
  }

  if (btnSave) {
    btnSave.addEventListener("click", () => {
      playRetroSound("click");
      document.getElementById("win-settings")?.classList.add("minimized");
    });
  }
}

// --------------------------------------------------------------------------
// 14. Marquee Selection na Área de Trabalho
// --------------------------------------------------------------------------
function initDesktopSelection() {
  const desktop = document.getElementById("desktop");
  const box = document.getElementById("selection-box");
  if (!desktop || !box) return;

  let isSelecting = false;
  let startX = 0, startY = 0;

  desktop.addEventListener("mousedown", (e) => {
    if (e.target.closest(".window") || e.target.closest(".taskbar") || e.target.closest(".start-menu") || e.target.closest(".context-menu")) return;
    if (e.button !== 0) return; // apenas botão esquerdo

    isSelecting = true;
    startX = e.clientX;
    startY = e.clientY;
    box.style.left = `${startX}px`;
    box.style.top = `${startY}px`;
    box.style.width = "0px";
    box.style.height = "0px";
    box.style.display = "block";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isSelecting) return;
    const currentX = e.clientX;
    const currentY = e.clientY;

    const left = Math.min(startX, currentX);
    const top = Math.min(startY, currentY);
    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);

    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
  });

  window.addEventListener("mouseup", () => {
    if (isSelecting) {
      isSelecting = false;
      box.style.display = "none";
    }
  });
}

// --------------------------------------------------------------------------
// 15. Menu de Contexto (Botão Direito na Área de Trabalho)
// --------------------------------------------------------------------------
function initContextMenu() {
  const ctx = document.getElementById("desktop-context-menu");
  const desktop = document.getElementById("desktop");
  if (!ctx || !desktop) return;

  desktop.addEventListener("contextmenu", (e) => {
    if (e.target.closest(".window") || e.target.closest(".taskbar") || e.target.closest(".start-menu")) return;
    e.preventDefault();
    playRetroSound("click");

    ctx.style.left = `${e.clientX}px`;
    ctx.style.top = `${e.clientY}px`;
    ctx.classList.remove("hidden");
  });

  document.addEventListener("click", () => {
    ctx.classList.add("hidden");
  });

  document.getElementById("ctx-refresh")?.addEventListener("click", () => {
    playRetroSound("click");
    renderDesktopApps();
  });

  document.getElementById("ctx-new-note")?.addEventListener("click", () => {
    window.openWindow("win-notepad");
  });

  document.getElementById("ctx-calc")?.addEventListener("click", () => {
    window.openWindow("win-calculator");
  });

  document.getElementById("ctx-music")?.addEventListener("click", () => {
    toggle8BitMusic();
  });

  document.getElementById("ctx-settings")?.addEventListener("click", () => {
    window.openWindow("win-settings");
  });

  document.getElementById("ctx-props")?.addEventListener("click", () => {
    window.openWindow("win-profile");
  });
}

// --------------------------------------------------------------------------
// 16. Popup de Calendário e Relógio XP
// --------------------------------------------------------------------------
function initCalendarPopup() {
  const clock = document.getElementById("tray-clock");
  const popup = document.getElementById("calendar-popup");
  const closeBtn = document.getElementById("cal-close-btn");
  const daysGrid = document.getElementById("cal-days-grid");
  const monthTitle = document.getElementById("cal-month-year");
  if (!clock || !popup || !daysGrid) return;

  clock.addEventListener("click", (e) => {
    e.stopPropagation();
    playRetroSound("click");
    popup.classList.toggle("hidden");
    renderCalendarDays();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => popup.classList.add("hidden"));
  }

  document.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && e.target !== clock) {
      popup.classList.add("hidden");
    }
  });

  function renderCalendarDays() {
    daysGrid.innerHTML = "";
    const now = new Date();
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    if (monthTitle) monthTitle.textContent = `${months[now.getMonth()]} ${now.getFullYear()}`;

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    days.forEach(d => {
      const el = document.createElement("div");
      el.style.fontWeight = "bold";
      el.style.color = "#0055ea";
      el.textContent = d;
      daysGrid.appendChild(el);
    });

    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    const totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div");
      daysGrid.appendChild(empty);
    }

    for (let d = 1; d <= totalDays; d++) {
      const dayEl = document.createElement("div");
      dayEl.className = `cal-day ${d === now.getDate() ? "today" : ""}`;
      dayEl.textContent = d;
      daysGrid.appendChild(dayEl);
    }
  }
}

// --------------------------------------------------------------------------
// 17. Terminal Linux Bash Interativo
// --------------------------------------------------------------------------
function initTerminal() {
  const input = document.getElementById("terminal-input");
  const history = document.getElementById("terminal-history");
  const termBody = document.getElementById("terminal-body");
  if (!input || !history) return;

  const COMMANDS = {
    help: () => `Comandos do Aethel OS:
  <span class="term-highlight">help</span>          - Exibe esta mensagem
  <span class="term-highlight">ls</span>            - Lista os 14 executáveis (.exe)
  <span class="term-highlight">projects</span>      - Lista os 14 apps com links
  <span class="term-highlight">open &lt;id&gt;</span>      - Abre app pelo ID ou nome
  <span class="term-highlight">music [pause|play]</span> - Controla o som 8-bit
  <span class="term-highlight">notepad</span>       - Abre o Bloco de Notas
  <span class="term-highlight">calc</span>          - Abre a Calculadora
  <span class="term-highlight">neofetch</span>      - Estatísticas do sistema com ASCII
  <span class="term-highlight">cat bio.txt</span>   - Exibe biografia de Aethel
  <span class="term-highlight">clear</span>         - Limpa o terminal`,

    ls: () => APPS.map(a => `<span style="color:#00ffaa;">${a.exe}</span>`).join("   "),

    projects: () => APPS.map((a, idx) => 
      `<span style="color:#00ffaa;">[${idx + 1}]</span> <strong>${a.title}</strong> (${a.tag}) -> <a href="${a.url}" target="_blank" style="color:#8be9fd;">${a.url}</a>`
    ).join("<br>"),

    neofetch: () => `
<div class="term-ascii">
    .--.        <span style="color:#50fa7b;">aethel@retro-box</span>
   |o_o |       ---------------
   |:_/ |       <span style="color:#8be9fd;">OS:</span> Aethel Minimalist XP/Linux 3D
  //   \\ \\      <span style="color:#8be9fd;">Logo:</span> Æ Isometric Prism
 (|     | )     <span style="color:#8be9fd;">Sound:</span> 8-Bit Web Audio Engine
/'\\_   _/\\'    <span style="color:#8be9fd;">Apps:</span> ${APPS.length} apps instalados
\\___)=(___/     <span style="color:#8be9fd;">Autor:</span> Elliton Luis
</div>`,

    "cat bio.txt": () => `${PROFILE.name} - ${PROFILE.title}<br>${PROFILE.bio}`,

    notepad: () => { window.openWindow("win-notepad"); return "Abrindo Bloco de Notas..."; },
    calc: () => { window.openWindow("win-calculator"); return "Abrindo Calculadora..."; },

    date: () => new Date().toString(),

    clear: () => {
      history.innerHTML = "";
      return "";
    }
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const rawCmd = input.value.trim();
      if (!rawCmd) return;
      playRetroSound("click");

      const cmdLine = document.createElement("div");
      cmdLine.className = "term-line";
      cmdLine.innerHTML = `<span class="term-prompt"><span class="p-user">aethel</span>@<span class="p-host">retro-box</span>:<span class="p-path">~</span>$&nbsp;</span>${escapeHtml(rawCmd)}`;
      history.appendChild(cmdLine);

      const parts = rawCmd.split(" ");
      const cmd = parts[0].toLowerCase();
      const arg = parts.slice(1).join(" ").toLowerCase();

      let output = "";
      if (cmd === "clear") {
        history.innerHTML = "";
      } else if (cmd === "music") {
        if (arg === "pause") {
          pause16BitMusic();
          output = "Música 16-bit pausada.";
        } else if (arg === "play") {
          start16BitMusic();
          const tr = getCurrentTrack();
          output = `Música 16-bit tocando: ${tr.title} [${tr.keyName}].`;
        } else if (arg === "next") {
          next16BitTrack();
          output = `Faixa seguinte: ${getCurrentTrack().title}.`;
        } else if (arg === "prev") {
          prev16BitTrack();
          output = `Faixa anterior: ${getCurrentTrack().title}.`;
        } else if (arg >= "1" && arg <= "5") {
          const tIdx = parseInt(arg, 10) - 1;
          change16BitTrack(tIdx, true);
          output = `Reproduzindo faixa ${arg}: ${getCurrentTrack().title} [${getCurrentTrack().keyName}].`;
        } else {
          toggle16BitMusic();
          output = `Música 16-bit: ${SystemState.music.isPlaying ? "Tocando (" + getCurrentTrack().title + ")" : "Pausada"}`;
        }
      } else if (cmd === "open") {
        const num = parseInt(arg, 10);
        let targetApp = null;
        if (!isNaN(num) && num >= 1 && num <= APPS.length) {
          targetApp = APPS[num - 1];
        } else {
          targetApp = APPS.find(a => a.id.includes(arg) || a.title.toLowerCase().includes(arg));
        }

        if (targetApp) {
          output = `Executando ${targetApp.title} (${targetApp.url})...`;
          launchApp(targetApp);
        } else {
          output = `<span style="color:#ff5555;">Erro: Aplicativo '${arg}' não encontrado.</span>`;
        }
      } else if (COMMANDS[rawCmd.toLowerCase()]) {
        output = COMMANDS[rawCmd.toLowerCase()]();
      } else if (COMMANDS[cmd]) {
        output = COMMANDS[cmd]();
      } else {
        output = `<span style="color:#ff5555;">bash: ${escapeHtml(cmd)}: comando não encontrado. Digite 'help'.</span>`;
      }

      if (output) {
        const respLine = document.createElement("div");
        respLine.className = "term-line";
        respLine.innerHTML = output;
        history.appendChild(respLine);
      }

      input.value = "";
      termBody.scrollTop = termBody.scrollHeight;
    }
  });

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
}

// --------------------------------------------------------------------------
// 18. Fundo Estático Autêntico do Windows XP
// --------------------------------------------------------------------------
function init3DParallax() {
  // Papel de parede estático e clássico, sem distorção ou parallax
}

function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playRetroSound("click");
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const targetId = btn.dataset.tab;
      document.querySelectorAll(".tab-content").forEach(tc => {
        tc.classList.add("hidden");
      });
      const activeContent = document.getElementById(targetId);
      if (activeContent) activeContent.classList.remove("hidden");
    });
  });
}
