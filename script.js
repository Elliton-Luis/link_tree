/**
 * ==========================================================================
 * Aethel OS - Windows XP & Linux Retro 3D Desktop Experience
 * ==========================================================================
 */

// 1. Catálogo Completo dos 13 Aplicativos Windows XP
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
  renderDesktopApps();
  renderExplorerProjects();
  renderStartMenuPrograms();
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
// 1. Renderização dos Apps na Área de Trabalho (Ícones com Atalho XP)
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
        <div class="app-badge-icon">
          <span>${app.icon}</span>
        </div>
      </div>
      <span class="icon-label">${app.title}</span>
    `;

    // Seleção com clique simples
    iconEl.addEventListener("click", () => {
      document.querySelectorAll(".desktop-icon").forEach(i => i.classList.remove("selected"));
      iconEl.classList.add("selected");
      playRetroSound("click");
    });

    // Execução do aplicativo com duplo clique
    iconEl.addEventListener("dblclick", () => {
      launchApp(app);
    });

    // Suporte ao teclado (Enter)
    iconEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        launchApp(app);
      }
    });

    container.appendChild(iconEl);
  });
}

// --------------------------------------------------------------------------
// 2. Renderização no Gerenciador de Arquivos (Meus Programas)
// --------------------------------------------------------------------------
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
        <div class="proj-title">
          <span>${app.title}</span>
        </div>
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

    // 3D Tilt interativo
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(600px) rotateY(${x * 0.08}deg) rotateX(${-y * 0.08}deg) translateY(-3px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

    // Executa ao clicar
    card.addEventListener("click", () => {
      launchApp(app);
    });

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

// --------------------------------------------------------------------------
// 3. Renderização no Menu Iniciar -> "Todos os Programas"
// --------------------------------------------------------------------------
function renderStartMenuPrograms() {
  const submenu = document.getElementById("all-programs-menu");
  const trigger = document.getElementById("all-programs-trigger");
  if (!submenu || !trigger) return;

  submenu.innerHTML = "";

  APPS.forEach(app => {
    const item = document.createElement("div");
    item.className = "sub-prog-item";
    item.innerHTML = `
      <span>${app.icon}</span>
      <span>${app.title}</span>
    `;

    item.addEventListener("click", () => {
      launchApp(app);
      document.getElementById("start-menu")?.classList.add("hidden");
      submenu.classList.add("hidden");
    });

    submenu.appendChild(item);
  });

  // Toggle do submenu de programas
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    playRetroSound("click");
    submenu.classList.toggle("hidden");
  });
}

// --------------------------------------------------------------------------
// 4. Executador de Aplicativos (App Runner Window Host)
// --------------------------------------------------------------------------
function launchApp(app) {
  playRetroSound("open");

  const win = document.getElementById("win-app-viewer");
  const titleEl = document.getElementById("app-viewer-title");
  const iconEl = document.getElementById("app-viewer-icon");
  const urlLabel = document.getElementById("app-viewer-url-label");
  const extLink = document.getElementById("app-viewer-ext-link");
  const iframe = document.getElementById("app-viewer-iframe");
  const fallback = document.getElementById("app-iframe-fallback");
  const fallbackTitle = document.getElementById("fallback-title");
  const fallbackDesc = document.getElementById("fallback-desc");
  const fallbackIcon = document.getElementById("fallback-icon");
  const fallbackBtn = document.getElementById("fallback-btn");
  const reloadBtn = document.getElementById("app-viewer-reload");

  if (!win) {
    window.open(app.url, "_blank");
    return;
  }

  // Atualiza metadados da janela
  win.dataset.title = `${app.title} - Aethel OS`;
  if (titleEl) titleEl.textContent = `${app.title} [Executando - ${app.exe}]`;
  if (iconEl) iconEl.textContent = app.icon;
  if (urlLabel) urlLabel.textContent = app.url;
  if (extLink) extLink.href = app.url;

  if (fallbackTitle) fallbackTitle.textContent = app.title;
  if (fallbackDesc) fallbackDesc.textContent = `${app.description} (${app.tag})`;
  if (fallbackIcon) fallbackIcon.textContent = app.icon;
  if (fallbackBtn) fallbackBtn.href = app.url;

  // Carrega no iframe
  if (iframe) {
    iframe.src = app.url;
  }

  if (reloadBtn) {
    reloadBtn.onclick = () => {
      playRetroSound("click");
      if (iframe) iframe.src = app.url;
    };
  }

  // Exibe a janela
  win.classList.remove("minimized");
  window.focusWindow(win);
}

// --------------------------------------------------------------------------
// 5. Gerenciador de Janelas (Drag, Focus, Minimize, Maximize, Close)
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

    win.addEventListener("mousedown", () => {
      focusWindow(win);
    });

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
// 6. Ícones do Desktop (Sistema)
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
// 7. Menu Iniciar & Relógio
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
// 8. Tabs Estilo XP
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
// 9. Terminal Linux Bash Interativo
// --------------------------------------------------------------------------
function initTerminal() {
  const input = document.getElementById("terminal-input");
  const history = document.getElementById("terminal-history");
  const termBody = document.getElementById("terminal-body");
  if (!input || !history) return;

  const COMMANDS = {
    help: () => `Comandos disponíveis:
  <span class="term-highlight">help</span>       - Exibe esta mensagem de ajuda
  <span class="term-highlight">ls</span>         - Lista todos os 13 executáveis
  <span class="term-highlight">projects</span>   - Lista os apps com links diretos
  <span class="term-highlight">open &lt;id&gt;</span>   - Executa app pelo ID (ex: open 1 ou open rex)
  <span class="term-highlight">neofetch</span>   - Informações do sistema com arte ASCII
  <span class="term-highlight">cat bio.txt</span>- Exibe biografia de Aethel
  <span class="term-highlight">clear</span>      - Limpa a tela do terminal
  <span class="term-highlight">date</span>       - Data e hora atual do sistema`,

    ls: () => APPS.map(a => `<span style="color:#00ffaa;">${a.exe}</span>`).join("   "),

    projects: () => APPS.map((a, idx) => 
      `<span style="color:#00ffaa;">[${idx + 1}]</span> <strong>${a.title}</strong> (${a.tag}) -> <a href="${a.url}" target="_blank" style="color:#8be9fd;">${a.url}</a>`
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
                <span style="color:#8be9fd;">Aplicativos:</span> ${APPS.length} apps instalados
</div>`,

    "cat bio.txt": () => `${PROFILE.name} - ${PROFILE.title}<br>${PROFILE.bio}`,

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
          output = `<span style="color:#ff5555;">Erro: Aplicativo '${arg}' não encontrado. Digite 'projects' para listar.</span>`;
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
// 10. AethelAmp (Sintetizador Chiptune Retrô)
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

      gain.gain.setValueAtTime(0.025, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.16);

      vizBars.forEach(bar => {
        const h = Math.floor(Math.random() * 18) + 3;
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
    vizBars.forEach(bar => (bar.style.height = "3px"));
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
// 11. Parallax 3D Suave no Fundo
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
