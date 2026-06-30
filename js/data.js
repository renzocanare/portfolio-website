/**
 * ============================================================
 *  data.js  —  CONTENT
 *
 *  File for updates:
 *    • Personal info, links, bio
 *    • Skills
 *    • Work experience
 *    • Projects (including screenshots)
 *    • Certifications
 * ============================================================
 */

const SITE = {
  // ── Personal ───────────────────────────────────────────────
  name:       'Renzo Rivera Canare',
  title:      'Software Engineer',
  domain:     'renzocanare.com',
  email:      'reach out to me on the form',
  status:     'open to opportunities',   // shown in hero badge

  // Bio paragraph(s). Each string becomes its own <p>.
  // Wrap a word in **double stars** to highlight it in white.
  bio: [
    "I'm a software engineer with 2 years delivering enterprise and government applications. I work across the full stack and care about the details that make software reliable and feel good to use.",
    "I'm drawn to the intersection of engineering and product: understanding what to build, translating user needs into technical decisions, and owning delivery end-to-end. Currently based in Singapore, open to roles where engineering meets product thinking.",
  ],

  // ── Links ──────────────────────────────────────────────────
  github:   'https://github.com/renzocanare',
  linkedin: 'https://www.linkedin.com/in/renzo-canare/',
  resume:   '',

  // ── Hero photo ─────────────────────────────────────────────
  // Drop images into assets/photos/ and set the filenames.
  // Leave as '' to show the placeholder card.
  photoFormal: 'assets/photos/formal.jpeg',
  photoCasual: 'assets/photos/casual.jpg',

  // ── "At a glance" card in About ───────────────────────────
  glance: [
    { key: 'Based in',    val: 'Singapore' },
    { key: 'Focus',       val: 'Back-end & Product' },
    { key: 'Status',      val: 'Employed Full-time' },
    { key: 'Alma Mater',  val: 'National University of Singapore' },
    { key: 'Degree',      val: 'B.Eng. Computer Engineering (Hons)' },
  ],
};

// ── Skills ─────────────────────────────────────────────────────
const SKILLS = [
  { title: 'languages',         items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'C#', 'SQL'] },
  { title: 'frontend',          items: ['React', 'Next.js', 'Bootstrap', 'HTML / CSS'] },
  { title: 'backend & data',    items: ['Springboot', 'Node.js', 'PostgreSQL', 'Oracle Database', 'REST', 'Flask'] },
  { title: 'ml & data science', items: ['scikit-learn', 'spaCy', 'NLP', 'Selenium', 'JMeter'] },
  { title: 'product & process', items: ['Agile / Scrum', 'Jira', 'UAT', 'Dev lifecycle', 'Requirements gathering', 'Stakeholder comms'] },
  { title: 'tooling',           items: ['Git', 'Linux', 'Postman', 'IntelliJ IDEA', 'VS Code'] },
  { title: 'hardware design',   items: ['Verilog', 'ARM Assembly Language', 'Xilinx Vitis', 'FPGA Design'] }
];

// ── Work Experience ────────────────────────────────────────────
const EXPERIENCE = [
  {
    role:    'Software Engineer',
    company: 'NCS Group',
    period:  'Jul 2024 — Present',
    desc:    'Building, testing and shipping production systems for large-scale government and enterprise clients. Rated Exceeding Expectations in both review cycles, on track for promotion to SWE2. Led client-facing UAT sessions, shipped 4 modules serving ~300 users at a government agency, and acted as cross-team integrator across 3+ squads — aligning developers, testers, and leads on scope and timelines.',
  },
  {
    role:    'R&D Embedded Firmware Engineering Intern',
    company: 'HP Inc.',
    period:  'Jan 2023 — May 2023',
    desc:    'Led a 5-month project to build an automated firmware test suite in Python, improving UI firmware development efficiency by 20%. Designed a Flask / Bootstrap dashboard that surfaced test stability and trend data for engineering managers and Technical Program Managers.',
  },
  {
    role:    'Technical Sales Engineer / Project Manager',
    company: 'EVOne Charging',
    period:  'Summer 2023 — 2025',
    desc:    'Ran customer discovery and tailored product presentations for 100+ prospective clients, translating technical capabilities into clear business value. Managed requirements and on-site commissioning of 70+ custom EV-charger installations nationwide.',
  },
];

