'use strict';

// ============================================================
//  PROJECT DATA
// ============================================================
const PROJECTS = [
  {
    id: 'vrwheelchair',
    title: 'VR Wheelchair Simulator',
    image: 'images/VRWheelchair.png',
    description: 'A realtime, immersive, interactive simulator designed to help new users with mobility impairments prepare for real-world environments. Continues the VirtuRoll team\'s work with new features: force feedback, improved wheelchair movement, enhanced ramp physics, and a less nauseating overall experience.',
    bullets: [
      'Implemented real-time friction and resistance to simulate different terrain types',
      'Integrated Unreal Engine, Quest VR, Arduino controllers, encoders, and motors',
      'Authored technical documentation including detailed design, architecture, and system requirements',
    ],
    tools: ['C++', 'Unreal Engine', 'Quest 2 VR Headset', 'Serial Port Communication', '3D Modeling Software', 'Brushless Motors'],
    link: 'https://websites.uta.edu/cseseniordesign/2025/12/09/vr-wheelchair-f25/',
  },
  {
    id: 'resumetailor',
    title: 'Resume Tailor',
    image: 'images/resumeTailorSS.png',
    description: 'A Python tool that tailors resumes to job descriptions by ranking projects and generating LaTeX output. Integrates PDF compilation and LLM-assisted selection.',
    bullets: [
      'Integrated PDF compilation and LLM-assisted selection for top relevant projects',
      'Automatically generates LaTeX-formatted resume sections with project descriptions, bullets, and technologies',
      'Supports dynamic ranking of projects based on job descriptions for quick tailoring across multiple applications',
    ],
    tools: ['Python', 'LaTeX', 'MiKTeX', 'Sentence Transformers', 'NumPy', 'JSON', 'Ollama/LLaMA'],
  },
  {
    id: 'fat32',
    title: 'FAT32 File System',
    image: 'images/FAT32.png',
    description: 'A C-based interpreter for FAT32 file system images, enabling low-level file and directory interactions. Implements essential file system commands.',
    bullets: [
      'File Operations: get (retrieve files), read (view in hex/binary/ASCII), and put (add files to the system)',
      'Navigation Commands: cd for directory traversal and ls for listing directory contents',
      'Enhanced usability with support for batch command execution within a single terminal input',
    ],
    tools: ['C', 'GCC', 'GDB', 'Bash', 'Git'],
    link: 'https://github.com/Jackson-Bond/FAT32-File-System-Interpreter',
  },
  {
    id: 'transactionmanager',
    title: 'Transaction Manager',
    image: 'images/transactionManager.png',
    description: 'Implements the transaction logic for Strict 2PL specification. Focused on correct synchronization, locking, and waiting behavior to ensure safe concurrent execution.',
    bullets: [
      'Implements transaction execution with proper lock acquisition and release',
      'Ensures correctness under concurrent transaction execution',
      'Uses waiting logic to handle lock contention safely',
    ],
    tools: ['C', 'GCC', 'GDB'],
    link: 'https://github.com/Jackson-Bond/Transaction-Manager-Implementation',
  },
  {
    id: 'mapreduce',
    title: 'IMDB Map/Reduce',
    image: 'images/mapreduce.jpg',
    description: 'A Hadoop MapReduce project that processes IMDB datasets using a multi-stage pipeline. Designed to run both locally and on a SLURM-managed Hadoop cluster.',
    bullets: [
      'Created 2 Jobs of Map/Reduce to find movies per actor per year (Willem Dafoe)',
      'Configurable parameters for job execution to control the amount of mappers & reducers',
      'Analyzed performance of different mapper/reducer counts; results included in spreadsheet',
    ],
    tools: ['Java', 'Hadoop 3.2.2', 'HDFS', 'SLURM'],
    link: 'https://github.com/Jackson-Bond/IMDB-Database-MapReduce',
  },
  {
    id: 'bashshell',
    title: 'Bash-Like Shell',
    image: 'images/bash.png',
    description: 'A custom shell program in C that uses forking to execute commands, navigate directories, handle built-in commands (exit, quit, cd), support output redirection, and allow batch mode from a file.',
    bullets: [
      'Allows redirection of command output to a file using the > operator',
      'Prompts users with msh> to enter commands',
      'Searches for commands in /bin/, /usr/bin/, /usr/local/bin/, and the current directory (./)'],
    tools: ['C', 'POSIX System Calls', 'Linux/Unix Environment', 'Process Management (fork/exec)', 'File I/O Redirection'],
    link: 'https://github.com/Jackson-Bond/Bash-Like-Shell',
  },
  {
    id: 'crayoneater',
    title: 'Crayon Eater',
    image: 'images/crayon.png',
    description: 'An educational game designed to teach children elementary math (addition, subtraction, multiplication). Eat crayons to gain points — answer math questions correctly to earn more crayons.',
    bullets: [
      'Animations and sound effects designed to be engaging for children',
      'A wide range of difficulty levels to progressively challenge players',
      'Fully hand-made art designed to look like a child drew it',
    ],
    tools: ['Unity', 'C#', 'Krita'],
  },
  {
    id: 'worthyshepherd',
    title: 'The Worthy Shepherd',
    image: 'images/Herder.png',
    description: "A game where the player herds sheep to obtain the golden fleece. Uses Boid's realistic flocking algorithm to simulate sheep movement. Leave flocks in specialized pens to earn gold.",
    bullets: [
      "Avoid wolves while herding your flock",
      "Each sheep's color is determined by 6 stats — each stat is assigned a color, weighted and blended into the sheep's final appearance",
      'Multiple mini-games each requiring a different sheep stat to excel',
    ],
    tools: ['Unity', 'C#', "Boid's Algorithm"],
  },
  {
    id: 'kleptomaniac',
    title: 'Kleptomaniac',
    image: 'images/klepto.png',
    description: "Steal anything that isn't nailed down! Your goal is to steal the king's crown and become the new ruler. Avoid guards and traps, complete side quests for gold. Built in a group of 4 over 3 weeks.",
    bullets: [
      'Implemented object-based systems allowing nearly all items to be stolen',
      'Scripts optimized for performance to reduce lag',
      '4 distinct enemy types each with unique mechanics and animations',
    ],
    tools: ['Unity', 'C#', 'Aseprite'],
  },
  {
    id: 'malloc',
    title: 'Custom Memory Allocator',
    image: 'images/malloc.png',
    description: 'Developed 4 custom heap allocation algorithms in C to replace the standard malloc.',
    bullets: [
      'Designed and implemented four algorithms in C: First Fit, Next Fit, Best Fit, and Worst Fit',
      'Replaced the standard malloc with custom implementations',
      'Created benchmarking applications to compare implementations against standard malloc for performance and memory efficiency',
    ],
    tools: ['C', 'GCC', 'GDB', 'Git'],
    link: 'https://github.com/Jackson-Bond/Custom-Malloc',
  },
  {
    id: 'vae',
    title: 'Variational Autoencoder',
    image: 'images/vae.png',
    description: 'A Variational Autoencoder (VAE) trained on the CelebA face dataset, with an interactive GUI for exploring the latent space.',
    bullets: [
      'A convolutional VAE encodes 64×64 celebrity images into a 6-dimensional latent space and reconstructs them, with a tunable β parameter for disentanglement',
      'A Tkinter interface with 6 sliders lets you manipulate each latent dimension and instantly decode/visualize the resulting face',
      'Includes a training script with configurable epochs/batch size/β, and a saved model checkpoint'
    ],
    tools: ['Python', 'PyTorch', 'NumpPy', 'Tkinter', 'Neural Networks', 'AI'],
    link: 'https://github.com/Jackson-Bond/Celebrity_Variational_AutoEncoder',
  },
];

