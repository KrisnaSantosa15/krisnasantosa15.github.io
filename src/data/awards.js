/**
 * Awards & Certifications data — migrated verbatim.
 *
 * Awards schema:          { id, title, issuer, date, description, link }
 * Certifications schema:   { id, title, issuer, date, description, link, badgeColor }
 */

export const awards = [
  {
    id: 1,
    title: "2nd Place — Student Digital Innovation Competition (LIDM)",
    issuer: "Ministry of Education, Culture, Research, and Technology",
    date: "2024",
    description:
      "Second place with SILAR (Sign Language Berbasis AR Interaktif) at LIDM — organized by the Ministry of Education in Bandung. Highlights cutting-edge tech and meaningful educational accessibility for hearing-impaired children.",
    link: "https://linkedin.com/posts/krisna-santosa_lidm2024-digitalinnovation-ar-activity-7237514674529779713-i7rm",
  },
  {
    id: 2,
    title: "2nd Place — Bandung Regency Innovation Competition (KIBB)",
    issuer: "Regional Planning, Research, and Innovation Agency of Bandung Regency",
    date: "2024",
    description:
      "Second place with CEKREK BEDAS at KIBB — addressing early autism assessment for Special Education Schools in Bandung Regency.",
    link: "https://linkedin.com/posts/krisna-santosa_innovation-specialeducation-autism-activity-7262069803815706624-Q3P5",
  },
  {
    id: 3,
    title: "Bangkit 2024 — Distinction Graduate",
    issuer: "Bangkit Academy led by Google, GoTo, and Traveloka",
    date: "2025",
    description:
      "Distinction Graduate — top of the ML Cohort (1,980+ learners). Achieved Bangkit Point Tier 7 (the highest tier) for outstanding academic performance and advanced challenges.",
    link: "https://linkedin.com/posts/krisna-santosa_bangkit2024-graduation-distinctiongraduate-activity-7294951635640815616-1QTR",
  },
  {
    id: 4,
    title: "Best Team — Bangkit Company Track Capstone",
    issuer: "Bangkit Academy led by Google, GoTo, and Traveloka",
    date: "2025",
    description:
      "Best Team in the Company Track Capstone. Top team in the ML Cohort (1,980+ learners) with outstanding technical skills and milestone completion. Tier 7.",
    link: "https://linkedin.com/posts/krisna-santosa_bangkit2024-graduation-distinctiongraduate-activity-7294951635640815616-1QTR",
  },
  {
    id: 5,
    title: "Finalist — MTQMN XVII Quran App Design Competition",
    issuer: "Ministry of Education, Culture, Research, and Technology",
    date: "2023",
    description:
      "Finalist in Musabaqah Desain Aplikasi Komputer Quran, MTQMN XVII, organized by the Indonesia Talent Development Center in Malang. Merged tech expertise with religious application design.",
    link: "https://drive.google.com/file/d/1asvYS3ckvMqeGo1EAxr31Wd03bTjIqMs/view?usp=sharing",
  },
  {
    id: 6,
    title: "Top Graduate — Computer Science, SMK Negeri 1 Garut",
    issuer: "SMK Negeri 1 Garut",
    date: "2022",
    description:
      "Top graduate ('Juara Umum Kompetensi Keahlian SIJA') — recognizes outstanding performance in CS and Information Systems.",
    link: "https://drive.google.com/file/d/1msXsiNRkAmoGDUVmH1GvW0RwD2pqvwrV/view?usp=sharing",
  },
  {
    id: 7,
    title: "2nd Place — Provincial Vocational Skills Competition (LKS)",
    issuer: "Education Office of West Java",
    date: "2021",
    description:
      "Second place in Web Design Techniques (Web Technologies) at the province-wide LKS. Organized by the Education Office of West Java.",
    link: "https://drive.google.com/file/d/1DBPCHKEA9ojWk66mUVs5EuFggUGcxOjS/view?usp=sharing",
  },
  {
    id: 8,
    title: "1st Place — District Vocational Skills Competition (LKS)",
    issuer: "Education Office of Region XI Garut, West Java",
    date: "2021",
    description:
      "First place in Web Design Techniques (Web Technologies) at the district-level LKS. Organized by the Education Office of Region XI Garut.",
    link: "https://drive.google.com/file/d/1Si8z7vMumI9cQ7NMiNtlngQxYtlm_Rn0/view?usp=sharing",
  },
];

