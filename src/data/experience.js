/**
 * Experience data — work history + education.
 * Migrated verbatim from the original portfolio.
 *
 * Work schema:    { company, position, period, location, responsibilities[], technologies[] }
 * Education schema: { institution, degree, period, location, description, achievements[] }
 */

export const workExperience = [
  {
    company: "Braincore.id",
    position: "Machine Learning Engineer Intern",
    period: "Nov 2024 – Dec 2024",
    location: "Remote",
    responsibilities: [
      "Collaborated with a multidisciplinary team to develop 'HyperMeta: Automated Hyperparameter Optimization using Metaheuristic Algorithms', a tool to enhance ML model performance.",
      "Implemented metaheuristic algorithms such as Particle Swarm Optimization (PSO) and Genetic Algorithms (GA) to automate hyperparameter tuning, reducing manual intervention and compute costs.",
      "Built an interactive dashboard enabling users to select models, apply optimization algorithms, and visualize results.",
      "Deployed models on Google Cloud (Cloud Run, Cloud Build, Artifact Registry) for scalable operations.",
      "Presented at the Bangkit Capstone event — recognized as 'Best Project Capstone' and 'Best Presenter'.",
    ],
    technologies: ["Python", "Scikit-Learn", "MEALPy", "Google Cloud Platform", "Docker", "Streamlit"],
  },
  {
    company: "PT. Padepokan Tujuh Sembilan",
    position: "Knowledge Management Intern",
    period: "Oct 2021 – Mar 2022",
    location: "Bandung, ID",
    responsibilities: [
      "Conducted application testing using provided test cases to ensure functionality and performance.",
      "Implemented and prepared technologies for apps developed during the bootcamp program.",
      "Performed research on relevant technologies to support bootcamp learning materials.",
    ],
    technologies: ["Java", "Google Spreadsheets", "Vue.js", "React.js", "React Native"],
  },
];

export const education = [
  {
    institution: "Indonesia University of Education",
    degree: "B.Sc. in Computer Science",
    period: "2022 – 2026 (Expected)",
    location: "Bandung, ID",
    description:
      "Specialized in Machine Learning and Data Science. Conducting research on Vision-Language Models for emotion recognition.",
    achievements: [
      "Runner-up, LIDM National Innovation Competition, Bogor 2024",
      "Finalist, MTQMN XVII Quran App Design Competition, Malang 2023",
      "Impact project: PKM program for monitoring autistic children",
      "Web Development instructor for HEROES community service (orphans)",
      "Speaker on Time Management at MOKAKU orientation",
      "Speaker on Self Management at MBPM training",
    ],
  },
  {
    institution: "Coding Camp powered by DBS Foundation",
    degree: "Machine Learning Cohort",
    period: "Feb 2025 – Jul 2025",
    location: "Remote",
    description:
      "An intensive Machine Learning program focused on both theoretical and practical aspects.",
    achievements: [
      "Completed 12 Machine Learning courses in one month (13 Feb – 13 Mar 2025), originally paced for 3.5 months.",
    ],
  },
  {
    institution: "Bangkit Academy (Google, GoTo, Traveloka)",
    degree: "Machine Learning Cohort",
    period: "Sep 2024 – Jan 2025",
    location: "Remote",
    description:
      "A rigorous program in Machine Learning, Deep Learning, and Cloud Computing. Built a real-world project and collaborated with multidisciplinary teams.",
    achievements: [
      "Graduate with Distinction (Top 10% ML Track)",
      "Best Team Project — Bangkit Company Track Capstone",
      "Top 35 Best Individual Presenters in Capstone judging",
      "Top 5 Best Presenters in English ILT Class",
      "Received a Post-Program Offering from the company",
      "Most Active Student in the Bangkit Academy program",
      "Built HyperMeta for Braincore: automated hyperparameter tuning with metaheuristics",
    ],
  },
  {
    institution: "SMK Negeri 1 Garut",
    degree: "Software Engineering Student",
    period: "2018 – 2022",
    location: "Garut, ID",
    description:
      "Studied fundamental software-engineering principles, programming languages, and web development. Competed in various coding competitions.",
    achievements: [
      "Valedictorian of the SIJA (System Information Network & Application) program",
      "BNSP Certified as Junior Web Developer",
      "CompTIA Linux+ Certified",
      "2nd place — LKS provincial skills competition, West Java",
      "1st place — LKS district skills competition, Garut",
      "Selected for an internship offering at a startup company",
    ],
  },
];