// ── Projects ───────────────────────────────────────────────────
// kind: 'personal' | 'school'  — used by the filter tabs
// shot: path to a screenshot image, e.g. 'assets/photos/project-one.png'
//       leave as '' to show the striped placeholder
// code / live: URLs; use '' to hide the link
const PROJECTS = [
  // ── Personal ──────────────────────────────────────────────────
  {
    name:    'Laundry Bot',
    kind:    'personal',
    shot:    'assets/projects/lbp-banner.png',
    desc:    'IoT system that notifies hall residents via Telegram when their laundry is done — no more guessing or wasted trips to the laundry room.',
    tags:    ['Python', 'Raspberry Pi', 'IoT', 'Telegram API'],
    code:    '',
    live:    '',
    problem: 'Eusoff Hall had 6 washing machines shared across ~80 residents per block with no visibility into machine availability, leading to wasted trips and scheduling frustration.',
    role:    'Built a 2-person prototype: wired vibration sensors to a Raspberry Pi Zero to detect machine state, synced status to Google Sheets, and connected it to a Telegram bot where residents could check availability or reserve a machine.',
    outcome: 'Working prototype that validated the full pipeline — sensor → Pi → Sheets → Telegram. Upgrading works to the laundry area prevented a full deployment before our last day at Hall.',
  },
  {
    name:    'GameBoy Advance Restoration',
    kind:    'personal',
    shot:    'assets/projects/gba-banner.gif',
    desc:    'Restored a childhood GameBoy Advance with a backlit IPS screen, USB-C charging, and a new case — breathing new life into 20-year-old hardware.',
    tags:    ['Hardware', 'Soldering', 'Retro Modding'],
    code:    '',
    live:    '',
    problem: 'My original GBA had a leaking LCD and a worn-out case. The original hardware shipped without a backlit screen or rechargeable battery — limitations that modern mods can finally fix.',
    role:    'Sourced compatible mod kits, performed the soldering work to install an IPS LCD and USB-C battery module, and swapped the shell and buttons for a black-and-orange combination. Also replaced save batteries in cartridges to restore in-game clocks.',
    outcome: 'Fully functional, modernised GBA that plays original cartridges with a crisp backlit display and charges over USB-C.',
  },
  // ── School ────────────────────────────────────────────────────
  {
    name:    'CG4002 — Laser Tag AR Visualizer',
    kind:    'school',
    shot:    'assets/projects/cg4002-banner.png',
    desc:    'Led the AR Visualizer component for a full-stack laser tag system — real-time animations triggered by live game events, rendered in Unity AR on mobile.',
    tags:    ['Unity AR', 'C#', 'MQTT', 'Python'],
    code:    'https://github.com/renzocanare/nus-renzocanare/tree/main/CG4002',
    live:    '',
    problem: 'Our capstone team needed an immersive visualizer that could reflect live game state — shots fired, grenades thrown, shields raised — in real time on a mobile device.',
    role:    'Visualizer Component Lead in a team of 5. Designed and built the Unity AR app for Android/iOS: mapped player actions to animations, surfaced HUD elements (ammo, grenades, shields), and wired MQTT messaging to sync with the game engine in real time.',
    outcome: 'Shipped a working AR overlay that responded to live game events with sub-second latency, completed within the semester as the capstone\'s highest-weighted deliverable.',
  },
  {
    name:    'EE4211 — Carpark Availability Prediction',
    kind:    'school',
    shot:    'assets/projects/ee4211-banner.gif',
    desc:    'Applied ML models to 5 months of real carpark data to predict availability near hawker centres — visualised as an interactive heatmap.',
    tags:    ['Python', 'scikit-learn', 'Pandas', 'Machine Learning', 'IoT'],
    code:    'https://github.com/renzocanare/nus-renzocanare/tree/main/EE4211',
    live:    '',
    problem: 'Drivers near busy hawker centres often circle for parking with no visibility into which nearby carparks are likely to be full at a given time of day.',
    role:    'Part of a 4-person team. Collected live carpark data via public APIs over 5 months, cleaned and structured it for model training, compared multiple ML approaches, and built a heatmap visualisation for carparks within 200m of hawker centres in Northern Singapore.',
    outcome: 'Demonstrated that historical occupancy patterns are strong predictors of future availability. The heatmap proof-of-concept made the results immediately interpretable.',
  },
  {
    name:    'CG3207 — Single-Cycle ARM Processor',
    kind:    'school',
    shot:    'assets/projects/cg3207-banner.png',
    desc:    'Designed and implemented a single-cycle processor in Verilog on an FPGA, supporting the full ARM DP/Mem/Branch instruction set.',
    tags:    ['Verilog', 'FPGA', 'ARM', 'Vivado', 'Hardware Design'],
    code:    '',
    live:    '',
    problem: 'Build a functioning processor from scratch — from datapath design to instruction decoding — that executes real ARM instructions on physical hardware.',
    role:    'Co-designed the full single-cycle datapath with a partner in Verilog, implemented all ARM DP/Mem/Branch instructions, and extended it with SMULL/UMULL via multi-cycle micro-operations. Synthesised and validated on an FPGA board.',
    outcome: 'Processor successfully executed the full required instruction set. Extending to SMULL/UMULL gave hands-on insight into how real CPUs handle operations that overflow a single cycle.',
  },
  {
    name:    'CS3243 — AI Search & Game Agents',
    kind:    'school',
    shot:    'assets/projects/cs3243-banner.png',
    desc:    'Implemented a suite of AI algorithms — from uninformed search to adversarial minimax — across a series of individual projects.',
    tags:    ['Python', 'Artificial Intelligence', 'Search Algorithms'],
    code:    'https://github.com/renzocanare/nus-renzocanare/tree/main/CS3243',
    live:    '',
    problem: 'Translate theoretical AI concepts — search, constraint satisfaction, game-playing — into working implementations that solve non-trivial problem instances.',
    role:    'Sole implementer across all projects. Built DFS/BFS/UCS, A* with admissible heuristics, hill-climbing variants, CSP solvers with forward checking and AC-3, and a Minimax agent with alpha-beta pruning and custom evaluation functions.',
    outcome: 'Each project met correctness and performance benchmarks. Tuning heuristics for the adversarial agent made the theory feel concrete in a way coursework alone cannot.',
  },
  {
    name:    'CS2102 — Relational Database Project',
    kind:    'school',
    shot:    'assets/projects/cs2102-banner.png',
    desc:    'Modelled, designed, and implemented a relational database from ER diagram to stored procedures and triggers in PostgreSQL.',
    tags:    ['PostgreSQL', 'SQL', 'Database Design'],
    code:    '',
    live:    '',
    problem: 'Given a contextual problem, produce a normalised schema with full relational integrity, then expose behaviour through SQL functions, procedures, and triggers.',
    role:    'Group project: produced the ER model, translated it to a normalised schema, and implemented stored functions, procedures, and triggers to enforce business rules. Functional dependencies and normalisation covered individually.',
    outcome: 'Delivered a working PostgreSQL implementation meeting all specified constraints — a foundation that has been directly useful in production database work.',
  },
  {
    name:    'CS3241 — Whitted Ray Tracer',
    kind:    'school',
    shot:    'assets/projects/cs3241-banner.png',
    desc:    'Built a Whitted Ray Tracing renderer in C++/OpenGL — tracing rays through a scene to produce reflections, refractions, and shadows.',
    tags:    ['C++', 'OpenGL', 'Computer Graphics'],
    code:    'https://github.com/renzocanare/nus-renzocanare/tree/main/CS3241',
    live:    '',
    problem: 'Implement a physically-based rendering algorithm from scratch, grounding the linear algebra and lighting models covered in the module in a working program.',
    role:    'Implemented the full Whitted ray tracing pipeline: ray-object intersection, recursive reflection and refraction, shadow rays, and Phong shading — built on an OpenGL/GLUT scaffolding.',
    outcome: 'Rendered scenes with correct reflections, refractions, and shadows. Made the maths behind modern real-time rendering feel tangible.',
  },
  {
    name:    'EE4204 — Socket Programming',
    kind:    'school',
    shot:    'assets/projects/ee4204-banner.png',
    desc:    'Implemented UDP and TCP client-server socket programs in C, exploring reliability, ordering, and flow control at the transport layer.',
    tags:    ['C', 'UDP/TCP', 'Computer Networking'],
    code:    'https://github.com/renzocanare/nus-renzocanare/tree/main/EE4204',
    live:    '',
    problem: 'Understand how transport protocols actually behave by building the communication stack from raw sockets up, handling the edge cases that textbooks gloss over.',
    role:    'Implemented multiple client-server programs in C — both UDP and TCP — for short and long message transfer, with variants exploring different reliability mechanisms.',
    outcome: 'Gained a concrete understanding of how the transport layer behaves under real conditions — packet loss, reordering, buffering — knowledge that directly informs how I reason about networked systems.',
  },
  {
    name:    'CG2271 — RTOS Robotic Car',
    kind:    'school',
    shot:    'assets/projects/cg2271-banner.gif',
    desc:    'Built a Bluetooth-controlled robotic car running a custom RTOS on an ARM microcontroller, driven by an Android app.',
    tags:    ['C', 'RTOS', 'Embedded Systems', 'Hardware'],
    code:    '',
    live:    '',
    problem: 'Design and implement a real-time operating system for a robotic car that must handle concurrent tasks — motor control, Bluetooth comms, and sensor reads — without missing deadlines.',
    role:    'Part of a 4-person team. Implemented RTOS tasks and a scheduling policy on the microcontroller, wired the motor driver and Bluetooth module, and integrated with the Android control app.',
    outcome: 'Delivered a fully functional car controllable in real time. The project made scheduling trade-offs and concurrency hazards concrete in a way pure theory cannot.',
  },
  {
    name:    'CS2113T — Food-O-Rama',
    kind:    'school',
    shot:    'assets/projects/cs2113t-banner.png',
    desc:    'A CLI app helping restaurant owners and hawkers track food inventory and waste — built with a 4-person team using Java and Agile practices.',
    tags:    ['Java', 'OOP', 'Software Engineering', 'Agile'],
    code:    'https://github.com/renzocanare/CS2113T-Team-Project',
    live:    '',
    problem: 'Restaurant owners and hawkers lacked simple tools to monitor ingredient stock and surface waste patterns before they became costly.',
    role:    'One of four developers working in an Agile workflow. Built core features, wrote unit tests, and co-authored the project documentation covering OOP design, command parsing, and data persistence.',
    outcome: 'Shipped a fully featured CLI application with documentation published as a GitHub Pages site — my first real experience of collaborative engineering with version control, code review, and iterative delivery.',
  },
];

