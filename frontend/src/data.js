export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: "01",
    title: "NeuroNotes",
    tag: "AI · Web App",
    desc: "An AI-powered study companion that converts lecture recordings into structured, searchable notes with flashcards.",
    img: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    stack: ["React", "FastAPI", "OpenAI"],
  },
  {
    id: "02",
    title: "CampusFlow",
    tag: "Full Stack",
    desc: "A campus event discovery platform with real-time RSVPs, used by 1,200+ students across 3 colleges.",
    img: "https://images.unsplash.com/photo-1617785899222-fe06b15b6dd5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    stack: ["Next.js", "MongoDB", "Socket.io"],
  },
  {
    id: "03",
    title: "Orbital UI",
    tag: "Open Source",
    desc: "A physics-based React component library with 40+ animated primitives. 800+ GitHub stars.",
    img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    stack: ["TypeScript", "Framer Motion"],
  },
];

export const SKILLS = [
  { name: "JavaScript", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "FastAPI", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Figma", level: "Intermediate" },
  { name: "C++", level: "Intermediate" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "TailwindCSS", level: "Advanced" },
  { name: "SQL", level: "Beginner" },
];

export const CERTIFICATES = [
  { year: "2026", title: "Meta Front-End Developer Professional Certificate", org: "Coursera · Meta" },
  { year: "2025", title: "Machine Learning Specialization", org: "Stanford Online · Andrew Ng" },
  { year: "2025", title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services" },
  { year: "2024", title: "Google UX Design Certificate", org: "Google Career Certificates" },
  { year: "2024", title: "Python for Everybody", org: "University of Michigan" },
];

export const ACHIEVEMENTS = [
  { num: "01", title: "Smart India Hackathon — Winner", detail: "Led a 6-member team to build an accessibility-first transit app, beating 40,000+ teams nationwide.", year: "2025" },
  { num: "02", title: "Google Solution Challenge — Top 100", detail: "Global recognition for CampusFlow among 5,000+ university submissions.", year: "2025" },
  { num: "03", title: "Dean's List — 4 Consecutive Semesters", detail: "Top 2% of the computer science cohort while shipping side projects.", year: "2024–26" },
  { num: "04", title: "800+ GitHub Stars on Orbital UI", detail: "Open-source component library adopted by developers in 30+ countries.", year: "2024" },
];

export const MARQUEE_ITEMS = [
  "Curious by default", "Build · Break · Learn", "Design meets code", "Student of the web",
  "Open source believer", "Ship early, ship often",
];