export const certifications = [
  { id: 1, title: "BNSP Junior Web Developer", issuer: "BNSP", date: "31-10-2022", description: "Professional certification validating fundamental web development skills — frontend (HTML, CSS, JS) and backend (Node.js, PHP).", link: "https://drive.google.com/file/d/1-YBiVhGV8FrpKExwXVRxOome6JvIAJwz/view?usp=sharing", badgeColor: "#FF5733" },
  { id: 2, title: "CompTIA Linux Plus", issuer: "CompTIA", date: "11-08-2022", description: "Industry-recognized Linux administration — servers, networking, shell scripting, troubleshooting. Essential for cloud & cybersecurity.", link: "https://drive.google.com/file/d/11K26cz0wUsbH5zzNQHvpngIvhxMdDdsk/view?usp=sharing", badgeColor: "#F39C12" },
  { id: 3, title: "Generative Adversarial Networks Specialization", issuer: "Coursera", date: "06-11-2024", description: "Building & training GANs — high-quality image generation, adversarial loss, stability techniques in TensorFlow.", link: "https://coursera.org/share/56d2716c7f86085817f0cd0fe7762897", badgeColor: "#0071BC" },
  { id: 4, title: "TensorFlow Advanced Techniques Specialization", issuer: "Coursera", date: "04-11-2024", description: "Custom model building, complex loss functions, RL strategies, attention mechanisms, large-scale optimization.", link: "https://coursera.org/share/c02bad7f8f1e4b18da453a77baf6b615", badgeColor: "#0071BC" },
  { id: 5, title: "Generative AI for Everyone", issuer: "DeepLearning.AI", date: "29-10-2024", description: "Comprehensive GenAI overview — NLP, image generation, creative content, ethics, real-world use cases.", link: "https://coursera.org/share/f191f86b36d81674aa91937d9b776d51", badgeColor: "#0071BC" },
  { id: 6, title: "TensorFlow Data and Deployment Specialization", issuer: "Coursera", date: "04-11-2024", description: "End-to-end ML pipelines — data preprocessing, cloud deployment, production-level model management.", link: "https://coursera.org/share/bd89b4069eac57f5c5644015a34f381d", badgeColor: "#0071BC" },
  { id: 7, title: "Deep Learning Specialization", issuer: "DeepLearning.AI", date: "10-11-2024", description: "Neural networks, CNNs, RNNs, sequence modeling — practical implementation and optimization.", link: "https://coursera.org/share/96abf9266ae4f3cc5c9f779b241fa1c0", badgeColor: "#0071BC" },
  { id: 8, title: "TensorFlow Developer Specialization", issuer: "Coursera", date: "23-10-2024", description: "Build, train, deploy ML models — transfer learning, TF Serving, TF Lite for edge/mobile.", link: "https://coursera.org/share/9e445652893ab7c7550c236d08c4e5bf", badgeColor: "#0071BC" },
  { id: 9, title: "Machine Learning Specialization", issuer: "Coursera", date: "09-10-2024", description: "Stanford/Andrew Ng — supervised/unsupervised learning, regularization, neural networks.", link: "https://coursera.org/share/61d510c7ba6ae2dbc26c9e76f64f391f", badgeColor: "#0071BC" },
  { id: 10, title: "Mathematics for ML & Data Science Specialization", issuer: "Coursera", date: "07-10-2024", description: "Imperial College London — linear algebra, calculus, probability, optimization for ML.", link: "https://coursera.org/share/a1fc72df650dda496596eff92135bc59", badgeColor: "#0071BC" },
  { id: 11, title: "Using Python to Interact with the OS", issuer: "Coursera", date: "14-09-2024", description: "Google — Python automation, file handling, web scraping, data manipulation.", link: "https://coursera.org/share/87194ef623e5eb4433e614094c0f8fd2", badgeColor: "#0071BC" },
  { id: 12, title: "Crash Course on Python", issuer: "Coursera", date: "11-09-2024", description: "Google — Python foundations: data structures, control flow, algorithms.", link: "https://coursera.org/share/60498b90dbc32605b1b1cc108c353210", badgeColor: "#0071BC" },
  { id: 13, title: "Machine Learning Terapan", issuer: "Dicoding", date: "15-03-2025", description: "Applied ML — Recommender Systems, Predictive Analytics, Scikit-learn, TensorFlow.", link: "https://dicoding.com/certificates/L4PQEYQ1QPO1", badgeColor: "#16A085" },
  { id: 14, title: "Fundamental Data Processing", issuer: "Dicoding", date: "07-03-2025", description: "Data processing fundamentals — cleaning, transformation, aggregation, ETL, visualization.", link: "https://dicoding.com/certificates/98XWE82KWXM3", badgeColor: "#16A085" },
  { id: 15, title: "ML Development", issuer: "Dicoding", date: "22-02-2025", description: "Building ML from scratch — supervised/unsupervised, evaluation, deployment strategies.", link: "http://dicoding.com/certificates/MRZM8413RZYQ", badgeColor: "#16A085" },
  { id: 16, title: "ML for Beginners", issuer: "Dicoding", date: "14-02-2025", description: "Introductory ML — preprocessing, model selection, evaluation fundamentals.", link: "http://dicoding.com/certificates/1OP8NYVG2XQK", badgeColor: "#16A085" },
  { id: 17, title: "Data Analysis with Python", issuer: "Dicoding", date: "12-02-2025", description: "Data analysis with Python — Pandas, visualization, statistical analysis.", link: "https://dicoding.com/certificates/4EXGQW1Q9ZRL", badgeColor: "#16A085" },
  { id: 18, title: "Programming with Python", issuer: "Dicoding", date: "11-02-2025", description: "Python foundations — syntax, data structures, control flow, regex.", link: "http://dicoding.com/certificates/4EXG4WW0QPRL", badgeColor: "#16A085" },
  { id: 19, title: "Fundamentals of SQL", issuer: "Dicoding", date: "11-02-2025", description: "SQL fundamentals — creating tables, queries, data manipulation.", link: "https://dicoding.com/certificates/GRX532KMVZ0M", badgeColor: "#16A085" },
  { id: 20, title: "Data Visualization Fundamentals", issuer: "Dicoding", date: "11-02-2025", description: "Visualization with Matplotlib & Seaborn — EDA, communicating data-driven insights.", link: "http://dicoding.com/certificates/2VX368V4NXYQ", badgeColor: "#16A085" },
  { id: 21, title: "AI Fundamentals", issuer: "Dicoding", date: "11-02-2025", description: "Intro to AI — algorithms, neural networks, basic model training.", link: "https://dicoding.com/certificates/0LZ0436NKP65", badgeColor: "#16A085" },
  { id: 22, title: "Git & GitHub Fundamentals", issuer: "Dicoding", date: "11-02-2025", description: "Version control — branching, merging, pull requests, collaboration.", link: "https://dicoding.com/certificates/L4PQ1V6NQXO1", badgeColor: "#16A085" },
  { id: 23, title: "Introduction to Programming Logic", issuer: "Dicoding", date: "10-02-2025", description: "Programming logic — algorithms, flowchart design, problem-solving foundations.", link: "https://dicoding.com/certificates/2VX3R92YNZYQ", badgeColor: "#16A085" },
  { id: 24, title: "Software Development Fundamentals", issuer: "Dicoding", date: "10-02-2025", description: "Software dev basics — programming fundamentals, project management, best practices.", link: "https://dicoding.com/certificates/07Z60YLWMZQR", badgeColor: "#16A085" },
];
