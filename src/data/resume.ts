import type { ResumeData } from "./types";
import { validateResume } from "./validate";

export const RESUME: ResumeData = validateResume({
  name: "Ivan Serdiuk",
  headline:
    "M.S. Computer Information Systems candidate (NYU Courant) • Machine Learning • Python/SQL • Cloud Fundamentals",
  location: "New York, NY",
  contact: {
    email: "is2332@nyu.edu",
    phone: "929.366.7252",
    github: "https://github.com/IvanSerdiuk",
    linkedin: "https://www.linkedin.com/in/ivan-serdiuk/",
  },
  summary: [
    "M.S. Computer Information Systems candidate at NYU Courant Institute (expected June 2026).",
    "Machine learning experience across research and applied projects (PyTorch, scikit-learn, TensorFlow).",
    "Background building data pipelines, security-minded applications, and pragmatic solutions for transit use cases.",
  ],
  education: [
    {
      school: "NYU – Courant Institute",
      degree: "M.S. in Computer Information Systems",
      location: "New York, NY",
      graduation: "June 2026",
    },
    {
      school: "Baruch College",
      degree: "Bachelor of Business Administration",
      location: "New York, NY",
      graduation: "June 2024",
    },
  ],
  experience: [
    {
      company: "Google Summer of Code",
      companyUrl: "https://summerofcode.withgoogle.com/",
      role: "Machine Learning Research Intern",
      start: "2025-06",
      end: "2025-08",
      location: "Remote",
      bullets: [
        "Developed a supervised machine learning model in Python (PyTorch, scikit-learn) to predict potential planetary habitability using datasets from the NASA Exoplanet Archive.",
        "Engineered features such as orbital period, stellar flux, and atmospheric composition indicators, integrating astrophysical domain knowledge into the model pipeline.",
        "Implemented data preprocessing pipelines to improve dataset consistency.",
        "Optimized model performance through cross-validation, hyperparameter tuning, and ensemble methods, achieving ~85% classification accuracy.",
      ],
      tags: ["Python", "PyTorch", "scikit-learn", "ML Research"],
    },
    {
      company: "Accenture",
      role: "Computer Science Intern",
      start: "2023-06",
      end: "2023-07",
      location: "New York, NY",
      bullets: [
        "Investigated a technological area to improve the transit experience for riders in a North American transit system by developing an AI surveillance system with Python, PyTorch, and a MySQL database.",
        "Led the development of the database and data management system in collaboration with a team of five; proactively addressed project delays.",
        "Presented recommendations and advice to a group of 30 using PowerPoint.",
        "Met project milestones and deadlines within the stipulated timeframe.",
        "Received a rating of 4.5 out of 5 from team members for effective collaboration and contribution to group tasks.",
        "Successfully resolved 90% of project-related issues independently or with minimal supervision.",
      ],
      tags: ["Python", "PyTorch", "MySQL", "Team Leadership"],
    },
    {
      company: "Metropolitan Transportation Authority (MTA)",
      role: "Information Technology Intern",
      start: "2023-01",
      end: "2023-02",
      location: "New York, NY",
      bullets: [
        "Formulated strategic plans to identify patterns for early defect detection, boosting defect detection by 20%.",
        "Developed an application with online form submissions and picture uploads, boosting user engagement by 30% and reducing submission errors by 25%.",
        "Designed a secure user-server connection with SSL, achieving a 95% security audit score and zero breaches.",
        "Implemented two-factor authentication for safer logins and enhanced application security.",
        "Contributed to developing a POST API request for database updates, improving application efficiency.",
        "Led teams and implemented incentive plans, fostering continuous improvement and operational excellence.",
      ],
      tags: ["Security", "SSL", "2FA", "Web App"],
    },
  ],
  projects: [
    {
      name: "SpyBot",
      tagline: "AI-powered phishing and spam detector (HackNYU)",
      date: "2025-02",
      links: [
        { label: "Demo", href: "https://example.com" },
        { label: "Repo", href: "https://example.com" },
      ],
      stack: [
        "JavaScript",
        "Chrome Extension (Manifest V3)",
        "Python",
        "Flask",
        "TensorFlow",
        "GPT-4",
      ],
      bullets: [
        "Built a Chrome extension for real-time phishing detection using JavaScript (Manifest V3) with a Python (Flask) backend and TensorFlow classification.",
        "Developed an LLM-based phishing text analysis module utilizing OpenAI GPT-4 to detect AI-generated phishing emails with a 98% accuracy rate.",
        "Implemented computer vision models to analyze logos, typography, and design inconsistencies to detect phishing attempts.",
      ],
    },
  ],
  skills: {
    programming: [
      "Python",
      "SQL",
      "JavaScript (Entry level)",
      "HTML/CSS",
      "AWS (Entry level)",
    ],
    tools: [
      "Microsoft Office (Advanced)",
      "Microsoft Teams",
      "Google Workspace",
      "Zoom",
    ],
  },
  certifications: [
    "Microsoft Azure Fundamentals",
    "AWS Cloud Practitioner Essentials",
    "Google Data Analytics",
    "DataCamp Joining Data in SQL",
    "DataCamp Introduction to SQL",
    "AWS Certified Cloud Practitioner",
  ],
  languages: ["Ukrainian (Native)", "English"],
});
