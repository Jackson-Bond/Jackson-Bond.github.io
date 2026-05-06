'use strict';

// ============================================================
//  PROJECT DATA
//  To add a new project, copy one object and append it to the array.
//  Fields:
//    id       – unique snake_case key (no spaces)
//    title    – display name
//    image    – path to the project image (used as icon AND window screenshot)
//    description – paragraph text
//    bullets  – array of bullet point strings
//    tools    – array of technology names
//    link     – (optional) URL for "View Project" button
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
      'Everything in the game is an object — everything is stealable',
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
];

// ============================================================
//  STATE
// ============================================================
let highestZ    = 100;
const openWindows = {};   // id -> { el, minimized, maximized, savedRect }
let selectedIcon  = null;
let startMenuOpen = false;

// Drag
let dragging  = null;
let dragOffX  = 0;
let dragOffY  = 0;

// Resize
let resizing     = null;
let rsStartX     = 0;
let rsStartY     = 0;
let rsStartW     = 0;
let rsStartH     = 0;

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
  document.addEventListener('mouseup',   onMouseUp);
});

// ============================================================
//  DESKTOP ICONS
// ============================================================
function buildDesktop() {
  const container = document.getElementById('desktop-icons');

  // "About Me" icon at the top
  container.appendChild(createIconEl({ id: 'about', title: 'About Me', isAbout: true }));

  // Project icons
  PROJECTS.forEach(p => container.appendChild(createIconEl(p)));
}

function createIconEl(project) {
  const icon = document.createElement('div');
  icon.className = 'desktop-icon';
  icon.dataset.projectId = project.id;

  // Image wrapper
  const wrap = document.createElement('div');
  wrap.className = 'icon-img-wrap';

  if (project.isAbout) {
    const span = document.createElement('span');
    span.className = 'about-icon';
    span.textContent = '\uD83D\uDC64';   // ??
    wrap.appendChild(span);
  } else {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;
    img.className = 'icon-img';
    img.draggable = false;
    wrap.appendChild(img);
  }

  // Label
  const label = document.createElement('span');
  label.className = 'icon-label';
  label.textContent = project.title;

  icon.appendChild(wrap);
  icon.appendChild(label);

  icon.addEventListener('click', (e) => {
    e.stopPropagation();
    selectIcon(icon);
    if (project.isAbout) {
      openAboutWindow();
    } else {
      openWindow(project);
    }
  });

  return icon;
}

function selectIcon(icon) {
  if (selectedIcon) selectedIcon.classList.remove('selected');
  selectedIcon = icon;
  icon.classList.add('selected');
}

function deselectAll() {
  if (selectedIcon) {
    selectedIcon.classList.remove('selected');
    selectedIcon = null;
  }
}

// ============================================================
//  WINDOW MANAGEMENT
// ============================================================
function openWindow(project) {
  const id = project.id;

  if (openWindows[id]) {
    if (openWindows[id].minimized) restoreWindow(id);
    bringToFront(id);
    return;
  }

  const winEl = document.createElement('div');
  winEl.className = 'win2k-window';
  winEl.id = 'win-' + id;
  winEl.style.zIndex = ++highestZ;

  // Cascade position
  const numOpen = Object.keys(openWindows).length;
  const off = (numOpen % 10) * 26;
  winEl.style.left = (70 + off) + 'px';
  winEl.style.top  = (40 + off) + 'px';

  const bulletsHTML = project.bullets
    .map(b => '<li>' + escHtml(b) + '</li>')
    .join('');
  const toolsHTML = project.tools
    .map(t => '<span class="tool-pill">' + escHtml(t) + '</span>')
    .join('');
  const linkHTML = project.link
    ? '<a href="' + escHtml(project.link) + '" target="_blank" rel="noopener noreferrer" class="win-link">View Project &#x2197;</a>'
    : '';

  winEl.innerHTML =
    '<div class="win-titlebar">' +
      '<div class="win-title">' +
        '<img src="' + escHtml(project.image) + '" class="win-title-icon" alt="" draggable="false">' +
        '<span>' + escHtml(project.title) + '</span>' +
      '</div>' +
      '<div class="win-controls">' +
        '<button class="win-btn js-min"  title="Minimize">&#8722;</button>' +
        '<button class="win-btn js-max"  title="Maximize">&#9633;</button>' +
        '<button class="win-btn win-close-btn js-close" title="Close">&#10005;</button>' +
      '</div>' +
    '</div>' +
    '<div class="win-menubar">' +
      '<span>File</span><span>Edit</span><span>View</span><span>Help</span>' +
    '</div>' +
    '<div class="win-content">' +
      '<img src="' + escHtml(project.image) + '" class="win-screenshot" alt="' + escHtml(project.title) + '" draggable="false">' +
      '<div class="win-details">' +
        '<h2>' + escHtml(project.title) + '</h2>' +
        '<p>'  + escHtml(project.description) + '</p>' +
        '<ul class="win-bullets">' + bulletsHTML + '</ul>' +
        '<div class="win-tools"><strong>Tools Used:</strong>' +
          '<div class="tools-pills">' + toolsHTML + '</div>' +
        '</div>' +
        linkHTML +
      '</div>' +
    '</div>' +
    '<div class="win-statusbar">' + escHtml(project.title) + '</div>' +
    '<div class="win-resize-handle js-resize"></div>';

  wireWindowEvents(winEl, id);
  document.getElementById('windows-container').appendChild(winEl);

  openWindows[id] = { el: winEl, minimized: false, maximized: false, savedRect: null };
  addTaskbarBtn(id, project.title, project.image);
  bringToFront(id);
}

