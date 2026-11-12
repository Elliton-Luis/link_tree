/**
 * Configurações do Link Tree
 * Edite os dados abaixo para personalizar seu perfil e projetos.
 */
const PROFILE_DATA = {
  name: "Seu Nome",
  bio: "Projetos, ensaios & criações",
  avatarUrl: "avatar.jpg",
  projects: [
    {
      title: "Sonar",
      description: "Agente e governança autônoma de desenvolvimento",
      url: "https://github.com/chocotonilitz/sonar"
    },
    {
      title: "Atlas",
      description: "Mapeamento e visualização de dados",
      url: "https://github.com/chocotonilitz/atlas"
    },
    {
      title: "Curio",
      description: "Exploração e curadoria de conteúdo",
      url: "https://github.com/chocotonilitz/curio"
    },
    {
      title: "Neuro-Zen",
      description: "Interface e foco cognitivo minimalista",
      url: "https://github.com/chocotonilitz/neuro-zen"
    }
  ]
};

/**
 * Inicialização dos dados e elementos do DOM
 */
function initLinkTree() {
  renderProfile();
  renderProjects();
}

/**
 * Renderiza informações de perfil e configura fallback de imagem
 */
function renderProfile() {
  const nameEl = document.getElementById("profile-name");
  const bioEl = document.getElementById("profile-bio");
  const imgEl = document.getElementById("profile-img");
  const fallbackEl = document.getElementById("avatar-fallback");

  if (nameEl) nameEl.textContent = PROFILE_DATA.name;
  if (bioEl) bioEl.textContent = PROFILE_DATA.bio;

  if (imgEl && fallbackEl) {
    imgEl.src = PROFILE_DATA.avatarUrl;

    imgEl.addEventListener("error", () => {
      imgEl.classList.add("is-hidden");
      fallbackEl.classList.add("is-visible");
    });

    imgEl.addEventListener("load", () => {
      imgEl.classList.remove("is-hidden");
      fallbackEl.classList.remove("is-visible");
    });
  }
}

/**
 * Cria elemento DOM para um card de projeto individual
 */
function createProjectCard(project) {
  const li = document.createElement("li");

  const anchor = document.createElement("a");
  anchor.href = project.url;
  anchor.className = "link-card";
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";

  const title = document.createElement("span");
  title.className = "link-title";
  title.textContent = project.title;

  const desc = document.createElement("span");
  desc.className = "link-description";
  desc.textContent = project.description;

  anchor.appendChild(title);
  anchor.appendChild(desc);
  li.appendChild(anchor);

  return li;
}

/**
 * Renderiza lista de projetos
 */
function renderProjects() {
  const listEl = document.getElementById("links-list");
  if (!listEl) return;

  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  PROFILE_DATA.projects.forEach((project) => {
    const cardEl = createProjectCard(project);
    fragment.appendChild(cardEl);
  });

  listEl.appendChild(fragment);
}

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initLinkTree);
