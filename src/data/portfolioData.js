import profilePhoto from "../assets/rotated2.jpeg";
import cvPdf from "../assets/Ahmad Sultan Mirzam Ambary - CV.pdf";

export { profilePhoto, cvPdf };

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const sectionIds = [
  "home", "about", "skills", "projects",
  "experience", "certifications", "activities", "contact",
];

export const typingPhrases = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI & Computer Vision Engineer",
  "Mobile Developer",
];

export const stats = [
  { value: "3.83", label: "GPA", suffix: "/4.00" },
  { value: "6+", label: "Years Coding", suffix: "" },
  { value: "Top 100", label: "Google Challenge", suffix: "" },
];

export const skills = {
  "Programming Languages": [
    "Dart", "TypeScript", "Kotlin", "Java",
    "Golang", "Python", "PHP", "SQL", "HTML/CSS", "C++",
  ],
  "Frameworks & Libraries": [
    "React.js", "React Native", "Next.js", "Vue.js",
    "Flutter", "Laravel", "React Three Fiber", "Inertia.js",
  ],
  "AI/ML & Computer Vision": [
    "YOLOv8", "YOLOv11", "Instance Segmentation", "Pose-Guided Anchoring",
    "MediaPipe", "MotionBERT", "OpenCV", "TensorFlow", "Scikit-learn", "Vertex AI",
  ],
  "Tools & Platforms": [
    "Visual Studio Code", "Android Studio", "GitHub", "Postman",
    "Docker", "Figma", "Anaconda", "Google Colab",
    "Arduino", "Prometheus", "Grafana",
  ],
  "Cloud & Databases": [
    "Supabase", "Firebase", "Google Cloud Platform",
    "Amazon Web Services",
  ],
};

export const projectFilters = ["All", "AI/ML", "Web", "Mobile", "IoT"];

export const projects = [
  {
    title: "Signesia",
    description:
      "End-to-end pipeline converting raw MediaPipe landmark data into real-time 3D avatar animations for BISINDO (Indonesian Sign Language). Architected a hybrid 2D-to-3D lifting pipeline using MotionBERT (DSTformer) with quaternion-based bone retargeting on Avaturn GLB humanoid rigs.",
    tech: ["Python", "React Three Fiber", "TypeScript", "MediaPipe", "MotionBERT"],
    date: "Feb 2026 - Jul 2026",
    type: "Lecturer's Project",
    category: ["AI/ML", "Mobile"],
    link: "#",
    active: true,
  },
  {
    title: "Multi-Stage PPE Detection System",
    description:
      "Undergraduate Thesis Project: \"Pengembangan Model Multi-Stage Object Detection Menggunakan YOLOv11 untuk Deteksi Kepatuhan Pemakaian Alat Pelindung Diri di Lingkungan Kerja Berisiko Tinggi\". Evaluated deep learning computer vision architectures for high-risk industrial safety monitoring. Conducted benchmark experiments comparing direct YOLO detection against instance segmentation with bounding box conversion and Pose-Guided Anchoring (PGA) for human keypoint ROI calibration.",
    tech: ["YOLOv11", "Multi-Stage Detection", "Instance Segmentation", "Pose-Guided Anchoring (PGA)", "Python", "mAP Evaluation"],
    date: "Feb 2026 - Jul 2026",
    type: "Thesis Project",
    category: ["AI/ML"],
    link: "#",
    active: false,
  },
  {
    title: "PPE Detection System",
    description:
      "End-to-end real-time Personal Protective Equipment (PPE) compliance monitoring system deployed at PT. Telkom Indonesia. Designed a Computer Vision pipeline using YOLOv11n segmentation with a custom 14-class dataset (wear/non-wear states), achieving mAP of 0.708. Integrated with CCTV static IP feeds and Network Video Recorders (NVR) to automate safety compliance alerts in industrial environments.",
    tech: ["YOLOv11n", "Computer Vision", "Python", "CCTV/NVR Integration", "Dataset Curation"],
    date: "Jul 2025 - Sep 2025",
    type: "Internship Project",
    category: "AI/ML",
    link: "#",
    active: false,
  },
  {
    title: "NEO PARK",
    description:
      "Intelligent parking system integrating computer vision and IoT, recognized as 'Best Capstone Project'. Fine-tuned YOLOv8 for car detection with 90%+ confidence and under 1-second latency. Established DevOps workflows with automated CI/CD pipelines.",
    tech: ["YOLOv8", "IoT", "Computer Vision", "Python", "CI/CD", "Grafana"],
    date: "Feb 2025 - Jul 2025",
    type: "Capstone Project",
    category: ["IoT", "AI/ML"],
    link: "#",
    active: false,
  },
  {
    title: "GreenBox Apps",
    description:
      "Android mobile application for waste classification detection using machine learning, developed as a college course project. Successfully implemented a complete and polished UI/UX from scratch, integrating Vertex AI for real-time image-based waste classification to enhance waste management efficiency and user awareness.",
    tech: ["Kotlin", "Firebase", "Vertex AI", "Machine Learning"],
    date: "Sep 2024 - Nov 2024",
    type: "Course Assignment",
    category: ["Mobile", "AI/ML"],
    link: "#",
    active: false,
  },
  {
    title: "USMAN Apps",
    description:
      "Dual-platform mobile application built for the MTQMN Competition, securing national runner-up. Designed to help MSMEs (small businesses) calculate HPP (Harga Pokok Penjualan / Cost of Goods Sold) accurately. Built two separate apps — one for mentors to manage and monitor business data, and one for users (UMKM owners) to input and track production costs. Successfully implemented all UI/UX designs and integrated RESTful APIs across both applications.",
    tech: ["Flutter", "Dart", "REST API", "UI/UX"],
    date: "Sep 2024 - Nov 2024",
    type: "Competition Project",
    category: "Mobile",
    link: "#",
    active: false,
  },
  {
    title: "NgampusYuk Apps",
    description:
      "An intelligent Android application designed to empower prospective university students in making smarter, data-driven decisions when selecting their ideal PTN (State University) and academic major. Users can input their try-out scores and the app automatically matches them with compatible universities and study programs based on historical passing grade data. Features an in-depth comparison tool covering key metrics such as UKT (tuition fees), institutional accreditation, major rankings, and facilities giving students a comprehensive view to confidently choose the best fit. Achieved 100% implementation of all planned features, UI/UX, and Firebase-powered backend.",
    tech: ["Kotlin", "Firebase", "Android SDK", "UI/UX"],
    date: "Feb 2024 - Mar 2024",
    type: "Community Project",
    category: "Mobile",
    link: "#",
    active: false,
  },
  {
    title: "SIMABA 2024 Website",
    description:
      "Led a cross-functional IT division of 8 developers to build the official freshman orientation platform for 900+ active users. Architected secure assignment submission, automated attendance, grading portals, and dynamic group distribution.",
    tech: ["React.js", "Full-stack", "Database Optimization"],
    date: "Jun 2024 - Aug 2024",
    type: "Committee Project",
    category: "Web",
    link: "#",
    active: false,
  },
  {
    title: "Desa Babadan Website",
    description:
      "A comprehensive village profile web platform developed during KKN (Community Service Program) where I served as Team Leader and Full-Stack Developer. Built using Laravel, React.js, and Inertia.js to seamlessly link frontend and backend. Features dynamic modules for village demographics & population statistics, local tourism highlights, a marketplace for local village products (UMKM), and organizational structures of village leadership.",
    tech: ["React.js", "Laravel", "Inertia.js", "Full-Stack", "Team Lead"],
    date: "Jul 2024 - Aug 2024",
    type: "KKN Project",
    category: "Web",
    link: "#",
    active: false,
  },
  {
    title: "UrDENTIST APPS",
    description:
      "Top 100 Google Solution Challenge 2024 globally. Mobile app for dental health with caries detection, treatment recommendations, and daily oral hygiene tasks. Integrated ML APIs for automated caries detection from user-uploaded images.",
    tech: ["Flutter", "Dart", "Machine Learning"],
    date: "Dec 2023 - Mar 2024",
    type: "Google Solution Challenge",
    category: ["Mobile", "AI/ML"],
    link: "#",
    active: false,
  },
  {
    title: "Sportix Website",
    description:
      "Web-based sports facility and equipment rental platform. Engineered the backend with Laravel, integrated Midtrans payment gateway for automated transaction processing, and optimized database schemas to prevent double-booking issues.",
    tech: ["Laravel", "PHP", "Midtrans", "MySQL"],
    date: "Dec 2023 - Mar 2024",
    type: "Community Project",
    category: "Web",
    link: "#",
    active: false,
  },
];

