/**
 * Projects data — all 26 entries migrated from the original portfolio.
 *
 * Schema per project:
 *   { id, title, summary, description, category, technologies[], features[],
 *     metrics[], github, liveDemo }
 *
 * `category` is one of: "web" | "machine-learning" | "data-analysis" | "others"
 * `metrics[]`  are short performance strings (e.g. "val_accuracy 92%") rendered
 *              as badge chips on the card; ML projects only.
 *
 * Edit this file to add or update projects.
 */

export const projects = [
  {
    id: 1,
    title: "SILAR: Sign Language Augmented Reality",
    summary:
      "Innovative AR-Based Sign Language Learning Platform to help children learn sign language.",
    description:
      "Led a groundbreaking digital education technology project that secured 2nd place in the 2024 Student Digital Innovation Competition (LIDM) at IPB University. SILAR is an innovative Android application that leverages Augmented Reality (AR) to revolutionize sign language education for children — making learning accessible, fun, and interactive.",
    category: "web",
    technologies: ["Unity", "Vuforia", "React", "Next.js", "Google Auth"],
    features: [
      "Interactive AR card-based learning",
      "Gamified sign language education",
      "Comprehensive learning tracking system",
      "User-friendly interface",
    ],
    metrics: ["2nd Place · LIDM 2024"],
    github:
      "https://www.linkedin.com/posts/krisna-santosa_lidm2024-digitalinnovation-ar-activity-7237514674529779713-i7rm",
    liveDemo:
      "https://www.linkedin.com/posts/krisna-santosa_lidm2024-digitalinnovation-ar-activity-7237514674529779713-i7rm",
  },
  {
    id: 2,
    title: "CEKREK BEDAS: Asesmen Sekolah",
    summary:
      "AI-Powered Autism Assessment Platform to help educators monitor and improve autism student behavior.",
    description:
      "An innovative digital solution that secured 2nd Place in the Bandung Bedas Innovation Competition (KIBB), addressing critical challenges in early autism assessment for Special Education Schools (SLB) in Bandung Regency. The platform integrates AI to recommend activities for autism students.",
    category: "web",
    technologies: ["Next.js", "MySQL", "TailwindCSS", "Prisma", "RadixUI", "Google Auth"],
    features: [
      "Digitalized M-CHAT-R/F assessment tools",
      "AI-powered personalized activity recommendations",
      "Advanced data monitoring and analysis",
      "Web-based — accessible anytime, anywhere",
    ],
    metrics: ["2nd Place · KIBB 2024"],
    github: "https://github.com/KrisnaSantosa15/cekrek",
    liveDemo: "https://github.com/KrisnaSantosa15/cekrek",
  },
  {
    id: 3,
    title: "Real-time BISINDO Sign Language Classification",
    summary:
      "A Machine Learning solution for real-time classification of the BISINDO (Indonesian Sign Language) alphabet.",
    description:
      "An ML solution for real-time classification of the BISINDO alphabet using advanced computer vision and hand-landmark detection. Bridges technology and accessibility by recognizing Indonesian Sign Language in real time.",
    category: "machine-learning",
    technologies: ["SciKit-Learn", "MediaPipe", "Streamlit", "OpenCV", "Python"],
    features: [
      "Real-time classification of BISINDO alphabet",
      "Hand landmark detection and tracking",
      "Image upload + live video stream",
      "Configurable detection/tracking confidence",
    ],
    metrics: [],
    github: "https://github.com/KrisnaSantosa15/realtime-bisindo-classification",
    liveDemo: "https://realtime-bisindo-classification.streamlit.app/",
  },
  {
    id: 4,
    title: "Student Engagement Detection System",
    summary:
      "A system that helps educators understand and improve student engagement by analyzing facial expressions.",
    description:
      "Uses CNN and Computer Vision to classify student engagement levels from facial expressions. Designed to help educators understand and improve engagement in both traditional and online learning.",
    category: "machine-learning",
    technologies: ["TensorFlow", "Keras", "OpenCV", "Python"],
    features: [
      "CNN image classification",
      "Real-time face detection + engagement prediction",
      "Data augmentation for generalization",
      "Prediction visualization",
    ],
    metrics: [],
    github: "https://github.com/KrisnaSantosa15/student-engagement-detection",
    liveDemo: "https://github.com/KrisnaSantosa15/student-engagement-detection",
  },
  {
    id: 5,
    title: "Feature Selection & ML Comparison for Alzheimer's Classification",
    summary:
      "Comparing ML models and feature selection methods for Alzheimer's disease classification.",
    description:
      "Explores feature selection methods and ML models for the best prediction accuracy. Uses Genetic Algorithm, Mutual Information, Chi-Square, and RFE for selection; SVM, KNN, DT, RF, and ANN as classifiers.",
    category: "machine-learning",
    technologies: ["Python", "SciKit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    features: [
      "Feature selection: GA, Mutual Info, Chi-Square, RFE",
      "Classifiers: SVM, KNN, DT, RF, ANN",
      "Data preprocessing and visualization",
      "Model comparison and selection",
    ],
    metrics: [],
    github: "https://github.com/KrisnaSantosa15/alzheimer-fs-ml-comparison",
    liveDemo: "https://github.com/KrisnaSantosa15/alzheimer-fs-ml-comparison",
  },
  {
    id: 6,
    title: "Wine Quality Predictor: Feature Selection for SVM",
    summary:
      "Comparative analysis of feature selection algorithms for SVM-based wine quality classification.",
    description:
      "Predicts wine quality using SVM and multiple feature selection methods. Compares Genetic Algorithm, FCMIM, Mutual Information, Chi-Square, RFE, and SKB to identify the most effective features.",
    category: "machine-learning",
    technologies: ["Python", "SciKit-Learn", "Pandas", "NumPy", "Matplotlib", "Deap"],
    features: [
      "6 feature selection methods compared",
      "SVM classifier",
      "Data preprocessing and visualization",
      "Model comparison and selection",
    ],
    metrics: [],
    github: "https://github.com/KrisnaSantosa15/feature-selection-svm-comparison",
    liveDemo: "https://github.com/KrisnaSantosa15/feature-selection-svm-comparison",
  },
  {
    id: 7,
    title: "Head and Eyes Pose Estimation",
    summary: "Real-time head and eye pose estimation using computer vision.",
    description:
      "Real-time head and eye pose estimation tracking eye movement, blinks, and head orientation. Part of research into a student engagement detection system; uses MediaPipe for facial landmark extraction.",
    category: "machine-learning",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Matplotlib"],
    features: [
      "Real-time head and eye pose estimation",
      "Facial landmark detection and tracking",
      "Eye Aspect Ratio (EAR) calculation",
      "Eye blink detection + gaze direction",
    ],
    metrics: [],
    github: "https://github.com/KrisnaSantosa15/mediapipe-head-eyes-pose-estimation",
    liveDemo: "https://github.com/KrisnaSantosa15/mediapipe-head-eyes-pose-estimation",
  },
  {
    id: 8,
    title: "Emotion Classification from Comments",
    summary: "NLP to classify emotion from comments, powered by LSTM.",
    description:
      "Classifies emotions in text into 'joy', 'angry', or 'fear' using NLP. Built on the Kaggle Emotion dataset with an LSTM layer and NLTK for preprocessing.",
    category: "machine-learning",
    technologies: ["Python", "NLTK", "TensorFlow", "Keras", "Pandas", "SciKit-Learn"],
    features: [
      "NLTK stopword removal and text cleaning",
      "LSTM neural network for emotion detection",
      "Dropout layers to prevent overfitting",
    ],
    metrics: ["train 99%", "val 93%"],
    github: "https://github.com/KrisnaSantosa15/nlp-emotion-classification",
    liveDemo: "https://github.com/KrisnaSantosa15/nlp-emotion-classification",
  },
  {
    id: 9,
    title: "Temperature Forecasting in Tetouan City",
    summary: "Deep learning to forecast temperature in Tetouan City.",
    description:
      "Forecasts Tetouan city temperature from historical data using deep learning. The model achieves a Mean Absolute Error below 1% of the data range, suitable for temperature forecasting.",
    category: "machine-learning",
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "SciKit-Learn", "Matplotlib"],
    features: [
      "TensorFlow model architecture",
      "Bi-directional LSTM for prediction",
      "Huber loss function for stability",
    ],
    metrics: ["val_mae 0.0952"],
    github: "https://github.com/KrisnaSantosa15/temperature-forecasting-tetouan",
    liveDemo: "https://github.com/KrisnaSantosa15/temperature-forecasting-tetouan",
  },
  {
    id: 10,
    title: "Mammal Image Classification using CNN",
    summary: "CNN to classify mammal images across 5 categories.",
    description:
      "Classifies mammal images using CNNs. Built on a Kaggle dataset of 14,997 images across dog, cat, elephant, horse, and lion.",
    category: "machine-learning",
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "Keras", "Matplotlib"],
    features: [
      "CNN architecture in TensorFlow",
      "Data augmentation for generalization",
      "Preprocessing and visualization",
    ],
    metrics: ["val_acc 92%"],
    github: "https://github.com/KrisnaSantosa15/mammals-image-classification-cnn",
    liveDemo: "https://github.com/KrisnaSantosa15/mammals-image-classification-cnn",
  },
  {
    id: 11,
    title: "Rock Paper Scissors Classification using CNN",
    summary: "CNN to classify rock, paper, and scissors hand gestures.",
    description:
      "Deep learning model classifying hand gestures into Rock, Paper, or Scissors. Custom CNN architecture with callbacks to reduce learning rate and stop training to prevent overfitting.",
    category: "machine-learning",
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "Keras", "Matplotlib", "PIL", "Seaborn"],
    features: [
      "Preprocessing and augmentation",
      "Custom CNN architecture",
      "LR scheduling + checkpointing",
      "Confusion-matrix analysis",
      "Real-time prediction on uploads",
    ],
    metrics: ["val_acc 95%"],
    github: "https://github.com/KrisnaSantosa15/rock-paper-scissors-classifier",
    liveDemo: "https://github.com/KrisnaSantosa15/rock-paper-scissors-classifier",
  },
  {
    id: 12,
    title: "Wordle Solver Using Information Theory",
    summary: "Information-theory Wordle solver — entropy-based guessing.",
    description:
      "A fun free-time project inspired by 3Blue1Brown's video on solving Wordle by calculating entropy with information theory.",
    category: "others",
    technologies: ["Python", "NumPy", "Pandas"],
    features: [
      "Maintains a list of possible words from feedback",
      "Probability of each letter per position",
      "Picks highest-probability next guess",
      "Iterates until the word is found",
    ],
    metrics: [],
    github: "https://github.com/KrisnaSantosa15/wordle_solver_using_information_theory",
    liveDemo: "https://github.com/KrisnaSantosa15/wordle_solver_using_information_theory",
  },
  {
    id: 13,
    title: "Customer Segmentation — Beverage Sales",
    summary: "K-Means customer segmentation on 8.9M rows of beverage sales.",
    description:
      "Customer segmentation using K-Means on a Kaggle dataset of 8.9 million rows and 11 columns.",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "NumPy", "Pandas", "SciPy", "Matplotlib"],
    features: [
      "Deep data preprocessing and visualization",
      "K-Means clustering",
      "Customer segment generation",
    ],
    metrics: ["silhouette 0.73", "4 clusters"],
    github: "https://github.com/KrisnaSantosa15/customer-segmentation-beverage-sales",
    liveDemo: "https://github.com/KrisnaSantosa15/customer-segmentation-beverage-sales",
  },
  {
    id: 14,
    title: "Predicting Customer Segments After K-Means",
    summary: "Classifying new customers into clusters from K-Means.",
    description:
      "Extends beverage-sales clustering with a classification model that predicts the cluster of new customers based on the clusters generated by K-Means.",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "NumPy", "Pandas", "SciPy", "Matplotlib"],
    features: [
      "Deep preprocessing and visualization",
      "Classifies new customers into K-Means clusters",
    ],
    metrics: ["accuracy 0.99"],
    github: "https://github.com/KrisnaSantosa15/customer-segmentation-beverage-sales",
    liveDemo: "https://github.com/KrisnaSantosa15/customer-segmentation-beverage-sales",
  },
  {
    id: 15,
    title: "WasteNet — Garbage Classification using CNN",
    summary: "CNN to sort waste into 12 categories, deployed with Docker.",
    description:
      "An image classification system sorting waste into 12 categories using deep learning, designed to make waste management more efficient and accurate.",
    category: "machine-learning",
    technologies: ["Transfer Learning", "TensorFlow", "Keras", "Docker", "TensorFlow.js", "Python"],
    features: [
      "Advanced augmentation for generalization",
      "Transfer Learning to cut training time",
      "Export to TF-Lite, TF.js, SavedModel",
      "Real-time inference with Docker",
    ],
    metrics: ["val_acc 95%"],
    github: "https://github.com/KrisnaSantosa15/wastenet-garbage-classifier",
    liveDemo: "https://github.com/KrisnaSantosa15/wastenet-garbage-classifier",
  },
  {
    id: 16,
    title: "Sentiment Analysis for Jamsostek Mobile Reviews",
    summary: "Analyzing 108,000 user reviews of Jamsostek Mobile.",
    description:
      "Analyzes user sentiment to identify strengths and weaknesses for future improvements. Dataset of 108,000 reviews (collected Feb 17, 2025), balanced with undersampling across positive, neutral, and negative categories.",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "NumPy", "Pandas", "imbalanced-learn", "Matplotlib"],
    features: [
      "Cleaning and preprocessing text reviews",
      "Lexicon-based sentiment with score thresholds",
      "Undersampling to balance categories",
      "Visualization of sentiment trends",
    ],
    metrics: ["108k reviews"],
    github: "https://github.com/KrisnaSantosa15/jamsostek-sentiment-analysis",
    liveDemo: "https://github.com/KrisnaSantosa15/jamsostek-sentiment-analysis",
  },
  {
    id: 17,
    title: "Fullstack Website — MI Asy-Syifa Rancamanyar",
    summary: "A complete school website with extensive CRUD features.",
    description:
      "A comprehensive website for MI Asy-Syifa Rancamanyar with full CRUD for managing teaching staff, facilities, albums, achievements, and other typical school-site features.",
    category: "web",
    technologies: ["JavaScript", "Laravel", "MySQL", "Vite", "Bootstrap 5"],
    features: [
      "CRUD for staff, facilities, albums, achievements, org structure",
      "Comprehensive blog section",
      "Testimonial management",
      "Fully responsive design",
      "Authentication + role-based access",
    ],
    metrics: ["Live"],
    github: "https://github.com/KrisnaSantosa15/",
    liveDemo: "https://mediumpurple-squid-169789.hostingersite.com/",
  },
  {
    id: 18,
    title: "Face Recognition System Using Haar Cascade",
    summary: "Real-time face detection and recognition with Haar Cascade.",
    description:
      "A face recognition system using Haar Cascade for detection, with OpenCV recognizing faces in real time — useful for security and identification.",
    category: "others",
    technologies: ["Python", "OpenCV", "Haar Cascade"],
    features: ["Face detection with Haar Cascade", "Real-time recognition with OpenCV"],
    metrics: [],
    github: "https://github.com/KrisnaSantosa15/Python-FaceRecognition",
    liveDemo: "https://github.com/KrisnaSantosa15/Python-FaceRecognition",
  },
  {
    id: 19,
    title: "Hand Audio Control with Hand Landmarks",
    summary: "Control PC volume in real time using hand gestures.",
    description:
      "Leverages computer vision and audio libraries to control PC volume via hand gestures. Two scripts: audio control and hand-landmark detection.",
    category: "others",
    technologies: ["Python", "OpenCV", "MediaPipe", "pycaw", "NumPy", "Comtypes", "Ctypes"],
    features: [
      "Real-time hand landmark detection",
      "Volume control through gestures",
      "pycaw integration for audio",
      "Smooth, responsive performance",
    ],
    metrics: [],
    github: "https://github.com/KrisnaSantosa15/Python-HandAudioControll",
    liveDemo: "https://github.com/KrisnaSantosa15/Python-HandAudioControll",
  },
  {
    id: 20,
    title: "Books Recommender System",
    summary: "Hybrid recommender combining collaborative + content filtering.",
    description:
      "A recommender system for books based on user ratings and preferences, using both collaborative and content-based filtering for personalized recommendations.",
    category: "machine-learning",
    technologies: ["TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
    features: [
      "Collaborative filtering for personalization",
      "Content-based filtering",
    ],
    metrics: ["Precision@10 80%", "RMSE 0.21"],
    github: "https://github.com/KrisnaSantosa15/books-recommender-system",
    liveDemo: "https://github.com/KrisnaSantosa15/books-recommender-system",
  },
  {
    id: 21,
    title: "Anime Recommender System",
    summary: "Hybrid anime recommender — collaborative + content filtering.",
    description:
      "A recommender system for anime based on user ratings and preferences, using both collaborative and content-based filtering for personalized recommendations.",
    category: "machine-learning",
    technologies: ["TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
    features: ["Collaborative filtering", "Content-based filtering"],
    metrics: ["Precision@10 100%", "RMSE 0.16"],
    github: "https://github.com/KrisnaSantosa15/anime-recommender-system",
    liveDemo: "https://github.com/KrisnaSantosa15/anime-recommender-system",
  },
  {
    id: 22,
    title: "Mental Health Sentiment Analysis",
    summary: "7-class mental-health classification with LSTM + Attention.",
    description:
      "Detects mental-health expressions through text and classifies them into seven categories using NLP and deep learning, with oversampling via back-translation.",
    category: "machine-learning",
    technologies: ["TensorFlow", "Keras", "LSTM", "Attention", "TF-IDF", "Word2Vec", "Python"],
    features: [
      "Preprocessing for mental-health text",
      "Top n-gram analysis",
      "TF-IDF + Word2Vec features",
      "LSTM with Multi-Head Attention",
      "7-class: Normal, Depression, Suicidal, Anxiety, Stress, Bi-Polar, Personality Disorder",
    ],
    metrics: ["accuracy 89.4%", "F1 90%"],
    github: "https://github.com/KrisnaSantosa15/mental-health-sentiment",
    liveDemo: "https://github.com/KrisnaSantosa15/mental-health-sentiment",
  },
  {
    id: 23,
    title: "End-to-End Obesity Prediction System",
    summary: "TFX pipeline classifying 7 obesity levels from lifestyle data.",
    description:
      "An end-to-end obesity prediction system classifying individuals into seven obesity levels from demographic info, eating habits, and physical activity — supporting early intervention.",
    category: "machine-learning",
    technologies: ["TensorFlow", "TFX", "Keras Tuner", "Pandas", "NumPy", "Scikit-Learn"],
    features: [
      "Z-score scaling for numerical features",
      "Categorical vocabulary encoding",
      "Automated transformation via TFX Transform",
      "DNN with BatchNorm + Dropout",
      "Hyperband hyperparameter tuning",
      "End-to-end pipeline: ingestion → serving",
    ],
    metrics: ["train 94%", "val 91%"],
    github: "https://github.com/KrisnaSantosa15/end-to-end-obesity-prediction",
    liveDemo: "https://github.com/KrisnaSantosa15/end-to-end-obesity-prediction",
  },
  {
    id: 24,
    title: "End-to-End Sleep Disorder Prediction",
    summary: "TFX + TF Serving pipeline for 3-class sleep-disorder detection.",
    description:
      "An end-to-end sleep disorder prediction system classifying individuals into No Disorder, Insomnia, or Sleep Apnea from demographics, sleep patterns, lifestyle, and health indicators. Deployed via TensorFlow Serving with monitoring.",
    category: "machine-learning",
    technologies: ["Docker", "TFX", "Keras Tuner", "TensorFlow Serving", "Grafana", "Prometheus", "Railway"],
    features: [
      "Z-score scaling + categorical encoding",
      "TFX Transform component",
      "DNN with BatchNorm + Dropout",
      "Hyperband tuning",
      "Deployed via TF Serving on Railway",
      "Monitoring with TensorBoard, Grafana, Prometheus",
    ],
    metrics: ["train 93%", "val 88%"],
    github: "https://github.com/KrisnaSantosa15/sleep-disorder-prediction",
    liveDemo: "https://github.com/KrisnaSantosa15/sleep-disorder-prediction",
  },
  {
    id: 25,
    title: "Brazilian E-Commerce RFM & Geospatial Analysis",
    summary: "RFM + geospatial analysis on Olist Brazilian e-commerce data.",
    description:
      "Analyzes Brazilian e-commerce data to segment customers using RFM (Recency, Frequency, Monetary) and geospatial analysis to understand distribution — improving segmentation and business strategy.",
    category: "data-analysis",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Plotly", "Babel"],
    features: [
      "RFM analysis for segmentation",
      "Geospatial analysis of distribution",
      "Streamlit dashboard for visualization",
    ],
    metrics: ["Live dashboard"],
    github: "https://github.com/KrisnaSantosa15/brazilian-e-commerce-analysis",
    liveDemo: "https://customer-segmentation-olist-rfm.streamlit.app/",
  },
  {
    id: 26,
    title: "Fashion Industry ETL Pipeline",
    summary: "Scrape → transform → load pipeline for competitive intelligence.",
    description:
      "A complete ETL pipeline for scraping and processing data from a fashion retail site. Built as a data engineer for a fashion retail company, collecting competitive intelligence on a major competitor.",
    category: "others",
    technologies: ["BeautifulSoup", "Pandas", "PostgreSQL", "Google Sheets API", "SQLAlchemy", "pytest"],
    features: [
      "Web scraping with retry logic",
      "Transformation and cleaning pipeline",
      "Multi-destination loading (CSV, Sheets, Postgres)",
      "Exploratory data analysis",
      "Automated testing with pytest",
    ],
    metrics: [],
    github: "https://github.com/KrisnaSantosa15/fashion-industry-etl-pipeline",
    liveDemo: "https://github.com/KrisnaSantosa15/fashion-industry-etl-pipeline",
  },
];

// Category metadata for filter tabs + cover theming
export const projectCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "others", label: "Others" },
];

// Map category → accent color used by generated covers
export const categoryColors = {
  web: "#ff4d2e",
  "machine-learning": "#d6ff3d",
  "data-analysis": "#3b82f6",
  others: "#0a0a0a",
};

export default projects;