// ============================================================
//  STATE
// ============================================================
let highestZ = 100;
const openWindows = {};
let selectedIcon  = null;
let startMenuOpen = false;
let dragging  = null;
let dragOffX  = 0;
let dragOffY  = 0;
let resizing  = null;
let rsStartX  = 0;
let rsStartY  = 0;
let rsStartW  = 0;
let rsStartH  = 0;

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  buildDesktop();
  startClock();

  document.getElementById('start-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleStartMenu();
  });

  document.getElementById('start-about-btn').addEventListener('click', () => {
    openAboutWindow();
    closeStartMenu();
  });

  document.getElementById('start-github-btn').addEventListener('click', () => {
    window.open('https://github.com/Jackson-Bond', '_blank', 'noopener,noreferrer');
    closeStartMenu();
  });

  document.getElementById('desktop').addEventListener('click', () => {
    deselectAll();
    closeStartMenu();
  });

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

// ============================================================
//  DESKTOP ICONS
// ============================================================
function buildDesktop() {
  const container = document.getElementById('desktop-icons');
  container.appendChild(createIconEl({ id: 'about', title: 'About Me', isAbout: true }));
  PROJECTS.forEach(p => container.appendChild(createIconEl(p)));
}

function createIconEl(project) {
  const icon = document.createElement('div');
  icon.className = 'desktop-icon';
  icon.dataset.projectId = project.id;

  const wrap = document.createElement('div');
  wrap.className = 'icon-img-wrap';

  if (project.isAbout) {
    const span = document.createElement('span');
    span.className = 'about-icon';
    span.textContent = '\uD83D\uDC64';
    wrap.appendChild(span);
  } else {
    const img = document.createElement('img');
    img.className = 'icon-img';
    img.src = project.image;
    img.alt = project.title;
    wrap.appendChild(img);
  }

  const label = document.createElement('span');
  label.className = 'icon-label';
  label.textContent = project.title || 'About Me';

  icon.appendChild(wrap);
  icon.appendChild(label);

  // Single click = select
  icon.addEventListener('click', (e) => {
    e.stopPropagation();
    selectIcon(icon);
    closeStartMenu();
  });

  // Double click = open
  icon.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    if (project.isAbout) {
      openAboutWindow();
    } else {
      openProjectWindow(project);
    }
  });

  return icon;
}

