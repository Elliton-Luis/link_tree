/**
 * ==========================================================================
 * Aethel OS - Minimalist Retro 3D Desktop Experience
 * ==========================================================================
 */

// 1. Catálogo Completo dos 14 Aplicativos
const APPS = [
  {
    id: "rex-mundi",
    title: "Rex Mundi",
    exe: "rexmundi.exe",
    url: "https://rex-mundi.vercel.app/",
    description: "Estratégia, RPG & Conquista Mundial",
    tag: "Jogo / RPG",
    icon: "👑",
    color: "#8338ec"
  },
  {
    id: "anima-puritas",
    title: "Anima Puritas",
    exe: "animapuritas.exe",
    url: "https://anima-puritas.vercel.app/",
    description: "Pureza interior, reflexão e serenidade espiritual",
    tag: "Espiritualidade",
    icon: "🕊️",
    color: "#3a86ff"
  },
  {
    id: "eclesia-rpg",
    title: "Eclesia RPG",
    exe: "eclesiarpg.exe",
    url: "https://eclesia-rpg.vercel.app/",
    description: "Sistema narrativo e campanha imersiva de RPG",
    tag: "RPG",
    icon: "⚔️",
    color: "#d90429"
  },
  {
    id: "compasso-money",
    title: "Compasso Money",
    exe: "compasso.exe",
    url: "https://compasso-money.vercel.app/",
    description: "Gestão, orçamento e bússola financeira pessoal",
    tag: "Finanças",
    icon: "🧭",
    color: "#2a9d8f"
  },
  {
    id: "momento-vita",
    title: "Momento Vita",
    exe: "momentovita.exe",
    url: "https://momento-vita.vercel.app/",
    description: "Hábitos diários, Memento Mori e valorização do tempo",
    tag: "Produtividade",
    icon: "⏳",
    color: "#e76f51"
  },
  {
    id: "epifania-notas",
    title: "Epifania Notas",
    exe: "epifania.exe",
    url: "https://epifania-notas.vercel.app/",
    description: "Captura rápida de ideias, insights e epifanias",
    tag: "Anotações",
    icon: "💡",
    color: "#e9c46a"
  },
  {
    id: "exercitium",
    title: "Exercitium",
    exe: "exercitium.exe",
    url: "https://exercitium.vercel.app/",
    description: "Treino, rotina corporal e disciplina atlética",
    tag: "Saúde & Foco",
    icon: "🛡️",
    color: "#4361ee"
  },
  {
    id: "evo-quest",
    title: "Evo Quest",
    exe: "evoquest.exe",
    url: "https://evo-quest.vercel.app/",
    description: "Gamificação de metas e evolução pessoal contínua",
    tag: "Gamificação",
    icon: "🎯",
    color: "#f72585"
  },
  {
    id: "catedra-sacra",
    title: "Cátedra Sacra",
    exe: "catedrasacra.exe",
    url: "https://catedra-sacra.vercel.app/",
    description: "Estudos teológicos, patrística e sabedoria clássica",
    tag: "Estudos",
    icon: "🏛️",
    color: "#457b9d"
  },
  {
    id: "oratio-rosarii",
    title: "Oratio Rosarii",
    exe: "rosarii.exe",
    url: "https://oratio-rosarii.vercel.app/",
    description: "Guia e meditação diária dos mistérios do Santo Rosário",
    tag: "Devoção",
    icon: "📿",
    color: "#6c5ce7"
  },
  {
    id: "leitura-tau",
    title: "Leitura Tau",
    exe: "leituratau.exe",
    url: "https://leitura-tau.vercel.app/",
    description: "Ambiente de leitura profunda, textos e contemplação",
    tag: "Leitura",
    icon: "📖",
    color: "#b08968"
  },
  {
    id: "codice-quiz",
    title: "Códice Quiz",
    exe: "codicequiz.exe",
    url: "https://codice-quiz.vercel.app/",
    description: "Perguntas, testes de sabedoria e desafios intelectuais",
    tag: "Quiz",
    icon: "📜",
    color: "#d4a373"
  },
  {
    id: "estuda-links",
    title: "Estuda Links",
    exe: "estudalinks.exe",
    url: "https://estuda-links.vercel.app/",
    description: "Curadoria de recursos, links e rotas de aprendizado",
    tag: "Educação",
    icon: "🔗",
    color: "#00b4d8"
  },
  {
    id: "blog-aletheia",
    title: "Blog Aletheia",
    exe: "aletheia.exe",
    url: "https://blog-aletheia.vercel.app/",
    description: "Ensaios filosóficos, reflexões e busca pela verdade",
    tag: "Filosofia & Blog",
    icon: "🕯️",
    color: "#e63946"
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
  activeWindowId: "win-projects",
  isCompiz3d: true,
  music: {
    isPlaying: false,
    interval: null,
    volume: 0.035,
    seconds: 0,
    noteIndex: 0
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
// 3. Sintetizador de Música 8-Bit (Melodia Nostálgica Autêntica)
// --------------------------------------------------------------------------
// Progressão chiptune melódica harmoniosa
const CHIPTUNE_MELODY = [
  { note: 261.63, len: 0.18, bass: 130.81 }, // C4
  { note: 329.63, len: 0.18, bass: 130.81 }, // E4
  { note: 392.00, len: 0.18, bass: 130.81 }, // G4
  { note: 523.25, len: 0.36, bass: 130.81 }, // C5
  { note: 440.00, len: 0.18, bass: 110.00 }, // A4
  { note: 349.23, len: 0.18, bass: 110.00 }, // F4
  { note: 392.00, len: 0.36, bass: 110.00 }, // G4
  { note: 329.63, len: 0.18, bass: 98.00  }, // E4
  { note: 293.66, len: 0.18, bass: 98.00  }, // D4
  { note: 261.63, len: 0.36, bass: 98.00  }, // C4
  { note: 293.66, len: 0.18, bass: 123.47 }, // D4
  { note: 349.23, len: 0.18, bass: 123.47 }, // F4
  { note: 392.00, len: 0.18, bass: 123.47 }, // G4
  { note: 440.00, len: 0.18, bass: 123.47 }, // A4
  { note: 493.88, len: 0.36, bass: 123.47 }, // B4
  { note: 523.25, len: 0.54, bass: 130.81 }  // C5
];

function play8BitNote(step) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const item = CHIPTUNE_MELODY[step % CHIPTUNE_MELODY.length];

    // Lead Square Wave (Onda Quadrada 8-Bit)
    const oscLead = ctx.createOscillator();
    const gainLead = ctx.createGain();
    oscLead.type = "square";
    oscLead.frequency.setValueAtTime(item.note, now);

    gainLead.gain.setValueAtTime(SystemState.music.volume, now);
    gainLead.gain.exponentialRampToValueAtTime(0.0001, now + item.len);

    oscLead.connect(gainLead);
    gainLead.connect(ctx.destination);
    oscLead.start(now);
    oscLead.stop(now + item.len);

    // Bassline (Triangle wave dos anos 80/90)
    if (step % 2 === 0) {
      const oscBass = ctx.createOscillator();
      const gainBass = ctx.createGain();
      oscBass.type = "triangle";
      oscBass.frequency.setValueAtTime(item.bass, now);
      gainBass.gain.setValueAtTime(SystemState.music.volume * 0.9, now);
      gainBass.gain.exponentialRampToValueAtTime(0.0001, now + (item.len * 1.5));
      oscBass.connect(gainBass);
      gainBass.connect(ctx.destination);
      oscBass.start(now);
      oscBass.stop(now + (item.len * 1.5));
    }
  } catch (e) {
    console.debug("8-bit note suppressed", e);
  }
}

function start8BitMusic() {
  if (SystemState.music.isPlaying) return;
  getAudioContext();
  SystemState.music.isPlaying = true;
  updateMusicUI(true);

  SystemState.music.interval = setInterval(() => {
    if (!SystemState.music.isPlaying) return;

    play8BitNote(SystemState.music.noteIndex);
    SystemState.music.noteIndex = (SystemState.music.noteIndex + 1) % CHIPTUNE_MELODY.length;

    // Atualiza visualizador AethelAmp
    const vizBars = document.querySelectorAll(".v-bar");
    vizBars.forEach(bar => {
      const h = Math.floor(Math.random() * 18) + 4;
      bar.style.height = `${h}px`;
    });

    SystemState.music.seconds += 0.22;
    const totalSec = Math.floor(SystemState.music.seconds);
    const m = String(Math.floor(totalSec / 60)).padStart(2, "0");
    const s = String(totalSec % 60).padStart(2, "0");
    const timerEl = document.getElementById("amp-timer");
    if (timerEl) timerEl.textContent = `${m}:${s}`;
  }, 220);
}

function pause8BitMusic() {
  SystemState.music.isPlaying = false;
  if (SystemState.music.interval) {
    clearInterval(SystemState.music.interval);
    SystemState.music.interval = null;
  }
  const vizBars = document.querySelectorAll(".v-bar");
  vizBars.forEach(bar => (bar.style.height = "3px"));
  updateMusicUI(false);
}

function toggle8BitMusic() {
  if (SystemState.music.isPlaying) {
    pause8BitMusic();
  } else {
    start8BitMusic();
  }
}

function updateMusicUI(playing) {
  const ampPlayBtn = document.getElementById("amp-play-pause-btn");
  const chipBtn = document.getElementById("music-chip-btn");
  const chipLabel = document.getElementById("music-chip-label");
  const ampChip = document.getElementById("amp-status-chip");

  if (playing) {
    if (ampPlayBtn) ampPlayBtn.textContent = "❚❚ Pausar";
    if (chipBtn) chipBtn.textContent = "❚❚";
    if (chipLabel) chipLabel.textContent = "8-bit: Tocando";
    if (ampChip) ampChip.textContent = "ESTADO: TOCANDO";
  } else {
    if (ampPlayBtn) ampPlayBtn.textContent = "► Tocar";
    if (chipBtn) chipBtn.textContent = "►";
    if (chipLabel) chipLabel.textContent = "8-bit: Pausado";
    if (ampChip) ampChip.textContent = "ESTADO: PAUSADO";
  }
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

  // "Ao entrar toque uma musiquinha 8 bits"
  // Os navegadores modernos exigem interação do usuário antes de liberar som.
  // Tentamos iniciar imediatamente, e registramos um listener para a primeira interação caso bloqueado.
  setupAutoPlayMusic();
});