// ── Certifications ─────────────────────────────────────────────
// file:     path to certificate — image (png/jpg) or PDF.
//           e.g. 'assets/certs/psd1.pdf' or 'assets/certs/aws.png'
//           Leave as '' to show a placeholder in the popup.
// link:     URL for external credential verification (e.g. the issuer's
//           credential page). Use '' to hide the button.
// category: short badge shown top-left of the card, e.g. 'Graduate Cert',
//           'Professional Cert'. Use '' to hide the badge.
// tags:     skill bubbles shown on the card and in the popup.
// blurb:    short writeup shown in the popup, above the file/link.
const CERTS = [
  {
    name:     'Graduate Certificate in Designing Modern Software Systems',
    issuer:   'NUS-ISS',
    year:     '2025',
    category: 'Graduate Cert',
    tags:     ['Agile Practices', 'Software Design Patterns', 'DevSecOps', 'CI/CD'],
    blurb:    'Covers how agile teams apply essential practices, software design principles, and DevSecOps techniques to analyse, design, and implement non-trivial software systems that are robust, reusable, maintainable, and extensible. Coursework spanned designing systems for target platforms, applying proven design patterns, and engineering automated DevSecOps pipelines for continuous delivery.',
    file:     'assets/certs/nus_gradcert_dmss.pdf',
    link:     'https://credentials.nus.edu.sg/6f000b55-848a-4118-a83e-61eaf631bc36',
  },
  {
    name:     'Architecting Software Solutions',
    issuer:   'NUS-ISS',
    year:     '2025',
    category: 'NUS-ISS Module',
    tags:     ['Solution Architecture', 'Security', 'Scalability', 'Maintainability'],
    blurb:    'Focuses on solution architecture for enterprise applications, covering software qualities like security, availability, performance, and maintainability. Combined lectures with scenario-based workshops across web, mobile, and cloud domains to design robust, secure, and maintainable architectures.',
    file:     'assets/certs/nus_ass_archss.pdf',
    link:     'https://credentials.nus.edu.sg/7f2f6b44-b8bd-4f6f-be7a-82d748ca3858',
  },
  {
    name:     'Cloud Native Solution Design',
    issuer:   'NUS-ISS',
    year:     '2025',
    category: 'NUS-ISS Module',
    tags:     ['Cloud Native', 'Microservices', 'Containers', 'NoSQL'],
    blurb:    'Covers designing and rapidly provisioning cloud-native solutions built from small, independent, loosely coupled services. Topics included scaling strategies, polyglot persistence and NoSQL, microservices suitability, container engineering, service cataloguing, security, and governance for cloud-native systems.',
    file:     'assets/certs/nus_ass_cnsd.pdf',
    link:     'https://credentials.nus.edu.sg/d3f7198c-a0b7-41bd-ac5d-ae277599ebda',
  },
  {
    name:     'Platform Engineering',
    issuer:   'NUS-ISS',
    year:     '2025',
    category: 'NUS-ISS Module',
    tags:     ['Platform Engineering', 'API Design', 'Reusable Architecture'],
    blurb:    'Covers architecting and engineering software platforms — designing reusable assets and common services, building frameworks, API design, and platform/data management — through hands-on workshops and case studies. Aimed at building scalable platforms that grow interconnected application ecosystems.',
    file:     'assets/certs/nus_ass_pe.pdf',
    link:     'https://credentials.nus.edu.sg/9207363b-d41f-480c-9a4a-4fd2be1fb2df',
  },
  {
    name:     'Professional Scrum Developer I (PSD1)',
    issuer:   'Scrum.org',
    year:     '2024',
    category: 'Professional Cert',
    tags:     ['Scrum', 'Software Craftsmanship', 'TDD', 'Continuous Integration'],
    blurb:    "Validates the ability to work as a developer on a Scrum team, applying core engineering practices — test-driven development, continuous integration, and emergent design — to build high-quality, working software within the Scrum framework.",
    file:     'assets/certs/psd-i.png',
    link:     'https://www.credly.com/badges/493214eb-defd-4582-8b42-0f82f5f20ef4',
  },
  {
    name:     'Professional Certificate in Introduction to Python Programming',
    issuer:   'edX',
    year:     '2023',
    category: 'Professional Cert',
    tags:     ['Python', 'Programming Fundamentals', 'Problem Solving'],
    blurb:    'Covers core Python programming fundamentals — syntax, data structures, control flow, and functions — through hands-on exercises, building a foundation for further work in data science and software development.',
    file:     'assets/certs/edx_python_programming.pdf',
    link:     'https://credentials.edx.org/credentials/732d7ffac8444902be0ee276aeb8a233/',
  },
];