function selectIcon(icon) {
  if (selectedIcon && selectedIcon !== icon) {
    selectedIcon.classList.remove('selected');
  }
  icon.classList.toggle('selected');
  selectedIcon = icon.classList.contains('selected') ? icon : null;
}

function deselectAll() {
  if (selectedIcon) {
    selectedIcon.classList.remove('selected');
    selectedIcon = null;
  }
}

// ============================================================
//  WINDOWS
// ============================================================
function openProjectWindow(project) {
  if (openWindows[project.id]) {
    restoreWindow(project.id);
    return;
  }

  const win = document.createElement('div');
  win.className = 'win';
  win.dataset.id = project.id;

  // Position with slight cascade
  const count = Object.keys(openWindows).length;
  win.style.left = (80 + count * 25) + 'px';
  win.style.top  = (50 + count * 25) + 'px';
  win.style.width  = '480px';
  win.style.height = '560px';
  win.style.zIndex = ++highestZ;

  // Title bar
  const titleBar = document.createElement('div');
  titleBar.className = 'win-title-bar';

  const iconEl = document.createElement('img');
  iconEl.className = 'win-icon';
  iconEl.src = project.image;
  iconEl.alt = '';

  const titleText = document.createElement('span');
  titleText.className = 'win-title-text';
  titleText.textContent = project.title;

  const btns = document.createElement('div');
  btns.className = 'win-btns';

  const minBtn = makeWinBtn('win-btn-min', '—', () => minimizeWindow(project.id));
  const maxBtn = makeWinBtn('win-btn-max', '□', () => toggleMaximize(project.id));
  const closeBtn = makeWinBtn('win-btn-close', '✕', () => closeWindow(project.id));

  btns.appendChild(minBtn);
  btns.appendChild(maxBtn);
  btns.appendChild(closeBtn);

  titleBar.appendChild(iconEl);
  titleBar.appendChild(titleText);
  titleBar.appendChild(btns);

  // Toolbar strip
  const toolbar = document.createElement('div');
  toolbar.className = 'win-toolbar';

  // Body
  const body = document.createElement('div');
  body.className = 'win-body';

  const content = document.createElement('div');
  content.className = 'proj-content';

  // Screenshot
  const img = document.createElement('img');
  img.className = 'proj-img';
  img.src = project.image;
  img.alt = project.title;
  content.appendChild(img);

  // Description
  const desc = document.createElement('p');
  desc.className = 'proj-desc';
  desc.textContent = project.description;
  content.appendChild(desc);

  // Bullets
  if (project.bullets && project.bullets.length) {
    const ul = document.createElement('ul');
    ul.className = 'proj-bullets';
    project.bullets.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      ul.appendChild(li);
    });
    content.appendChild(ul);
  }

  // Tools
  if (project.tools && project.tools.length) {
    const toolsWrap = document.createElement('div');
    toolsWrap.className = 'proj-tools-wrap';
    project.tools.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'proj-tool-tag';
      tag.textContent = t;
      toolsWrap.appendChild(tag);
    });
    content.appendChild(toolsWrap);
  }

  // Actions - only show View Project button if there's a link
  if (project.link) {
    const actions = document.createElement('div');
    actions.className = 'proj-actions';
    const viewBtn = document.createElement('button');
    viewBtn.className = 'win-action-btn';
    viewBtn.textContent = 'View Project';
    viewBtn.addEventListener('click', () => window.open(project.link, '_blank', 'noopener,noreferrer'));
    actions.appendChild(viewBtn);
    content.appendChild(actions);
  }
  body.appendChild(content);

  // Resize handle
  const resize = document.createElement('div');
  resize.className = 'win-resize';
  resize.addEventListener('mousedown', (e) => startResize(e, project.id));

  win.appendChild(titleBar);
  win.appendChild(toolbar);
  win.appendChild(body);
  win.appendChild(resize);

  // Drag
  titleBar.addEventListener('mousedown', (e) => {
    if (e.target.closest('.win-btn')) return;
    startDrag(e, project.id);
  });

  // Focus on click
  win.addEventListener('mousedown', () => focusWindow(project.id));

  document.getElementById('windows-container').appendChild(win);

  openWindows[project.id] = { el: win, minimized: false, maximized: false, savedRect: null, project };
  addTaskbarBtn(project);
}

