/**
 * Central profile / identity data — the single source of truth.
 * Edit this file to change your name, bio, contact, and socials.
 */

export const profile = {
  name: "Krisna Santosa",
  firstName: "Krisna",
  lastName: "Santosa",
  // Public-facing role line shown in the hero & footer
  role: "Full-Stack Developer & Machine Learning Engineer",
  // Short hero tagline
  tagline: "Code that scales. Models that learn. Interfaces people actually want to use.",
  // One-line hero intro (kept slightly punchy)
  heroIntro:
    "Full-Stack Developer & ML Engineer building web apps users love and models that actually generalize — from sign-language AR to end-to-end MLOps.",
  // Bio paragraphs for the About section
  bio: [
    "I've been hooked on web development since my vocational high-school days, building up 5+ years of full-stack experience. Along the way I fell for Machine Learning in college and have spent the last 3+ years deep in it — currently focused on LLMs, computer vision, and getting models into production.",
    "My path runs through a Knowledge Management internship, a startup collaboration, and a Machine Learning Engineer internship at Braincore.id — plus a steady run of competitions I keep (somehow) winning. I'm a creative problem solver who's also a bit of a perfectionist... which is exactly what makes the work better.",
  ],
  location: "Garut, Indonesia",
  locationShort: "Garut, ID",
  timezone: "Asia/Jakarta",
  timezoneLabel: "WIB", // Western Indonesia Time
  // Availability / status pill
  availability: {
    label: "Open to work",
    detail: "Internships · Collaborations · ‘26",
  },
  // Highlight stats for the About grid
  stats: [
    { value: "5", suffix: "+", label: "Years in Full-Stack" },
    { value: "3", suffix: "+", label: "Years in ML" },
    { value: "26", suffix: "", label: "Projects shipped" },
    { value: "32", suffix: "", label: "Awards & certs" },
  ],
  // Featured highlight chips for the hero floating cards
  highlights: [
    { label: "Bangkit 2024", value: "Distinction Graduate (Top 10%)" },
    { label: "Machine Learning", value: "26 projects · CNN · NLP · MLOps" },
  ],
  currently:
    "CS undergrad at Indonesia University of Education, focused on Machine Learning & Data Science — researching Vision-Language Models for emotion recognition.",
  resumeUrl: "/resume.pdf",
  // Contact + social links
  socials: {
    email: "mamang.krisna15@gmail.com",
    phone: "+62 813-1801-2627",
    phoneRaw: "+6281318012627",
    whatsapp:
      "https://wa.me/6281318012627?text=Hello%2C%20Krisna%20Santosa.%20I%20am%20%5BYourName%5D%2C%20Nice%20to%20Meet%20You%21",
    maps: "https://maps.app.goo.gl/JKJMddtFGZkvHzCQ9",
    github: "https://github.com/KrisnaSantosa15",
    linkedin: "https://linkedin.com/in/krisna-santosa",
    instagram: "https://www.instagram.com/krisna.santosa_15",
  },
};

export default profile;