function setupAutoPlayMusic() {
  // Tentativa inicial
  try {
    start8BitMusic();
  } catch (e) {
    console.debug("Autoplay pending user click");
  }

  // Desperta na primeira interação com a página (clique, toque ou tecla)
  function handleFirstUserGesture() {
    if (!SystemState.music.isPlaying) {
      start8BitMusic();
      showBalloonNotification();
    }
    window.removeEventListener("click", handleFirstUserGesture);
    window.removeEventListener("keydown", handleFirstUserGesture);
    window.removeEventListener("touchstart", handleFirstUserGesture);
  }

  window.addEventListener("click", handleFirstUserGesture, { once: true });
  window.addEventListener("keydown", handleFirstUserGesture, { once: true });
  window.addEventListener("touchstart", handleFirstUserGesture, { once: true });

  // Exibe balão de boas-vindas após 1.5s
  setTimeout(showBalloonNotification, 1500);
}

function showBalloonNotification() {
  const balloon = document.getElementById("xp-balloon");
  if (!balloon) return;
  balloon.classList.remove("hidden");
  document.getElementById("balloon-close")?.addEventListener("click", () => {
    balloon.classList.add("hidden");
  });
  setTimeout(() => balloon.classList.add("hidden"), 10000);
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
    iconEl.title = `${app.title} (${app.exe})\n${app.description}`;

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
  if (countStatus) countStatus.textContent = `${APPS.length} aplicativos instalados`;

  APPS.forEach(app => {
    const card = document.createElement("div");
    card.className = "project-card-retro";
    card.tabIndex = 0;

    card.innerHTML = `
      <div class="proj-icon-wrapper">
        <span class="proj-icon-glyph">${app.icon}</span>
      </div>
      <div class="proj-info">
        <div class="proj-title">${app.title}</div>
        <div class="proj-desc">${app.description}</div>
        <span class="proj-tag">${app.tag}</span>
      </div>
    `;

    card.addEventListener("mouseenter", () => {
      playRetroSound("click");
      if (hoverInfo) {
        hoverInfo.innerHTML = `
          <strong>${app.title} (${app.exe})</strong><br>
          <em>${app.description}</em><br>
          <span style="color:#0055ea;">URL: ${app.url}</span>
        `;
      }
    });

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(600px) rotateY(${x * 0.08}deg) rotateX(${-y * 0.08}deg) translateY(-3px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
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
// 6. Executador de Aplicativos (App Runner XP)
// --------------------------------------------------------------------------
function launchApp(app) {
  playRetroSound("open");

  const win = document.getElementById("win-app-viewer");
  const titleEl = document.getElementById("app-viewer-title");
  const iconEl = document.getElementById("app-viewer-icon");
  const urlLabel = document.getElementById("app-viewer-url-label");
  const extLink = document.getElementById("app-viewer-ext-link");
  const iframe = document.getElementById("app-viewer-iframe");
  const fallbackTitle = document.getElementById("fallback-title");
  const fallbackDesc = document.getElementById("fallback-desc");
  const fallbackIcon = document.getElementById("fallback-icon");
  const fallbackBtn = document.getElementById("fallback-btn");
  const reloadBtn = document.getElementById("app-viewer-reload");

  if (!win) {
    window.open(app.url, "_blank");
    return;
  }

  win.dataset.title = `${app.title} - Aethel OS`;
  if (titleEl) titleEl.textContent = `${app.title} [Executando - ${app.exe}]`;
  if (iconEl) iconEl.textContent = app.icon;
  if (urlLabel) urlLabel.textContent = app.url;
  if (extLink) extLink.href = app.url;

  if (fallbackTitle) fallbackTitle.textContent = app.title;
  if (fallbackDesc) fallbackDesc.textContent = `${app.description} (${app.tag})`;
  if (fallbackIcon) fallbackIcon.textContent = app.icon;
  if (fallbackBtn) fallbackBtn.href = app.url;

  if (iframe) iframe.src = app.url;

  if (reloadBtn) {
    reloadBtn.onclick = () => {
      playRetroSound("click");
      if (iframe) iframe.src = app.url;
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
        lastMoveX = e.clientX;

        function onMouseMove(moveEvent) {
          if (!isDragging) return;
          const deltaX = moveEvent.clientX - startX;
          const deltaY = moveEvent.clientY - startY;

          const speedX = moveEvent.clientX - lastMoveX;
          lastMoveX = moveEvent.clientX;

          const tiltAngle = Math.max(-8, Math.min(8, speedX * 0.35));

          win.style.left = `${initialLeft + deltaX}px`;
          win.style.top = `${Math.max(0, initialTop + deltaY)}px`;

          if (SystemState.isCompiz3d) {
            win.style.transform = `perspective(1000px) rotateZ(${tiltAngle}deg) rotateY(${tiltAngle * 0.7}deg)`;
          }
        }

        function onMouseUp() {
          isDragging = false;
          win.style.transform = "";
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
  const ampNext = document.getElementById("amp-next");
  const ampVol = document.getElementById("amp-vol");
  const chip = document.getElementById("taskbar-music-chip");
  const chipBtn = document.getElementById("music-chip-btn");

  if (ampPlayPause) {
    ampPlayPause.addEventListener("click", () => {
      playRetroSound("click");
      toggle8BitMusic();
    });
  }

  if (chip) {
    chip.addEventListener("click", () => {
      playRetroSound("click");
      toggle8BitMusic();
    });
  }

  if (chipBtn) {
    chipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      playRetroSound("click");
      toggle8BitMusic();
    });
  }

  if (ampStop) {
    ampStop.addEventListener("click", () => {
      playRetroSound("click");
      pause8BitMusic();
      SystemState.music.seconds = 0;
      SystemState.music.noteIndex = 0;
      const timerEl = document.getElementById("amp-timer");
      if (timerEl) timerEl.textContent = "00:00";
    });
  }

  if (ampNext) {
    ampNext.addEventListener("click", () => {
      playRetroSound("click");
      SystemState.music.noteIndex = (SystemState.music.noteIndex + 4) % CHIPTUNE_MELODY.length;
      if (!SystemState.music.isPlaying) start8BitMusic();
    });
  }

  if (ampVol) {
    ampVol.addEventListener("input", (e) => {
      const pct = parseInt(e.target.value, 10) / 100;
      SystemState.music.volume = pct * 0.06;
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

  const DEFAULT_NOTE = `==============================================
AETHEL OS - NOTAS & MANIFESTO
==============================================
Bem-vindo ao Aethel OS (Edição Minimalista Retrô).

Aqui você tem acesso a todos os meus 14 projetos,
um tocador de som 8-bit, terminal Linux e ferramentas
táteis inspiradas na era de ouro dos desktops.

Você pode editar este texto livremente. Suas anotações
são salvas automaticamente no armazenamento local.

Ass: Aethel (Elliton Luis)
github.com/Elliton-Luis`;

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
          pause8BitMusic();
          output = "Música 8-bit pausada.";
        } else if (arg === "play") {
          start8BitMusic();
          output = "Música 8-bit tocando.";
        } else {
          toggle8BitMusic();
          output = `Música 8-bit: ${SystemState.music.isPlaying ? "Tocando" : "Pausada"}`;
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
// 18. Parallax 3D Suave no Fundo
// --------------------------------------------------------------------------
function init3DParallax() {
  const desktop = document.getElementById("desktop");
  const hills = document.querySelector(".hills");
  if (!desktop || !hills) return;

  desktop.addEventListener("mousemove", (e) => {
    const xPct = (e.clientX / window.innerWidth - 0.5) * 12;
    const yPct = (e.clientY / window.innerHeight - 0.5) * 6;
    hills.style.transform = `translateX(${xPct}px) translateY(${yPct * 0.5}px)`;
  });
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
