const PROJECTS = [
  {
    id: "product-path",
    title: "Product Path Game",
    shortLabel: "10-Stage PM Simulation",
    shortDesc:
      "Interactive workflow aligning product teams on RACI ownership and stage deliverables.",
    pillarClass: "pillar-all",
    pillars: [
      { label: "Customer", tone: "oat" },
      { label: "Business", tone: "baltic" },
      { label: "Technology", tone: "lichen" },
    ],
    summary:
      "A browser-based simulation navigating Digital Product Managers and cross-functional teams through the 10-stage product lifecycle path, complete with RACI role checks and exportable working templates.",
    liveUrl: "https://digital-projects-lb.github.io/product-game/",
    liveLabel: "Launch Live Build ↗",
    repoUrl: "https://github.com/digital-projects-lb/product-game",
    headerVisual: "venn",
    okr: {
      objective: "Accelerate cross-functional RACI & stage-gate alignment",
      kpi: "10-stage completion rate & PDF template exports",
      status: "Live v1.1 • Zero-Backend Static App",
    },
    problem:
      "Product management sits at the intersection of Business viability, Technology feasibility, and Customer desirability. Without clear alignment on who owns decisions at each milestone, delivery stalls.",
    solution:
      "Product Path turns the 10-stage product lifecycle into a guided, hands-on workflow where players unlock each stage by assigning team RACI roles and matching required deliverables to unlock working PDF templates.",
    docs: {
      businessCaseSummary:
        "Aligns Digital Product Managers, Business Analysts, and delivery squads on decision ownership and stage deliverables across BABOK, PMBOK, RACI, and Agile Scrum workflows—emulating the core PM role of creating team cohesion for profitable outcomes.",
      businessCasePoints: [
        {
          title: "Clear Decision Ownership",
          detail:
            "Validates Responsible (R), Accountable (A), Consulted (C), and Informed (I) roles across 10 delivery stages.",
        },
        {
          title: "Zero-Cost Delivery",
          detail:
            "Built as a lightweight static React + Vite web app requiring no backend servers, databases, or user logins.",
        },
        {
          title: "Practical Working Templates",
          detail:
            "Provides ready-to-use stage templates and one-click PDF exports teams can reference day-to-day.",
        },
      ],
      brdPoints: [
        {
          title: "Sequential Stage Progression",
          detail:
            "Users progress through stages 1 to 10 in order, with clear prompts if they select a locked stage early.",
        },
        {
          title: "RACI Role Check",
          detail:
            "Each stage validates 7 stakeholder roles (Product, SLT, Sponsor, Customer/CX, Dev, Legal, Risk) against expected ownership.",
        },
        {
          title: "Deliverable Matching",
          detail:
            "Drag-and-drop deliverable pills unlock the active stage's working document template.",
        },
        {
          title: "Guided Onboarding Tour",
          detail:
            "First-time visitors receive a 4-step walkthrough modal with an option to reopen anytime.",
        },
      ],
      businessAnalysis:
        "Breaks the SDLC into 10 focused stages with contextual sticky-note clues explaining why ownership shifts between Product, Engineering, Legal, and Sponsors—demonstrating a unified path from initial concept and profitability analysis through cross-functional delivery.",
      technicalBrief: [
        {
          title: "Frontend Stack",
          detail:
            "Built with React and Vite for fast local iteration and lightweight static bundle generation.",
        },
        {
          title: "Data-Driven Phase Engine",
          detail:
            "All 10 stages, RACI rules, hints, and artifact templates are decoupled into a single configuration file (Data.js).",
        },
        {
          title: "Client-Side State Persistence",
          detail:
            "Uses browser localStorage to save active stage, unlocked progress, and tour completion state.",
        },
      ],
    },
    inScope: [
      "10-stage interactive SVG progress map",
      "RACI validation across 7 stakeholders",
      "Drag-and-drop deliverable matching",
      "Unlockable templates with PDF export",
      "Guided 4-step onboarding tour",
    ],
    outOfScope: [
      "User accounts and cloud database sync",
      "Editable template fields prior to PDF print",
      "Vertical split-screen road view",
      "Multi-team leaderboards",
    ],
    gantt: [
      {
        task: "1. Concept & Business Case",
        start: 1,
        span: 2,
        color: "baltic",
      },
      { task: "2. BRD & 10-Stage RACI Mapping", start: 2, span: 2, color: "" },
      { task: "3. Wireframes & Road UI", start: 3, span: 2, color: "" },
      {
        task: "4. React Engine & Validation",
        start: 4,
        span: 3,
        color: "lichen",
      },
      { task: "5. Testing & Onboarding Tour", start: 6, span: 2, color: "" },
      { task: "6. GitHub Pages Launch", start: 7, span: 2, color: "baltic" },
    ],
  },
  {
    id: "smart-desk-fan",
    title: "Smart Desk Fan (Arduino + CLI)",
    shortLabel: "Embedded Hardware & CLI",
    shortDesc:
      "Automated desk cooling triggered only when warm (> 30°C) and occupied (< 20 cm).",
    pillarClass: "pillar-tech",
    pillars: [
      { label: "Technology", tone: "lichen" },
      { label: "Business", tone: "baltic" },
      { label: "Customer", tone: "oat" },
    ],
    summary:
      "An automated desktop cooling system built on Arduino Uno using DHT11 thermal sensing, ultrasonic desk proximity detection, RGB status feedback, and dual servo actuation—compiled and deployed via Arduino CLI.",
    liveUrl: "https://github.com/digital-projects-lb/smart-desk-fan-arduino",
    liveLabel: "View Repo & Demo Video ↗",
    repoUrl: "https://github.com/digital-projects-lb/smart-desk-fan-arduino",
    headerVisual: "svg-fan",
    okr: {
      objective:
        "Eliminate idle desk-fan power draw via occupancy + thermal gating",
      kpi: "0% runtime when unoccupied (> 20 cm) • < 2s thermal response",
      status: "Hardware Prototype & CLI Verified",
    },
    problem:
      "Standard desk fans rely on manual switches. Users either forget to turn them on until a workspace is uncomfortable, or leave them running in empty rooms—wasting electricity and creating unnecessary noise.",
    solution:
      "Built an autonomous closed-loop controller on Arduino Uno that pairs thermal sensing (DHT11) with sweeping ultrasonic occupancy detection (HC-SR04), providing instant RGB visual feedback and dual-servo actuation only when both conditions are met.",
    docs: {
      businessCaseSummary:
        "Demonstrates low-cost edge automation by combining commodity sensors (< $15 BOM) with deterministic dual-condition gating to cut unnecessary standby energy consumption in personal workspaces.",
      businessCasePoints: [
        {
          title: "Energy & Noise Reduction",
          detail:
            "Prevents continuous fan operation when a user steps away from their desk.",
        },
        {
          title: "Ambient Visual Feedback",
          detail:
            "RGB status LED communicates room thermal comfort without requiring a screen or app.",
        },
        {
          title: "Reproducible CLI Workflow",
          detail:
            "Replaces GUI IDE clicks with version-controlled arduino-cli build and flash commands.",
        },
      ],
      brdPoints: [
        {
          title: "3-State RGB Thermal Alert",
          detail:
            "Blue (< 10°C cold), Green (10°C–30°C comfort), and Red (> 30°C hot) signal live temperature zones.",
        },
        {
          title: "180° Desk Occupancy Scan",
          detail:
            "Servo-mounted HC-SR04 ultrasonic sensor sweeps across the workspace to detect presence within 20 cm.",
        },
        {
          title: "Dual-Condition Actuation",
          detail:
            "Fan servo engages strictly when Temperature > 30°C AND Proximity < 20 cm.",
        },
      ],
      businessAnalysis:
        "Evaluated simple single-sensor triggers (temperature-only or motion-only) and identified high false-positive rates. Combining thermal state with active ultrasonic range-finding ensures actuation occurs only when both comfort need and human presence align.",
      technicalBrief: [
        {
          title: "Microcontroller & C++ Firmware",
          detail:
            "Arduino Uno (ATmega328P) running deterministic C++ sensor polling and PWM servo control.",
        },
        {
          title: "Headless CLI Pipeline",
          detail:
            "Managed via arduino-cli core/lib commands and 9600-baud serial telemetry.",
        },
        {
          title: "Circuit Validation",
          detail:
            "Simulated in Tinkercad prior to physical breadboard wiring with 1kΩ current-limiting RGB resistors.",
        },
      ],
    },
    specsTable: [
      {
        part: "DHT11 Sensor",
        pin: "D4",
        role: "Room temperature & humidity input",
      },
      {
        part: "HC-SR04 Ultrasonic",
        pin: "D7 / D6",
        role: "Desk proximity measurement (cm)",
      },
      {
        part: "RGB LED (+ 1kΩ)",
        pin: "D10, D9, D8",
        role: "Blue / Green / Red thermal alert",
      },
      {
        part: "Fan & Scanner Servos",
        pin: "D2 / D3",
        role: "Cooling actuation & 180° sweep",
      },
    ],
    inScope: [
      "Tinkercad breadboard & schematic validation",
      "Physical Arduino Uno circuit build",
      "3-state RGB thermal LED alerts",
      "Dual-servo sweep & fan actuation logic",
      "Serial telemetry & CLI deployment",
    ],
    outOfScope: [
      "Non-blocking millis() concurrent timers",
      "Continuous motor with 3D-printed blades",
      "Bluetooth / Wi-Fi threshold controls",
      "SD card temperature logging",
    ],
    gantt: [
      {
        task: "1. Sensor & Threshold Spec",
        start: 1,
        span: 2,
        color: "baltic",
      },
      {
        task: "2. Tinkercad Breadboard & Wiring",
        start: 2,
        span: 2,
        color: "lichen",
      },
      {
        task: "3. C++ Control Loop & Dual Servos",
        start: 4,
        span: 2,
        color: "lichen",
      },
      { task: "4. Physical Build & Calibration", start: 6, span: 2, color: "" },
      {
        task: "5. CLI Automation & Video Demo",
        start: 7,
        span: 2,
        color: "lichen",
      },
    ],
  },
  {
    id: "railway-robotics",
    title: "Railway Robotics Academy",
    shortLabel: "Robotics & Learning Platform",
    shortDesc:
      "Modular web academy guiding builders from basic components to working robotics.",
    pillarClass: "pillar-biz",
    pillars: [
      { label: "Business", tone: "baltic" },
      { label: "Customer", tone: "oat" },
      { label: "Technology", tone: "lichen" },
    ],
    summary:
      "A structured interactive platform introducing robotics, automation, and hands-on hardware builds through guided modules and step-by-step practical exercises.",
    liveUrl: "https://digital-projects-lb.github.io/railway-robotics-academy/",
    liveLabel: "Launch Live Build ↗",
    repoUrl: "https://github.com/digital-projects-lb/railway-robotics-academy",
    headerVisual: "svg-railway",
    okr: {
      objective:
        "Reduce beginner hardware drop-off with structured build milestones",
      kpi: "Module completion rate & time-to-first-working-circuit",
      status: "Live on GitHub Pages",
    },
    problem:
      "Beginners learning robotics and embedded systems often hit a wall between abstract theory and wiring physical components—leading to high drop-off before completing their first working build.",
    solution:
      "Designed a modular, step-by-step web academy that breaks robotics concepts into digestible lessons, clear wiring checkpoints, and practical build milestones.",
    docs: {
      businessCaseSummary:
        "Addresses the steep initial learning curve in entry-level robotics education by structuring hardware concepts into self-paced, zero-install browser modules.",
      businessCasePoints: [
        {
          title: "Lower Time-to-First-Build",
          detail:
            "Replaces dense datasheets with visual step-by-step wiring checkpoints.",
        },
        {
          title: "Zero-Friction Access",
          detail:
            "Runs directly in any desktop or tablet browser with no account creation or software setup.",
        },
      ],
      brdPoints: [
        {
          title: "Progressive Learning Modules",
          detail:
            "Structured sequence moving from foundational sensors and actuators to integrated control logic.",
        },
        {
          title: "Workbench-Friendly Layout",
          detail:
            "High-contrast, scannable layout tailored for builders following along beside physical hardware.",
        },
      ],
      businessAnalysis:
        "Mapped common failure points for first-time hardware builders (pin miswiring, library confusion, and scope overload) and sequenced lessons into short, verifiable milestones.",
      technicalBrief: [
        {
          title: "Frontend Architecture",
          detail:
            "Lightweight responsive web application optimized for tablet and laptop workbench viewing.",
        },
        {
          title: "Static Deployment",
          detail:
            "Hosted on GitHub Pages with GA4 instrumentation planned for module engagement tracking.",
        },
      ],
    },
    inScope: [
      "Structured robotics learning curriculum",
      "Interactive module navigation",
      "Mobile and tablet-friendly workbench layout",
      "GitHub Pages static deployment",
    ],
    outOfScope: [
      "User login accounts and quiz grading backend",
      "Live hardware simulation sandbox",
      "Community forum threads",
    ],
    gantt: [
      { task: "1. Learner Journey & Curriculum", start: 1, span: 2, color: "" },
      {
        task: "2. Module Architecture & Wireframes",
        start: 3,
        span: 2,
        color: "baltic",
      },
      {
        task: "3. Interactive Lesson Build",
        start: 5,
        span: 2,
        color: "lichen",
      },
      { task: "4. Workbench Testing & Launch", start: 7, span: 2, color: "" },
    ],
  },
  {
    id: "ship-a-long",
    title: "Ship-A-Long",
    shortLabel: "Interactive Maritime Web Game",
    shortDesc:
      "Browser-based maritime adventure focused on intuitive onboarding and progressive discovery.",
    pillarClass: "pillar-customer",
    pillars: [
      { label: "Customer", tone: "oat" },
      { label: "Business", tone: "baltic" },
      { label: "Technology", tone: "lichen" },
    ],
    summary:
      "A browser-based maritime adventure and hidden-object web game designed around intuitive player onboarding, progressive discovery, and clean customer experience (CX).",
    liveUrl: "https://digital-projects-lb.github.io/ship-a-long/",
    liveLabel: "Launch Live Build ↗",
    repoUrl: "https://github.com/digital-projects-lb/ship-a-long",
    headerVisual: "svg-ship",
    okr: {
      objective:
        "Maximize first-session engagement via zero-tutorial visual onboarding",
      kpi: "First-interaction time (< 5s) & stage discovery completion",
      status: "Live on GitHub Pages",
    },
    problem:
      "Casual browser games often overwhelm players with cluttered menus or unclear objectives in the first 30 seconds, causing immediate abandonment.",
    solution:
      "Built a focused maritime discovery experience where visual cues, clear objectives, and immediate feedback guide players naturally from launch without lengthy tutorials.",
    docs: {
      businessCaseSummary:
        "Applies consumer funnel and onboarding principles—eliminating upfront friction so users experience core product value within seconds of landing.",
      businessCasePoints: [
        {
          title: "Zero-Friction Entry",
          detail:
            "Immediate browser play with no downloads, splash-screen walls, or sign-up gates.",
        },
        {
          title: "Guided Visual Discovery",
          detail:
            "Uses environmental cues and instant state feedback rather than text instructions.",
        },
      ],
      brdPoints: [
        {
          title: "Instant Launch State",
          detail:
            "Game canvas loads directly into active play with clear visual affordances.",
        },
        {
          title: "Progressive Discovery Loop",
          detail:
            "Staged object discovery and feedback loops sustain momentum across scenes.",
        },
      ],
      businessAnalysis:
        "Applied conversion-funnel thinking to game onboarding—removing early choice overload and replacing modal instructions with progressive visual prompts.",
      technicalBrief: [
        {
          title: "Interactive Web Stack",
          detail:
            "Client-side browser rendering with responsive layout scaling for desktop and tablet viewports.",
        },
        {
          title: "Static Hosting",
          detail: "Delivered via GitHub Pages for fast global asset loading.",
        },
      ],
    },
    inScope: [
      "Core maritime exploration & discovery mechanics",
      "Visual onboarding cues without text walls",
      "Interactive feedback states",
      "Static web deployment via GitHub Pages",
    ],
    outOfScope: [
      "Multiplayer matchmaking",
      "Cloud save profiles",
      "In-app audio synthesizer",
    ],
    gantt: [
      { task: "1. CX Onboarding & Game Loop", start: 1, span: 2, color: "" },
      {
        task: "2. Visual Scene & Clue Placement",
        start: 3,
        span: 2,
        color: "",
      },
      {
        task: "3. State Logic & Feedback Cues",
        start: 5,
        span: 2,
        color: "lichen",
      },
      {
        task: "4. Playtesting & GitHub Launch",
        start: 7,
        span: 2,
        color: "baltic",
      },
    ],
  },
];
let selectedId = PROJECTS.at(0).id;
let activeTab = "overview";