function openAboutWindow() {
  const id = 'about';
  if (openWindows[id]) {
    restoreWindow(id);
    return;
  }

  const win = document.createElement('div');
  win.className = 'win';
  win.dataset.id = id;

  const count = Object.keys(openWindows).length;
  win.style.left = (120 + count * 20) + 'px';
  win.style.top  = (60 + count * 20) + 'px';
  win.style.width  = '400px';
  win.style.height = '340px';
  win.style.zIndex = ++highestZ;

  const titleBar = document.createElement('div');
  titleBar.className = 'win-title-bar';

  const iconEl = document.createElement('span');
  iconEl.style.fontSize = '14px';
  iconEl.textContent = '👤';

  const titleText = document.createElement('span');
  titleText.className = 'win-title-text';
  titleText.textContent = 'About Me';

  const btns = document.createElement('div');
  btns.className = 'win-btns';
  btns.appendChild(makeWinBtn('win-btn-min', '—', () => minimizeWindow(id)));
  btns.appendChild(makeWinBtn('win-btn-max', '□', () => toggleMaximize(id)));
  btns.appendChild(makeWinBtn('win-btn-close', '✕', () => closeWindow(id)));

  titleBar.appendChild(iconEl);
  titleBar.appendChild(titleText);
  titleBar.appendChild(btns);

  const toolbar = document.createElement('div');
  toolbar.className = 'win-toolbar';

  const body = document.createElement('div');
  body.className = 'win-body';

  const content = document.createElement('div');
  content.className = 'about-content';

  const header = document.createElement('div');
  header.className = 'about-header';
  header.innerHTML = `
    <span class="about-avatar">👤</span>
    <div>
      <div class="about-name">Jackson Bond</div>
      <div class="about-subtitle">Computer Science Student &amp; Developer</div>
    </div>
  `;

  const section1 = document.createElement('div');
  section1.innerHTML = `<div class="about-section-title">About</div>
    <p class="about-text">Computer Science student at UT Arlington with a passion for systems programming, game development, and creative software solutions. I enjoy building things that are both technically challenging and meaningful to users.</p>`;

  const links = document.createElement('div');
  links.className = 'about-links';

  const ghBtn = document.createElement('button');
  ghBtn.className = 'win-action-btn';
  ghBtn.textContent = '🔗 GitHub';
  ghBtn.addEventListener('click', () => window.open('https://github.com/Jackson-Bond', '_blank', 'noopener,noreferrer'));

  links.appendChild(ghBtn);

  content.appendChild(header);
  content.appendChild(section1);
  content.appendChild(links);
  body.appendChild(content);

  const resize = document.createElement('div');
  resize.className = 'win-resize';
  resize.addEventListener('mousedown', (e) => startResize(e, id));

  titleBar.addEventListener('mousedown', (e) => {
    if (e.target.closest('.win-btn')) return;
    startDrag(e, id);
  });

  win.addEventListener('mousedown', () => focusWindow(id));

  win.appendChild(titleBar);
  win.appendChild(toolbar);
  win.appendChild(body);
  win.appendChild(resize);

  document.getElementById('windows-container').appendChild(win);
  openWindows[id] = { el: win, minimized: false, maximized: false, savedRect: null, project: { id, title: 'About Me' } };
  addTaskbarBtn({ id, title: 'About Me' });
}