export const experience = [
  {
    company: "PT. Telkom Indonesia",
    position: "AI Engineer Intern",
    duration: "Jul 2025 – Sep 2025",
    location: "Jakarta (On-site)",
    bullets: [
      "Designed and deployed an end-to-end Computer Vision pipeline using YOLOv11n segmentation for real-time PPE compliance monitoring.",
      "Curated, annotated, and balanced a custom dataset of 14 classes, achieving a Mean Average Precision (mAP) of 0.708.",
      "Integrated the AI inference pipeline with CCTV static IP feeds and NVR to automate safety compliance alerts in industrial environments.",
    ],
  },
  {
    company: "Bank BTPN Syariah",
    position: "Fullstack Developer Intern",
    duration: "Jan 2024",
    location: "Jakarta (Remote)",
    bullets: [
      "Completed a structured project-based internship program with hands-on experience in Golang and Vue.js.",
      "Independently developed a final project featuring a Golang-based RESTful API for efficient data handling and integration.",
      "Earned qualification as a qualified student, demonstrating both technical and professional competence.",
    ],
  },
  {
    company: "PT. Telkom Indonesia",
    position: "Frontend Developer Intern",
    duration: "Aug 2021 – Oct 2021",
    location: "Bandung (On-site)",
    bullets: [
      "Refactored a monolithic codebase of 5,000+ lines into modular, reusable components, significantly improving maintainability.",
      "Developed responsive front-end interfaces integrated with the Laravel framework, delivering features on schedule.",
      "Created and maintained comprehensive technical documentation for smooth handover processes.",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Academy Data Engineering",
    issuer: "Amazon Web Services",
    year: "2025",
    icon: "☁️",
  },
  {
    title: "Top 100 Google Solution Challenge",
    issuer: "Google",
    year: "2024",
    icon: "🏆",
  },
];

export const activities = [
  {
    role: "Head of PIT Division",
    org: "PKKMB (SIMABA 2024)",
    year: "2024",
    description:
      "Led the Information Technology division for Brawijaya University's freshman orientation program.",
  },
  {
    role: "IT Development Staff",
    org: "BEM FILKOM UB",
    year: "2023",
    description:
      "Contributed to technology initiatives within the Faculty of Computer Science student executive board.",
  },
  {
    role: "Staff of PIT Division",
    org: "Brawijaya Tournament 2023",
    year: "2023",
    description:
      "Supported IT operations and infrastructure for the university-wide Brawijaya Tournament event.",
  },
];

export const achievements = [
  "Best Project — Informatics Engineering Capstone 2025",
  "Top 100 Google Solution Challenge 2024 (Global)",
  "National Runner-Up — MTQMN (USMAN Apps)",
  "The Best Staff of PIT BEM FILKOM 2023",
  "AWS Academy Data Engineering Certified",
];