function renderSidebar() {
  const sidebar = document.getElementById("sidebar-list");
  sidebar.innerHTML = PROJECTS.map((project) => {
    const isSelected = project.id === selectedId;
    return `
      <button
        type="button"
        class="build-selector-card ${project.pillarClass} ${isSelected ? "active" : ""}"
        data-id="${project.id}"
      >
        <div class="card-top-meta">
          <span>${project.shortLabel}</span>
          <span>${isSelected ? "▶" : ""}</span>
        </div>
        <h2>${project.title}</h2>
        <p>${project.shortDesc}</p>
      </button>
    `;
  }).join("");

  sidebar.querySelectorAll(".build-selector-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedId = btn.dataset.id;
      activeTab = "overview";
      render();
    });
  });
}

function renderHeaderVisual(type) {
  if (type === "venn") {
    return `
      <div class="detail-header-visual">
        <div class="visual-caption">Product Value Intersection</div>
        <svg viewBox="0 0 220 155" style="width: 210px; height: auto;">
          <defs>
            <linearGradient id="ceramicVennSheen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.72" />
              <stop offset="48%" stop-color="#ffffff" stop-opacity="0.18" />
              <stop offset="52%" stop-color="#3e2f26" stop-opacity="0.04" />
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0.12" />
            </linearGradient>
          </defs>
          <g style="mix-blend-mode: multiply;">
            <circle cx="84" cy="60" r="42" fill="#ebe2ce" fill-opacity="0.82" stroke="rgba(62,47,38,0.28)" stroke-width="1" />
            <circle cx="136" cy="60" r="42" fill="#89a8ba" fill-opacity="0.65" stroke="rgba(62,47,38,0.28)" stroke-width="1" />
            <circle cx="110" cy="98" r="42" fill="#97b09f" fill-opacity="0.68" stroke="rgba(62,47,38,0.28)" stroke-width="1" />
          </g>
          <circle cx="84" cy="60" r="42" fill="url(#ceramicVennSheen)" />
          <circle cx="136" cy="60" r="42" fill="url(#ceramicVennSheen)" />
          <circle cx="110" cy="98" r="42" fill="url(#ceramicVennSheen)" />
          <text x="68" y="54" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">Customer</text>
          <text x="152" y="54" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">Business</text>
          <text x="110" y="118" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">Tech</text>
        </svg>
      </div>
    `;
  }
  if (type === "svg-fan") {
    return `
      <div class="detail-header-visual">
        <div class="visual-caption">Closed-Loop Control</div>
        <svg viewBox="0 0 230 155" style="width: 220px; height: auto;">
          <line x1="78" y1="44" x2="112" y2="76" stroke="#756558" stroke-width="1.5" stroke-dasharray="3 3" />
          <line x1="78" y1="112" x2="112" y2="80" stroke="#756558" stroke-width="1.5" stroke-dasharray="3 3" />
          <line x1="158" y1="78" x2="176" y2="78" stroke="#756558" stroke-width="1.5" />
          <rect x="8" y="26" width="70" height="34" rx="7" fill="#89a8ba" fill-opacity="0.32" stroke="#7191a3" stroke-width="1.2" />
          <text x="43" y="47" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">DHT11 &gt;30°</text>
          <rect x="8" y="96" width="70" height="34" rx="7" fill="#ebe2ce" stroke="#cbb994" stroke-width="1.2" />
          <text x="43" y="117" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">Sonar &lt;20cm</text>
          <rect x="108" y="58" width="52" height="40" rx="8" fill="#97b09f" fill-opacity="0.38" stroke="#7d9685" stroke-width="1.4" />
          <text x="134" y="81" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">Uno</text>
          <rect x="176" y="58" width="46" height="40" rx="8" fill="#ebe2ce" stroke="#cbb994" stroke-width="1.2" />
          <text x="199" y="81" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">Fan</text>
        </svg>
      </div>
    `;
  }
  if (type === "svg-railway") {
    return `
      <div class="detail-header-visual">
        <div class="visual-caption">3-Stage Learning Path</div>
        <svg viewBox="0 0 230 155" style="width: 220px; height: auto;">
          <line x1="72" y1="78" x2="84" y2="78" stroke="#756558" stroke-width="1.8" />
          <line x1="146" y1="78" x2="158" y2="78" stroke="#756558" stroke-width="1.8" />
          <rect x="10" y="52" width="62" height="52" rx="8" fill="#ebe2ce" stroke="#cbb994" stroke-width="1.2" />
          <text x="41" y="75" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">01. Parts</text>
          <text x="41" y="89" text-anchor="middle" font-size="8.5" fill="#756558">Sensors</text>
          <rect x="84" y="52" width="62" height="52" rx="8" fill="#89a8ba" fill-opacity="0.32" stroke="#7191a3" stroke-width="1.2" />
          <text x="115" y="75" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">02. Wire</text>
          <text x="115" y="89" text-anchor="middle" font-size="8.5" fill="#756558">Steps</text>
          <rect x="158" y="52" width="62" height="52" rx="8" fill="#97b09f" fill-opacity="0.35" stroke="#7d9685" stroke-width="1.2" />
          <text x="189" y="75" text-anchor="middle" font-size="9.5" font-weight="500" fill="#3e2f26">03. Build</text>
          <text x="189" y="89" text-anchor="middle" font-size="8.5" fill="#756558">Control</text>
        </svg>
      </div>
    `;
  }
  if (type === "svg-ship") {
    return `
      <div class="detail-header-visual">
        <div class="visual-caption">Player CX Loop</div>
        <svg viewBox="0 0 230 155" style="width: 220px; height: auto;">
          <line x1="70" y1="78" x2="86" y2="78" stroke="#756558" stroke-width="1.8" />
          <line x1="144" y1="78" x2="160" y2="78" stroke="#756558" stroke-width="1.8" />
          <circle cx="41" cy="78" r="29" fill="#ebe2ce" stroke="#cbb994" stroke-width="1.2" />
          <text x="41" y="76" text-anchor="middle" font-size="9" font-weight="500" fill="#3e2f26">Launch</text>
          <text x="41" y="87" text-anchor="middle" font-size="8" fill="#756558">0s Setup</text>
          <circle cx="115" cy="78" r="29" fill="#89a8ba" fill-opacity="0.32" stroke="#7191a3" stroke-width="1.2" />
          <text x="115" y="76" text-anchor="middle" font-size="9" font-weight="500" fill="#3e2f26">Clues</text>
          <text x="115" y="87" text-anchor="middle" font-size="8" fill="#756558">Visual</text>
          <circle cx="189" cy="78" r="29" fill="#97b09f" fill-opacity="0.35" stroke="#7d9685" stroke-width="1.2" />
          <text x="189" y="76" text-anchor="middle" font-size="9" font-weight="500" fill="#3e2f26">Unlock</text>
          <text x="189" y="87" text-anchor="middle" font-size="8" fill="#756558">Stage</text>
        </svg>
      </div>
    `;
  }
  return "";
}