function makeWinBtn(cls, label, fn) {
  const btn = document.createElement('button');
  btn.className = 'win-btn ' + cls;
  btn.addEventListener('click', (e) => { e.stopPropagation(); fn(); });
  return btn;
}

// ============================================================
//  WINDOW MANAGEMENT
// ============================================================
function focusWindow(id) {
  const state = openWindows[id];
  if (!state) return;
  state.el.style.zIndex = ++highestZ;
  updateTaskbarBtns();
}

function closeWindow(id) {
  const state = openWindows[id];
  if (!state) return;
  state.el.remove();
  delete openWindows[id];
  removeTaskbarBtn(id);
}

function minimizeWindow(id) {
  const state = openWindows[id];
  if (!state) return;
  state.el.style.display = 'none';
  state.minimized = true;
  updateTaskbarBtns();
}

function restoreWindow(id) {
  const state = openWindows[id];
  if (!state) return;
  state.el.style.display = 'flex';
  state.minimized = false;
  focusWindow(id);
}

function toggleMaximize(id) {
  const state = openWindows[id];
  if (!state) return;
  const el = state.el;

  if (!state.maximized) {
    state.savedRect = {
      left: el.style.left,
      top: el.style.top,
      width: el.style.width,
      height: el.style.height,
    };
    el.style.left   = '0px';
    el.style.top    = '0px';
    el.style.width  = '100%';
    el.style.height = '100%';
    state.maximized = true;
  } else {
    const r = state.savedRect;
    el.style.left   = r.left;
    el.style.top    = r.top;
    el.style.width  = r.width;
    el.style.height = r.height;
    state.maximized = false;
  }
}

