// src/data.js

export const personalInfo = {
  name: "Shambhavi Singh",
  tagline: "Software Engineer | Data Analyst | Cloud Enthusiast",
  bio: "A highly motivated and results-oriented Computer Science student with a strong passion for developing robust software solutions and leveraging data for impactful insights. Proficient in cloud technologies, data analytics, and full-stack development, I am eager to apply my skills to innovative projects and contribute to dynamic teams.",
  imageUrl: "https://placehold.co/400x400/FFF0F5/800080?text=SS",
  // imageUrl: "", // Replace with your actual image URL
  contactEmail: "shambhavi156qt@gmail.com",
  linkedin: "https://www.linkedin.com/in/shambhavi-singh-45b630289/",
  github: "https://github.com/Shambhavi-03",
};

export const skillsData = [
  // Languages
  { category: "Languages", name: "Python" },
  { category: "Languages", name: "Java" },
  { category: "Languages", name: "C" },
  { category: "Languages", name: "HTML" },
  { category: "Languages", name: "CSS" },
  { category: "Languages", name: "Bash/Shell Scripting" },

  // Frameworks & Libraries
  { category: "Frameworks & Libraries", name: "Flask" },
  { category: "Frameworks & Libraries", name: "FastAPI" },
  { category: "Frameworks & Libraries", name: "React.js" },
  { category: "Frameworks & Libraries", name: "Node.js" },
  { category: "Frameworks & Libraries", name: "Next.js" },

  // Tools & Technologies
  { category: "Tools & Technologies", name: "PostgreSQL" },
  { category: "Tools & Technologies", name: "Firebase" },
  { category: "Tools & Technologies", name: "SQLite" },
  { category: "Tools & Technologies", name: "Redis" },
  { category: "Tools & Technologies", name: "MongoDB" },
  { category: "Tools & Technologies", name: "MySQL" },
  { category: "Tools & Technologies", name: "Linux" },
  { category: "Tools & Technologies", name: "Git" },
  { category: "Tools & Technologies", name: "GitHub" },
  { category: "Tools & Technologies", name: "Docker" },
  { category: "Tools & Technologies", name: "AWS" },
  { category: "Tools & Technologies", name: "Tableau" },
  { category: "Tools & Technologies", name: "Grafana" },
  { category: "Tools & Technologies", name: "Jenkins" },
  { category: "Tools & Technologies", name: "LangFlow" },
  { category: "Tools & Technologies", name: "LangChain" },
  { category: "Tools & Technologies", name: "Pandas" },
  { category: "Tools & Technologies", name: "NumPy" },
  { category: "Tools & Technologies", name: "Scikit-learn" },
  { category: "Tools & Technologies", name: "Matplotlib" },
  { category: "Tools & Technologies", name: "Seaborn" },
  { category: "Tools & Technologies", name: "TensorFlow" },
  { category: "Tools & Technologies", name: "Keras" },
  { category: "Tools & Technologies", name: "Postman" },
  // { category: "Tools & Technologies", name: "Supabase" },
];

export const projectsData = [
  {
    title: "Smart Tyre Pulse",
    description: "An IoT application for real-time tire pressure and TKPH monitoring in high-capacity dumpers, optimizing maintenance and predicting wear.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Flask", "Google Cloud AI Platform", "Grafana", "Infinity Datasource", "SQL", "WebSockets", "React", "Docker", "Firebase", "AI-based predictive analytics"],
    githubLink: "https://github.com/Shambhavi-03/Smart-Tire-Pulse",
    liveLink: "https://smart-tyre-pulse-jade.vercel.app/",
    imageUrl: "https://placehold.co/600x400/E0F2F7/306998?text=Smart+Tyre+Pulse", // Placeholder image
  },
  {
    title: "Network Vulnerability Scanner",
    description: "A scalable network security API for real-time vulnerability scanning, device discovery, and threat intelligence.",
    technologies: ["SQLite", "Nmap", "CVE", "NVD", "Flask", "JSON", "Python", "Machine Learning"],
    githubLink: "https://github.com/Shambhavi-03/Network-Vulnerability-Scanner",
    liveLink: "#", // Add live demo link if available
    imageUrl: "https://placehold.co/600x400/FFE0F0/D92323?text=Network+Scanner", // Placeholder image
  },
  {
    title: "ShareGuard: Real-Time File Sharing",
    description: "An advanced Firebase storage solution ensuring HTTPS encryption for secure data transfer and access management resulting in improved data integrity and user confidence.",
    technologies: ["Firebase", "HTML", "CSS", "JavaScript", "Firebase SDK"],
    githubLink: "https://github.com/Shambhavi-03/ShareGuard",
    liveLink: "https://fileshare-41245.web.app/", // Add live demo link if available
    imageUrl: "https://placehold.co/600x400/F0FFF0/4CAF50?text=ShareGuard", // Placeholder image
  },
  // Add more projects as needed
];

export const experienceData = [
  {
    title: "Data Analyst Intern",
    company: "EXL Services",
    companyUrl: "https://www.exlservice.com/",
    location: "Noida, India - Hybrid",
    years: "21 April 2025 - 20 June 2025",
    category: "Internship",
    skillsLearned: ["AWS", "EC2", "S3", "Lambda", "Glue Job", "EventBridge", "SageMaker", "Bedrock", "LLMs", "Multiprocessing", "Concurrency"],
    description: [
      "Worked with AWS services, including EC2, S3, Lambda, Glue Job, and EventBridge, to implement cloud-based data analytics solutions.",
      "Trained large language models (LLMs) using SageMaker and Bedrock, focusing on creating a natural language to SQL query generator.",
      "Applied multiprocessing and concurrency techniques to improve the efficiency of data processing tasks.",
      "Collaborated with cross-functional teams to design and implement automated workflows for data ingestion, transformation, and analysis.",
    ],
  }
];
