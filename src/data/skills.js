/**
 * Skills data — all ~52 skills migrated from the original portfolio.
 *
 * Schema per skill:
 *   { name, category, proficiency, years }
 *
 * `category` is one of: "frontend" | "backend" | "machine-learning" |
 *                        "soft-skills" | "tools"
 * `proficiency` is one of: "Beginner" | "Intermediate" | "Advanced" | "Expert"
 *
 * Icon string-paths were dropped — this portfolio renders proficiency pills
 * and years instead of logos, which fits the editorial aesthetic.
 */

export const skills = [
  // Frontend
  { name: "JavaScript", category: "frontend", proficiency: "Expert", years: 5 },
  { name: "React.js", category: "frontend", proficiency: "Intermediate", years: 3 },
  { name: "Next.js", category: "frontend", proficiency: "Beginner", years: 2 },
  { name: "HTML5", category: "frontend", proficiency: "Expert", years: 5 },
  { name: "CSS3", category: "frontend", proficiency: "Expert", years: 5 },
  { name: "TypeScript", category: "frontend", proficiency: "Intermediate", years: 3 },
  { name: "Vue.js", category: "frontend", proficiency: "Beginner", years: 2 },
  { name: "Tailwind CSS", category: "frontend", proficiency: "Advanced", years: 4 },
  { name: "SASS/SCSS", category: "frontend", proficiency: "Advanced", years: 4 },
  { name: "Bootstrap", category: "frontend", proficiency: "Advanced", years: 4 },
  { name: "Framer Motion", category: "frontend", proficiency: "Intermediate", years: 3 },
  { name: "Responsive Design", category: "frontend", proficiency: "Expert", years: 5 },

  // Backend
  { name: "Node.js", category: "backend", proficiency: "Advanced", years: 4 },
  { name: "Python", category: "backend", proficiency: "Advanced", years: 4 },
  { name: "PHP", category: "backend", proficiency: "Advanced", years: 4 },
  { name: "Laravel", category: "backend", proficiency: "Advanced", years: 4 },
  { name: "Flask", category: "backend", proficiency: "Intermediate", years: 3 },
  { name: "FastAPI", category: "backend", proficiency: "Advanced", years: 4 },
  { name: "Express.js", category: "backend", proficiency: "Advanced", years: 4 },
  { name: "MongoDB", category: "backend", proficiency: "Intermediate", years: 3 },
  { name: "PostgreSQL", category: "backend", proficiency: "Intermediate", years: 2 },
  { name: "MySQL", category: "backend", proficiency: "Intermediate", years: 2 },
  { name: "RESTful APIs", category: "backend", proficiency: "Expert", years: 4 },
  { name: "AWS", category: "backend", proficiency: "Intermediate", years: 2 },

  // Machine Learning
  { name: "TensorFlow", category: "machine-learning", proficiency: "Expert", years: 3 },
  { name: "Scikit-learn", category: "machine-learning", proficiency: "Expert", years: 3 },
  { name: "PyTorch", category: "machine-learning", proficiency: "Beginner", years: 1 },
  { name: "Keras", category: "machine-learning", proficiency: "Expert", years: 3 },
  { name: "Hugging Face", category: "machine-learning", proficiency: "Intermediate", years: 2 },
  { name: "Data Analysis & Visualization", category: "machine-learning", proficiency: "Advanced", years: 3 },
  { name: "Data Engineering", category: "machine-learning", proficiency: "Advanced", years: 2 },
  { name: "Computer Vision", category: "machine-learning", proficiency: "Advanced", years: 3 },
  { name: "Natural Language Processing", category: "machine-learning", proficiency: "Advanced", years: 3 },
  { name: "Generative AI", category: "machine-learning", proficiency: "Beginner", years: 1 },

  // Soft Skills
  { name: "Leadership", category: "soft-skills", proficiency: "Advanced", years: 6 },
  { name: "Public Speaking", category: "soft-skills", proficiency: "Advanced", years: 6 },
  { name: "Project Management", category: "soft-skills", proficiency: "Intermediate", years: 3 },
  { name: "Teamwork", category: "soft-skills", proficiency: "Advanced", years: 6 },
  { name: "Problem Solving", category: "soft-skills", proficiency: "Advanced", years: 6 },
  { name: "Time Management", category: "soft-skills", proficiency: "Advanced", years: 5 },
  { name: "Adaptability", category: "soft-skills", proficiency: "Advanced", years: 4 },
  { name: "Creativity", category: "soft-skills", proficiency: "Advanced", years: 6 },

  // Tools & Others
  { name: "Git", category: "tools", proficiency: "Advanced", years: 5 },
  { name: "GitHub", category: "tools", proficiency: "Expert", years: 5 },
  { name: "Vite", category: "tools", proficiency: "Advanced", years: 1 },
  { name: "Docker", category: "tools", proficiency: "Intermediate", years: 1 },
  { name: "Agile Methodology", category: "tools", proficiency: "Advanced", years: 4 },
  { name: "VS Code", category: "tools", proficiency: "Expert", years: 5 },
  { name: "Figma", category: "tools", proficiency: "Intermediate", years: 3 },
  { name: "Jupyter Notebook", category: "tools", proficiency: "Intermediate", years: 3 },
  { name: "Google Colab", category: "tools", proficiency: "Intermediate", years: 3 },
  { name: "Conda", category: "tools", proficiency: "Intermediate", years: 3 },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "soft-skills", label: "Soft Skills" },
  { id: "tools", label: "Tools" },
];

// Proficiency → ordinal, for sorting + pill styling
export const proficiencyRank = {
  Beginner: 0,
  Intermediate: 1,
  Advanced: 2,
  Expert: 3,
};

export default skills;