function openAboutWindow() {
  const id = 'about';

  if (openWindows[id]) {
    if (openWindows[id].minimized) restoreWindow(id);
    bringToFront(id);
    return;
  }

  const winEl = document.createElement('div');
  winEl.className = 'win2k-window';
  winEl.id = 'win-about';
  winEl.style.zIndex = ++highestZ;
  winEl.style.left = '90px';
  winEl.style.top  = '60px';

  winEl.innerHTML =
    '<div class="win-titlebar">' +
      '<div class="win-title">' +
        '<span class="win-title-text-icon">&#128100;</span>' +
        '<span>About Me &#8211; Jackson Bond</span>' +
      '</div>' +
      '<div class="win-controls">' +
        '<button class="win-btn js-min"  title="Minimize">&#8722;</button>' +
        '<button class="win-btn js-max"  title="Maximize">&#9633;</button>' +
        '<button class="win-btn win-close-btn js-close" title="Close">&#10005;</button>' +
      '</div>' +
    '</div>' +
    '<div class="win-menubar">' +
      '<span>File</span><span>Edit</span><span>View</span><span>Help</span>' +
    '</div>' +
    '<div class="win-content about-content">' +
      '<div class="about-body">' +
        '<h2>Jackson Bond</h2>' +
        '<p>Computer Science student focused on systems programming, backend development, and low-level problem solving.</p>' +
        '<p>I enjoy building things from scratch &mdash; whether it\'s a custom memory allocator, a VR simulator, or a game with hand-drawn art.</p>' +
        '<p>Click any icon on the desktop to open a project!</p>' +
      '</div>' +
    '</div>' +
    '<div class="win-statusbar">Ready</div>';

  wireWindowEvents(winEl, id);
  document.getElementById('windows-container').appendChild(winEl);

  openWindows[id] = { el: winEl, minimized: false, maximized: false, savedRect: null };
  addTaskbarBtn(id, 'About Me', null);
  bringToFront(id);
}

// Attach all event listeners to a freshly created window element
function wireWindowEvents(winEl, id) {
  winEl.querySelector('.win-titlebar').addEventListener('mousedown', (e) => {
    if (e.button !== 0 || e.target.closest('.win-controls')) return;
    startDrag(e, winEl);
  });

  winEl.querySelector('.js-min').addEventListener('click', ()  => minimizeWindow(id));
  winEl.querySelector('.js-max').addEventListener('click', ()  => toggleMaximize(id));
  winEl.querySelector('.js-close').addEventListener('click', () => closeWindow(id));

  const resizeHandle = winEl.querySelector('.js-resize');
  if (resizeHandle) {
    resizeHandle.addEventListener('mousedown', (e) => startResize(e, winEl));
  }

  winEl.addEventListener('mousedown', () => bringToFront(id));
}

function closeWindow(id) {
  const s = openWindows[id];
  if (!s) return;
  s.el.remove();
  delete openWindows[id];
  removeTaskbarBtn(id);
}

function minimizeWindow(id) {
  const s = openWindows[id];
  if (!s || s.minimized) return;
  s.el.classList.add('minimized');
  s.minimized = true;
  syncTaskbarBtn(id);
}

function restoreWindow(id) {
  const s = openWindows[id];
  if (!s) return;
  s.el.classList.remove('minimized');
  s.minimized = false;
  syncTaskbarBtn(id);
}

function toggleMaximize(id) {
  const s = openWindows[id];
  if (!s) return;

  if (s.maximized) {
    s.el.classList.remove('maximized');
    const r = s.savedRect;
    s.el.style.left   = r.left;
    s.el.style.top    = r.top;
    s.el.style.width  = r.width;
    s.maximized = false;
    s.savedRect = null;
    s.el.querySelector('.js-max').innerHTML = '&#9633;';
  } else {
    s.savedRect = { left: s.el.style.left, top: s.el.style.top, width: s.el.style.width };
    s.el.classList.add('maximized');
    s.maximized = true;
    s.el.querySelector('.js-max').innerHTML = '&#9723;';
  }
}