function renderGantt(ganttRows) {
  const weeks = Array.from({ length: 8 }, (_, i) => i + 1);
  return `
    <div class="doc-section">
      <h3>8-Week Delivery Timeline</h3>
      <div class="gantt-wrap">
        <table class="gantt-table">
          <thead>
            <tr>
              <th>Workstream</th>
              ${weeks.map((w) => `<th>W${w}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${ganttRows
              .map((row) => {
                const cells = weeks
                  .map((week) => {
                    if (week === row.start) {
                      return `<td colspan="${row.span}"><div class="gantt-bar ${row.color}"></div></td>`;
                    }
                    if (week > row.start && week < row.start + row.span) {
                      return "";
                    }
                    return "<td></td>";
                  })
                  .join("");
                return `<tr><td>${row.task}</td>${cells}</tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderDetail() {
  const project = PROJECTS.find((p) => p.id === selectedId) || PROJECTS.at(0);
  const panel = document.getElementById("detail-panel");

  let tabContent = "";
  if (activeTab === "overview") {
    tabContent = `
      <div class="split-2 doc-section">
        <div class="info-box">
          <h4>The Problem</h4>
          <p>${project.problem}</p>
        </div>
        <div class="info-box">
          <h4>The Solution</h4>
          <p>${project.solution}</p>
        </div>
      </div>
      <div class="doc-section">
        <h3>Key Outcomes & Product Decisions</h3>
        <ul>
          ${project.docs.businessCasePoints
            .map((pt) => `<li><strong>${pt.title}:</strong> ${pt.detail}</li>`)
            .join("")}
        </ul>
      </div>
    `;
  } else if (activeTab === "docs") {
    tabContent = `
      <div class="doc-section">
        <h3>1. Business Case</h3>
        <p>${project.docs.businessCaseSummary}</p>
        <ul>
          ${project.docs.businessCasePoints
            .map((pt) => `<li><strong>${pt.title}:</strong> ${pt.detail}</li>`)
            .join("")}
        </ul>
      </div>

      <div class="doc-section">
        <h3>2. Business Requirements Document (BRD)</h3>
        <ul>
          ${project.docs.brdPoints
            .map((pt) => `<li><strong>${pt.title}:</strong> ${pt.detail}</li>`)
            .join("")}
        </ul>
      </div>

      <div class="doc-section">
        <h3>3. Business Analysis Summary</h3>
        <p>${project.docs.businessAnalysis}</p>
      </div>

      <div class="doc-section">
        <h3>4. Technical Brief</h3>
        <ul>
          ${project.docs.technicalBrief
            .map((pt) => `<li><strong>${pt.title}:</strong> ${pt.detail}</li>`)
            .join("")}
        </ul>
        ${
          project.specsTable
            ? `
          <h4>Hardware Pin Architecture</h4>
          <table class="data-table">
            <thead>
              <tr><th>Component</th><th>Pin</th><th>Role</th></tr>
            </thead>
            <tbody>
              ${project.specsTable
                .map(
                  (row) =>
                    `<tr><td>${row.part}</td><td><code>${row.pin}</code></td><td>${row.role}</td></tr>`,
                )
                .join("")}
            </tbody>
          </table>`
            : ""
        }
      </div>
    `;
  } else if (activeTab === "scope") {
    tabContent = `
      <div class="split-2 doc-section">
        <div class="info-box">
          <h4>In Scope (Current Release)</h4>
          <ul>${project.inScope.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="info-box">
          <h4>Out of Scope (Future Roadmap)</h4>
          <ul>${project.outOfScope.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
      ${project.gantt ? renderGantt(project.gantt) : ""}
    `;
  }

  panel.innerHTML = `
    <div class="detail-header">
      <div class="detail-header-text">
        <div class="pillar-pills">
          ${project.pillars
            .map(
              (pill) =>
                `<span class="pillar-pill ${pill.tone}">${pill.label}</span>`,
            )
            .join("")}
        </div>
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
        <div class="detail-actions">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
            ${project.liveLabel}
          </a>
          ${
            project.repoUrl !== project.liveUrl
              ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline">GitHub Repo ↗</a>`
              : ""
          }
        </div>
      </div>
      ${renderHeaderVisual(project.headerVisual)}
    </div>

    <div class="okr-metrics-row">
      <div class="okr-cell">
        <span class="okr-label">Objective (OKR)</span>
        <span class="okr-value">${project.okr.objective}</span>
      </div>
      <div class="okr-cell">
        <span class="okr-label">Key Results (KPI)</span>
        <span class="okr-value">${project.okr.kpi}</span>
      </div>
      <div class="okr-cell">
        <span class="okr-label">Release Status</span>
        <span class="okr-value">${project.okr.status}</span>
      </div>
    </div>

    <div class="subtabs-bar">
      <div class="subtabs-group">
        <button type="button" class="subtab-btn ${activeTab === "overview" ? "active" : ""}" data-tab="overview">
          1. Overview
        </button>
        <button type="button" class="subtab-btn ${activeTab === "docs" ? "active" : ""}" data-tab="docs">
          2. Full Product Docs (4)
        </button>
        <button type="button" class="subtab-btn ${activeTab === "scope" ? "active" : ""}" data-tab="scope">
          3. Scope & Roadmap
        </button>
      </div>
      <span class="subtabs-hint">Select tab to inspect artifacts</span>
    </div>

    <div class="detail-body">${tabContent}</div>
  `;

  panel.querySelectorAll(".subtab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      renderDetail();
    });
  });
}

function render() {
  renderSidebar();
  renderDetail();
}

render();