// ============================================================
//  TASKBAR BUTTONS
// ============================================================
function addTaskbarBtn(project) {
  const container = document.getElementById('taskbar-buttons');

  const btn = document.createElement('button');
  btn.className = 'taskbar-btn';
  btn.dataset.winId = project.id;

  if (project.image) {
    const img = document.createElement('img');
    img.className = 'taskbar-btn-icon';
    img.src = project.image;
    img.alt = '';
    btn.appendChild(img);
  } else {
    const span = document.createElement('span');
    span.style.fontSize = '12px';
    span.textContent = '👤';
    btn.appendChild(span);
  }

  const label = document.createElement('span');
  label.className = 'taskbar-btn-label';
  label.textContent = project.title;
  btn.appendChild(label);

  btn.addEventListener('click', () => {
    const state = openWindows[project.id];
    if (!state) return;
    if (state.minimized) {
      restoreWindow(project.id);
    } else {
      minimizeWindow(project.id);
    }
  });

  container.appendChild(btn);
}

function removeTaskbarBtn(id) {
  const btn = document.querySelector(`.taskbar-btn[data-win-id="${id}"]`);
  if (btn) btn.remove();
}

function updateTaskbarBtns() {
  document.querySelectorAll('.taskbar-btn').forEach(btn => {
    const id = btn.dataset.winId;
    const state = openWindows[id];
    if (!state) return;
    btn.classList.toggle('active', !state.minimized && parseInt(state.el.style.zIndex) === highestZ);
  });
}

// ============================================================
//  DRAG
// ============================================================
function startDrag(e, id) {
  const state = openWindows[id];
  if (!state || state.maximized) return;
  e.preventDefault();
  focusWindow(id);
  dragging = id;
  const rect = state.el.getBoundingClientRect();
  dragOffX = e.clientX - rect.left;
  dragOffY = e.clientY - rect.top;
  document.body.classList.add('is-dragging');
}

function startResize(e, id) {
  e.preventDefault();
  e.stopPropagation();
  focusWindow(id);
  resizing = id;
  rsStartX = e.clientX;
  rsStartY = e.clientY;
  const state = openWindows[id];
  rsStartW = state.el.offsetWidth;
  rsStartH = state.el.offsetHeight;
  document.body.classList.add('is-resizing');
}

function onMouseMove(e) {
  if (dragging) {
    const state = openWindows[dragging];
    if (!state) return;
    let nx = e.clientX - dragOffX;
    let ny = e.clientY - dragOffY;
    ny = Math.max(-28, ny);
    const taskbarH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--taskbar-h'));
    ny = Math.min(window.innerHeight - taskbarH - 28, ny);
    state.el.style.left = nx + 'px';
    state.el.style.top  = ny + 'px';
  }
  if (resizing) {
    const state = openWindows[resizing];
    if (!state) return;
    const dx = e.clientX - rsStartX;
    const dy = e.clientY - rsStartY;
    state.el.style.width  = Math.max(320, rsStartW + dx) + 'px';
    state.el.style.height = Math.max(420, rsStartH + dy) + 'px';
  }
}

function onMouseUp() {
  dragging = null;
  resizing = null;
  document.body.classList.remove('is-dragging');
  document.body.classList.remove('is-resizing');
}

// ============================================================
//  START MENU
// ============================================================
function toggleStartMenu() {
  startMenuOpen = !startMenuOpen;
  const menu = document.getElementById('start-menu');
  const btn  = document.getElementById('start-btn');
  menu.classList.toggle('open', startMenuOpen);
  btn.classList.toggle('active', startMenuOpen);
}

function closeStartMenu() {
  startMenuOpen = false;
  document.getElementById('start-menu').classList.remove('open');
  document.getElementById('start-btn').classList.remove('active');
}

// ============================================================
//  CLOCK
// ============================================================
function startClock() {
  const el = document.getElementById('clock');
  function tick() {
    const now = new Date();
    const h = now.getHours() % 12 || 12;
    const m = String(now.getMinutes()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    el.textContent = `${h}:${m} ${ampm}`;
  }
  tick();
  setInterval(tick, 1000);
}
