/**
 * ==========================================================================
 * Aethel OS - Retro Linux & Windows XP 3D Fusion Experience
 * ==========================================================================
 */

// 1. Dados de Perfil e Projetos Oficiais
const PROFILE = {
  name: "Aethel",
  title: "Desenvolvedor & Criador de Sistemas",
  bio: "Projetos, ensaios & criações focadas em interfaces autônomas, exploração cognitiva e computação artesanal.",
  github: "https://github.com/chocotonilitz"
};

const PROJECTS = [
  {
    title: "Rex Mundi",
    url: "https://rex-mundi.vercel.app/",
    description: "Estratégia, RPG & Conquista Mundial",
    tag: "Jogo / RPG",
    icon: "👑"
  },
  {
    title: "Anima Puritas",
    url: "https://anima-puritas.vercel.app/",
    description: "Pureza interior, reflexão e serenidade espiritual",
    tag: "Espiritualidade",
    icon: "🕊️"
  },
  {
    title: "Eclesia RPG",
    url: "https://eclesia-rpg.vercel.app/",
    description: "Sistema narrativo e campanha imersiva de RPG",
    tag: "RPG",
    icon: "⚔️"
  },
  {
    title: "Compasso Money",
    url: "https://compasso-money.vercel.app/",
    description: "Gestão, orçamento e bússola financeira pessoal",
    tag: "Finanças",
    icon: "🧭"
  },
  {
    title: "Momento Vita",
    url: "https://momento-vita.vercel.app/",
    description: "Hábitos diários, Memento Mori e valorização do tempo",
    tag: "Produtividade",
    icon: "⏳"
  },
  {
    title: "Epifania Notas",
    url: "https://epifania-notas.vercel.app/",
    description: "Captura rápida de ideias, insights e epifanias",
    tag: "Anotações",
    icon: "💡"
  },
  {
    title: "Exercitium",
    url: "https://exercitium.vercel.app/",
    description: "Treino, rotina corporal e disciplina atlética",
    tag: "Saúde & Foco",
    icon: "🛡️"
  },
  {
    title: "Evo Quest",
    url: "https://evo-quest.vercel.app/",
    description: "Gamificação de metas e evolução pessoal contínua",
    tag: "Gamificação",
    icon: "🎯"
  },
  {
    title: "Cátedra Sacra",
    url: "https://catedra-sacra.vercel.app/",
    description: "Estudos teológicos, patróstica e sabedoria filosófica",
    tag: "Estudos",
    icon: "🏛️"
  },
  {
    title: "Oratio Rosarii",
    url: "https://oratio-rosarii.vercel.app/",
    description: "Guia e meditação diária dos mistérios do Rosário",
    tag: "Devoção",
    icon: "📿"
  },
  {
    title: "Leitura Tau",
    url: "https://leitura-tau.vercel.app/",
    description: "Ambiente de leitura profunda, textos e contemplação",
    tag: "Leitura",
    icon: "📖"
  },
  {
    title: "Códice Quiz",
    url: "https://codice-quiz.vercel.app/",
    description: "Perguntas, testes de sabedoria e desafios intelectuais",
    tag: "Quiz",
    icon: "📜"
  },
  {
    title: "Estuda Links",
    url: "https://estuda-links.vercel.app/",
    description: "Curadoria de recursos, bibliotecas e rotas de aprendizado",
    tag: "Educação",
    icon: "🔗"
  }
];

// Estado global do sistema
const SystemState = {
  highestZIndex: 100,
  soundEnabled: true,
  audioCtx: null,
  activeWindowId: "win-projects",
  isCompiz3d: true
};

// --------------------------------------------------------------------------
// Efeitos Sonoros Retrô (Web Audio API Synthesizer)
// --------------------------------------------------------------------------
function initAudioContext() {
  if (!SystemState.audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      SystemState.audioCtx = new AudioContext();
    }
  }
  if (SystemState.audioCtx && SystemState.audioCtx.state === 'suspended') {
    SystemState.audioCtx.resume();
  }
}

function playRetroSound(type) {
  if (!SystemState.soundEnabled) return;
  try {
    initAudioContext();
    if (!SystemState.audioCtx) return;
    const ctx = SystemState.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === "open") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(659.25, now + 0.06);
      osc.frequency.setValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.07, now);
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
    console.debug("Audio FX suppressed", e);
  }
}