function bringToFront(id) {
  const s = openWindows[id];
  if (!s) return;
  s.el.style.zIndex = ++highestZ;

  // Active/inactive title bars
  Object.keys(openWindows).forEach(wid => {
    openWindows[wid].el.querySelector('.win-titlebar')
      .classList.toggle('inactive', wid !== id);
  });

  // Taskbar button active state
  document.querySelectorAll('.taskbar-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.wid === id);
  });
}

// ============================================================
//  DRAG
// ============================================================
function startDrag(e, winEl) {
  e.preventDefault();
  dragging = winEl;
  dragOffX = e.clientX - winEl.offsetLeft;
  dragOffY = e.clientY - winEl.offsetTop;
  document.body.classList.add('is-dragging');
}

function onMouseMove(e) {
  if (dragging) {
    const maxX = window.innerWidth  - dragging.offsetWidth;
    const maxY = window.innerHeight - 28 - 10;
    dragging.style.left = Math.max(0, Math.min(e.clientX - dragOffX, maxX)) + 'px';
    dragging.style.top  = Math.max(0, Math.min(e.clientY - dragOffY, maxY)) + 'px';
  }

  if (resizing) {
    const newW = Math.max(320, rsStartW + (e.clientX - rsStartX));
    const newH = Math.max(220, rsStartH + (e.clientY - rsStartY));
    resizing.style.width = newW + 'px';
    const content = resizing.querySelector('.win-content');
    if (content) content.style.maxHeight = Math.max(120, newH - 90) + 'px';
  }
}

function onMouseUp() {
  dragging = null;
  resizing = null;
  document.body.classList.remove('is-dragging', 'is-resizing');
}

// ============================================================
//  RESIZE
// ============================================================
function startResize(e, winEl) {
  e.preventDefault();
  e.stopPropagation();
  resizing  = winEl;
  rsStartX  = e.clientX;
  rsStartY  = e.clientY;
  rsStartW  = winEl.offsetWidth;
  rsStartH  = winEl.offsetHeight;
  document.body.classList.add('is-resizing');
}

// ============================================================
//  TASKBAR BUTTONS
// ============================================================
function addTaskbarBtn(id, title, imgSrc) {
  const container = document.getElementById('taskbar-buttons');
  const btn = document.createElement('button');
  btn.className = 'taskbar-btn active';
  btn.dataset.wid = id;

  const iconHTML = imgSrc
    ? '<img src="' + escHtml(imgSrc) + '" class="taskbar-btn-icon" alt="" draggable="false">'
    : '<span style="font-size:12px;flex-shrink:0">&#128100;</span>';

  btn.innerHTML = iconHTML + '<span class="taskbar-btn-label">' + escHtml(title) + '</span>';

  btn.addEventListener('click', () => {
    const s = openWindows[id];
    if (!s) return;
    if (s.minimized) {
      restoreWindow(id);
      bringToFront(id);
    } else if (+s.el.style.zIndex === highestZ) {
      minimizeWindow(id);
    } else {
      bringToFront(id);
    }
  });

  container.appendChild(btn);
}

function removeTaskbarBtn(id) {
  const btn = document.querySelector('.taskbar-btn[data-wid="' + id + '"]');
  if (btn) btn.remove();
}

function syncTaskbarBtn(id) {
  const btn = document.querySelector('.taskbar-btn[data-wid="' + id + '"]');
  if (!btn) return;
  const s = openWindows[id];
  btn.classList.toggle('active', !s.minimized);
}

// ============================================================
//  START MENU
// ============================================================
function toggleStartMenu() {
  startMenuOpen = !startMenuOpen;
  document.getElementById('start-menu').classList.toggle('open', startMenuOpen);
  document.getElementById('start-btn').classList.toggle('active', startMenuOpen);
}

function closeStartMenu() {
  if (!startMenuOpen) return;
  startMenuOpen = false;
  document.getElementById('start-menu').classList.remove('open');
  document.getElementById('start-btn').classList.remove('active');
}

// ============================================================
//  CLOCK
// ============================================================
function startClock() {
  function tick() {
    const now  = new Date();
    let   h    = now.getHours();
    const m    = now.getMinutes().toString().padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    document.getElementById('clock').textContent = h + ':' + m + ' ' + ampm;
  }
  tick();
  // Sync to minute boundary
  const now = new Date();
  setTimeout(() => { tick(); setInterval(tick, 60000); }, (60 - now.getSeconds()) * 1000);
}

// ============================================================
//  UTILS
// ============================================================
function escHtml(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(str));
  return d.innerHTML;
}
