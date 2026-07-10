export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    num: "01",
    role: "Campus Ambassador",
    org: "New Horizon College of Engineering",
    period: "2025 — Present",
    desc: "Representing the college, connecting students with opportunities, organizing events and fostering a vibrant campus community.",
    tags: ["Leadership", "Community", "Events"],
  },
  {
    num: "02",
    role: "Core Team Lead — Tech Fest",
    org: "College Tech Fest",
    period: "2025",
    desc: "Led the core team coordinating multiple technical events, managing logistics and driving engagement for hundreds of participants.",
    tags: ["Team Lead", "Event Ops"],
  },
  {
    num: "03",
    role: "Front End Developer",
    org: "AccescoLiving",
    period: "",
    desc: "Managed the front end development of Accesco Living's primary web portals, bringing mockups to life through efficient, accessible, and responsive web interfaces. Worked closely with backend developers to improve the efficiency of APIs used in my projects, leading to improved page loads and performance.",
    tags: ["Front End", "APIs", "Responsive UI"],
  },
];

export const PROJECTS = [
  {
    id: "01",
    title: "MindSync Aura — Digital Mental Health Journal",
    tag: "Web Development · Python",
    desc: "A mid-scale project in the web development domain using Python with SQL as the database. A desktop-based Digital Mental Health Journal that enables structured and continuous mental health tracking.",
    img: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    stack: ["Python", "SQL", "Web"],
  },
  {
    id: "02",
    title: "Subscription Manager",
    tag: "Web Dev · UI/UX",
    desc: "A small-scale project in web development and UI/UX design. Manages subscriptions and provides a direct platform to subscribe and renew subscriptions in one place.",
    img: "https://images.unsplash.com/photo-1617785899222-fe06b15b6dd5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    stack: ["UI/UX", "Web"],
  },
  {
    id: "03",
    title: "SmartNotes Pro — Dockerized Notes & Productivity System",
    tag: "Cloud Native · DevOps",
    desc: "A cloud-native productivity and notes management platform built with Docker and Kubernetes — demonstrating modern containerization and orchestration through a scalable, portable web app for notes, tasks, priorities and deadlines with a secure, responsive interface.",
    img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    stack: ["Docker", "Kubernetes", "Web"],
  },
];

export const SKILL_GROUPS = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "C++", level: 65 },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "React", level: 90 },
      { name: "FastAPI", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "TailwindCSS", level: 88 },
    ],
  },
  {
    label: "Tools & Data",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "MongoDB", level: 72 },
      { name: "Figma", level: 68 },
      { name: "SQL", level: 55 },
    ],
  },
];

export const CERTIFICATES = [
  { year: "2026", title: "Meta Front-End Developer Professional Certificate", org: "Coursera · Meta" },
  { year: "2025", title: "Machine Learning Specialization", org: "Stanford Online · Andrew Ng" },
  { year: "2025", title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services" },
  { year: "2024", title: "Google UX Design Certificate", org: "Google Career Certificates" },
  { year: "2024", title: "Python for Everybody", org: "University of Michigan" },
];

export const ACHIEVEMENTS = [
  { num: "01", title: "Campus Ambassador", detail: "Representing my college as a Campus Ambassador, connecting students with opportunities, organizing events, and fostering a vibrant community. Building bridges between students and organizations while promoting innovation and collaboration on campus.", year: "" },
  { num: "02", title: "Core Team Lead — Tech Fest", detail: "Leading the core team for our college Tech Fest, coordinating multiple technical events, managing logistics, and bringing together students to showcase innovation and creativity. Driving engagement and creating memorable experiences for participants.", year: "" },
  { num: "03", title: "MVP of Basketball Championship", detail: "Recognized as the Most Valuable Player in the college basketball championship for exceptional performance, leadership on court, and contributing to the team's victory.", year: "" },
  { num: "04", title: "Academic Excellence", detail: "Maintained a strong 9.19 CGPA in Computer Science and Engineering studies at New Horizon College of Engineering.", year: "" },
];

export const MARQUEE_ITEMS = [
  "Curious by default", "Build · Break · Learn", "Design meets code", "Student of the web",
  "Open source believer", "Ship early, ship often",
];