// --------------------------------------------------------------------------
// Inicialização do Sistema
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderProjectsList();
  initWindowsManager();
  initDesktopIcons();
  initStartMenu();
  initSystemClock();
  initTerminal();
  initAethelAmp();
  initTabs();
  init3DParallax();
});

// --------------------------------------------------------------------------
// Renderização dos Projetos (Explorer Grid)
// --------------------------------------------------------------------------
function renderProjectsList() {
  const container = document.getElementById("projects-list-retro");
  const countStatus = document.getElementById("projects-count-status");
  const hoverInfo = document.getElementById("project-hover-info");
  if (!container) return;

  container.innerHTML = "";
  if (countStatus) countStatus.textContent = `${PROJECTS.length} objetos (Projetos Ativos)`;

  PROJECTS.forEach(proj => {
    const card = document.createElement("a");
    card.className = "project-card-retro";
    card.href = proj.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    card.innerHTML = `
      <div class="proj-icon-wrapper">
        <span class="proj-icon-glyph">${proj.icon}</span>
      </div>
      <div class="proj-info">
        <div class="proj-title">
          <span>${proj.title}</span>
        </div>
        <div class="proj-desc">${proj.description}</div>
        <span class="proj-tag">${proj.tag}</span>
      </div>
    `;

    // 3D Card Hover & Sound
    card.addEventListener("mouseenter", () => {
      playRetroSound("click");
      if (hoverInfo) {
        hoverInfo.innerHTML = `<strong>${proj.title}</strong><br>${proj.description}<br><em style="color:#0055ea;">${proj.url}</em>`;
      }
    });

    // 3D interactive tilt on card
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(600px) rotateY(${x * 0.08}deg) rotateX(${-y * 0.08}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

    container.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// Gerenciador de Janelas (Drag, Focus, Minimize, Maximize, Close)
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

    // Foco ao clicar na janela
    win.addEventListener("mousedown", () => {
      focusWindow(win);
    });

    // Fechar
    if (btnClose) {
      btnClose.addEventListener("click", (e) => {
        e.stopPropagation();
        playRetroSound("close");
        win.classList.add("minimized");
        updateTaskbar();
      });
    }

    // Minimizar
    if (btnMin) {
      btnMin.addEventListener("click", (e) => {
        e.stopPropagation();
        playRetroSound("click");
        win.classList.add("minimized");
        updateTaskbar();
      });
    }

    // Maximizar / Restaurar
    if (btnMax) {
      btnMax.addEventListener("click", (e) => {
        e.stopPropagation();
        playRetroSound("click");
        win.classList.toggle("maximized");
      });
    }

    // Arraste com física retro 3D Compiz wobble
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

        win.classList.add("wobbly");

        function onMouseMove(moveEvent) {
          if (!isDragging) return;
          const deltaX = moveEvent.clientX - startX;
          const deltaY = moveEvent.clientY - startY;

          const speedX = moveEvent.clientX - lastMoveX;
          lastMoveX = moveEvent.clientX;

          const tiltAngle = Math.max(-10, Math.min(10, speedX * 0.4));

          win.style.left = `${initialLeft + deltaX}px`;
          win.style.top = `${Math.max(0, initialTop + deltaY)}px`;

          if (SystemState.isCompiz3d) {
            win.style.transform = `perspective(1000px) rotateZ(${tiltAngle}deg) rotateY(${tiltAngle * 0.8}deg)`;
          }
        }

        function onMouseUp() {
          isDragging = false;
          win.style.transform = "";
          win.classList.remove("wobbly");
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      });
    }
  }

  // Foca a janela e a coloca na frente
  window.focusWindow = function(win) {
    if (!win) return;
    SystemState.highestZIndex += 1;
    win.style.zIndex = SystemState.highestZIndex;
    document.querySelectorAll(".window").forEach(w => w.classList.remove("active-win"));
    win.classList.add("active-win");
    SystemState.activeWindowId = win.id;
    updateTaskbar();
  };

  // Abre ou restaura uma janela
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
// Ícones do Desktop
// --------------------------------------------------------------------------
function initDesktopIcons() {
  const icons = document.querySelectorAll(".desktop-icon");
  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      icons.forEach(i => i.classList.remove("selected"));
      icon.classList.add("selected");
      playRetroSound("click");
      const targetWin = icon.dataset.window;
      if (targetWin) {
        window.openWindow(targetWin);
      }
    });

    icon.addEventListener("dblclick", () => {
      const targetWin = icon.dataset.window;
      if (targetWin) window.openWindow(targetWin);
    });
  });

  const ghIcon = document.getElementById("link-github-external");
  if (ghIcon) {
    ghIcon.addEventListener("click", () => {
      window.open(PROFILE.github, "_blank");
    });
  }
}

// --------------------------------------------------------------------------
// Menu Iniciar & Relógio
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
        startBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Ações do Start Menu
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

  function toggleSound() {
    SystemState.soundEnabled = !SystemState.soundEnabled;
    const label = SystemState.soundEnabled ? "🔊" : "🔇";
    if (soundToggle) soundToggle.textContent = label;
    if (soundStatusLabel) soundStatusLabel.textContent = `Sons: ${SystemState.soundEnabled ? "Ativados" : "Desativados"}`;
    if (SystemState.soundEnabled) playRetroSound("click");
  }

  if (soundToggle) soundToggle.addEventListener("click", toggleSound);
  if (toggleSoundBtn) toggleSoundBtn.addEventListener("click", toggleSound);

  if (compizBtn) {
    compizBtn.addEventListener("click", () => {
      SystemState.isCompiz3d = !SystemState.isCompiz3d;
      compizBtn.innerHTML = `<span>Compiz 3D: ${SystemState.isCompiz3d ? "ON" : "OFF"}</span>`;
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

  // Botões de dentro da janela Perfil
  const btnProj = document.getElementById("btn-open-projects");
  const btnTerm = document.getElementById("btn-open-terminal");
  if (btnProj) btnProj.addEventListener("click", () => window.openWindow("win-projects"));
  if (btnTerm) btnTerm.addEventListener("click", () => window.openWindow("win-terminal"));
}

function initSystemClock() {
  const clockEl = document.getElementById("tray-clock");
  function updateTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    if (clockEl) clockEl.textContent = `${h}:${m}`;
  }
  updateTime();
  setInterval(updateTime, 10000);
}

// --------------------------------------------------------------------------
// Tabs no Estilo XP
// --------------------------------------------------------------------------
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

// --------------------------------------------------------------------------
// Terminal Linux Interativo
// --------------------------------------------------------------------------
function initTerminal() {
  const input = document.getElementById("terminal-input");
  const history = document.getElementById("terminal-history");
  const termBody = document.getElementById("terminal-body");
  if (!input || !history) return;

  const COMMANDS = {
    help: () => `Comandos disponíveis:
  <span class="term-highlight">help</span>       - Exibe esta mensagem de ajuda
  <span class="term-highlight">ls</span>         - Lista projetos e diretórios
  <span class="term-highlight">projects</span>   - Lista todos os 13 links com IDs
  <span class="term-highlight">open &lt;id&gt;</span>   - Abre um projeto pelo número (ex: open 1)
  <span class="term-highlight">neofetch</span>   - Informações do sistema com arte ASCII
  <span class="term-highlight">cat bio.txt</span>- Exibe biografia de Aethel
  <span class="term-highlight">clear</span>      - Limpa a tela do terminal
  <span class="term-highlight">matrix</span>     - Modo ciberespaço
  <span class="term-highlight">date</span>       - Data e hora atual do sistema`,

    ls: () => PROJECTS.map((p, idx) => `[${idx + 1}] ${p.title}.app`).join("   "),

    projects: () => PROJECTS.map((p, idx) => 
      `<span style="color:#00ffaa;">[${idx + 1}]</span> <strong>${p.title}</strong> (${p.tag}) -> <a href="${p.url}" target="_blank" style="color:#8be9fd;">${p.url}</a>`
    ).join("<br>"),

    neofetch: () => `
<div class="term-ascii">
    .--.        <span style="color:#50fa7b;">aethel@retro-box</span>
   |o_o |       ---------------
   |:_/ |       <span style="color:#8be9fd;">OS:</span> Aethel Linux XP 3D Edition
  //   \\ \\      <span style="color:#8be9fd;">Kernel:</span> 6.8.0-xp-cyber
 (|     | )     <span style="color:#8be9fd;">Uptime:</span> 42 days, 13:37
/'\\_   _/\\'    <span style="color:#8be9fd;">Shell:</span> bash 5.2.15
\\___)=(___/     <span style="color:#8be9fd;">WM:</span> Compiz 3D Fusion
                <span style="color:#8be9fd;">Theme:</span> Windows XP Luna Blue
                <span style="color:#8be9fd;">Projetos:</span> ${PROJECTS.length} links ativos
</div>`,

    "cat bio.txt": () => `${PROFILE.name} - ${PROFILE.title}<br>${PROFILE.bio}`,

    date: () => new Date().toString(),

    clear: () => {
      history.innerHTML = "";
      return "";
    },

    matrix: () => `<span style="color:#00ff00;">Wake up, Neo... O ciberespaço está pronto.</span>`
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
      const arg = parts.slice(1).join(" ");

      let output = "";
      if (cmd === "clear") {
        history.innerHTML = "";
      } else if (cmd === "open") {
        const num = parseInt(arg, 10);
        if (num >= 1 && num <= PROJECTS.length) {
          const targetProj = PROJECTS[num - 1];
          output = `Abrindo ${targetProj.title} (${targetProj.url})...`;
          window.open(targetProj.url, "_blank");
        } else {
          output = `<span style="color:#ff5555;">Erro: Projeto '${arg}' inválido. Digite 'projects' para consultar os números.</span>`;
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
// AethelAmp (Mini Player Retrô com Sintetizador Chiptune)
// --------------------------------------------------------------------------
function initAethelAmp() {
  const btnPlay = document.getElementById("amp-play");
  const btnPause = document.getElementById("amp-pause");
  const btnStop = document.getElementById("amp-stop");
  const timerEl = document.getElementById("amp-timer");
  const vizBars = document.querySelectorAll(".v-bar");

  let isPlaying = false;
  let synthInterval = null;
  let seconds = 0;

  // Escala chiptune retrô (notas em Hz)
  const NOTES = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];

  function startChiptune() {
    initAudioContext();
    if (!SystemState.audioCtx) return;
    isPlaying = true;

    synthInterval = setInterval(() => {
      if (!isPlaying || !SystemState.soundEnabled) return;
      const ctx = SystemState.audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const note = NOTES[Math.floor(Math.random() * NOTES.length)];
      osc.type = Math.random() > 0.5 ? "square" : "sawtooth";
      osc.frequency.setValueAtTime(note, ctx.currentTime);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.18);

      // Atualiza visualizador
      vizBars.forEach(bar => {
        const h = Math.floor(Math.random() * 20) + 4;
        bar.style.height = `${h}px`;
      });

      seconds += 0.2;
      const totalSec = Math.floor(seconds);
      const m = String(Math.floor(totalSec / 60)).padStart(2, "0");
      const s = String(totalSec % 60).padStart(2, "0");
      if (timerEl) timerEl.textContent = `${m}:${s}`;
    }, 180);
  }

  function stopChiptune() {
    isPlaying = false;
    if (synthInterval) clearInterval(synthInterval);
    vizBars.forEach(bar => (bar.style.height = "4px"));
  }

  if (btnPlay) {
    btnPlay.addEventListener("click", () => {
      playRetroSound("click");
      if (!isPlaying) startChiptune();
    });
  }

  if (btnPause) {
    btnPause.addEventListener("click", () => {
      playRetroSound("click");
      stopChiptune();
    });
  }

  if (btnStop) {
    btnStop.addEventListener("click", () => {
      playRetroSound("click");
      stopChiptune();
      seconds = 0;
      if (timerEl) timerEl.textContent = "00:00";
    });
  }
}

// --------------------------------------------------------------------------
// Efeito de Parallax 3D Suave no Fundo
// --------------------------------------------------------------------------
function init3DParallax() {
  const desktop = document.getElementById("desktop");
  const hills = document.querySelector(".hills");
  if (!desktop || !hills) return;

  desktop.addEventListener("mousemove", (e) => {
    const xPct = (e.clientX / window.innerWidth - 0.5) * 15;
    const yPct = (e.clientY / window.innerHeight - 0.5) * 8;
    hills.style.transform = `translateX(${xPct}px) translateY(${yPct * 0.5}px)`;
  });
}
