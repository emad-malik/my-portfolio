
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project3,
  project1,
  p1,
  p2,
  p3,
  p5,
  p6,
  p7,
  p8,
  p9,
  mysql,
  express,
  postgresql,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  python, 
  r,
  cpp, 
  tableau, 
  powerbi, 
  gcp, 
  linux, 
  docker,
  n8n, 
  flask, 
  fastapi, 
  apachespark, 
  apachekafka, 
  apachehadoop,
  cuML, 
  pytorch, 
  tensorflow, 
  scikit,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  testimonial1,
  testimonial2,
  testimonial3,
} from '../assets'


import dml from "../assets/company/dml.png";


export const navLinks = [

  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: "uil uil-brain",
    skills: [
      { name: "Scikit-learn", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 85 },
      { name: "Keras", level: 85 },
    ],
  },
  {
    title: "Programming & Databases",
    icon: "uil uil-brackets-curly",
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 80 },
      { name: "C++", level: 90 },
      { name: "SQL", level: 95 },
      { name: "MongoDB", level: 90 },
    ],
  },
  {
    title: "Data Engineering",
    icon: "uil uil-cloud-computing",
    skills: [   
      { name: "Apache Spark", level: 90 },
      { name: "Apache Kafka", level: 90 },
      { name: "Apache Hadoop", level: 85 },
      { name: "SQL", level: 95},
    ],
  },
  {
    title: "Data Analysis & Visualization",
    icon: "uil uil-server-network",
    skills: [
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 75 },
      { name: "Pyplot", level: 85},
      { name: "Other Py Libraries (EDA, Graphs, etc.)", level: 85},
    ],
  },
];
const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "fastapi",
    icon: fastapi,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "scikit",
    icon: scikit,
  },
  {
    name: "apachespark",
    icon: apachespark,
  },
  {
    name: "apachekafka",
    icon: apachekafka,
  },
  {
    name: "apachehadoop",
    icon: apachehadoop,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "tableau",
    icon: tableau,
  },
  {
    name: "powerbi",
    icon: powerbi,
  },
 
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "DMLytics",
    icon: dml,
    iconBg: "#FFFFFF",
    date: "Feb 2025 - May 2025",
    points: [
      "Created an automated image processing pipeline that converts drone imagery into precise and seamless-blended orthomosaics.",
      "Developed a KMZ-based mission planner that automates drone flight planning, based on waypoints and flight parameters.",
    ],
  },
];

const certifications = [
  { name: "Data Science Professional Certificate (IBM)", url: "https://www.coursera.org/account/accomplishments/certificate/XW3TZV6F2LK7" },
  { name: "IT Security (Google)", url: "https://www.coursera.org/account/accomplishments/certificate/GGL4WBHYC672" },
  { name: "Number Theory and Cryptography (UCS)", url: "https://www.coursera.org/account/accomplishments/certificate/SXZ34UHXES4Z" },
];

const projects = [
  {
    name: "JobSwipe - Agentic AI Job Search Assistant",
    description:
      "Full-stack job discovery and networking platform built with Next.js and TypeScript. Integrated Supabase for authentication and database management. Implemented core features such as job scraping, user career readiness, AI-powered resume optimization, and personalized job recommendations. Developed a modern, responsive UI using TailwindCSS to enhance user experience and engagement.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
    ],
    image: p9,
    source_code_link: "https://github.com/muhammadhaider02/v2-JobSwipe/tree/dev",
  },
  {
    name: "Short-Term Load Forecasting - MLOps Pipeline",
    description:
      "Production-ready ML pipeline for predicting energy demand using XGBoost, deployed with FastAPI and Docker using AWS App Runner. Implemented complete ETL pipeline processing 1.3M+ energy records with automated data cleaning and feature engineering. Built interactive dashboard and RESTful API with health monitoring, background training, and confidence interval predictions.",
    tags: [
      {
        name: "xgboost",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "mlops",
        color: "orange-text-gradient",
      },
    ],
    image: p8,
    source_code_link: "https://github.com/emad-malik/Short-Term-Load-Forecasting-EndtoEnd-MLops-Pipeline",
  },
  {
    name: "Automated Drift-Aware Fare Predictor",
    description:
      "Production-grade MLOps pipeline for predicting NYC taxi fares with automated drift detection and model retraining. Orchestrated with Apache Airflow, tracked experiments using MLflow, and containerized with Docker. Implemented statistical drift detection to monitor model performance and automatically retrain when drift is detected.",
    tags: [
      {
        name: "mlflow",
        color: "blue-text-gradient",
      },
      {
        name: "airflow",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "drift-detection",
        color: "orange-text-gradient",
      },
    ],
    image: p7,
    source_code_link: "https://github.com/emad-malik/Automated-Drift-Aware-Fare-Predictor-Docker-MLflow-Airflow",
  },
  {
    name: "F1 Prediction System",
    description:
      "Fetched F1 data from Fast-F1 API and preprocessed it. Built a predictive model to forecast the podium of the upcoming race by analysing historical drivers and race features. Implemented hyperparameter techniques to minimise the error of the regressor boosting model.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "prediction",
        color: "pink-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://github.com/emad-malik/F1-Prediction-Model",
  },
  {
    name: "Music Recommendation Engine",
    description:
      "Developed an ETL pipeline to process the FMA dataset, extract features, and store the transformed data in MongoDB. Utilized Spark and MLlib to train music recommendation models using collaborative filtering, refining performance through hyperparameter tuning. Integrated Kafka with Flask to deploy the project.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "spark",
        color: "green-text-gradient",
      },
      {
        name: "kafka",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/emad-malik/Music-Recommendation-System-PySpark-Kafka-MongoDB",
  },
  {
    name: "Predictive Analysis of Residential Property",
    description:
      "Developed an ETL pipeline to process the Zameen dataset, extract features, and transform the data for prediction. Trained and tuned a regression model to predict property prices in Islamabad based on different features.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "etl",
        color: "green-text-gradient",
      },
      {
        name: "regression",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/emad-malik/Predictive-Analysis-of-Residential-Property",
  },
  {
    name: "Near Real-Time DataWarehouse",
    description:
      "Developed an ETL pipeline to process customer data using the MeshJoin algorithm and store results in MySQL. Applied OLAP queries on the data in MySQL to gain meaningful insights.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "etl",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "olap",
        color: "orange-text-gradient",
      },
    ],
    image: p5,
    source_code_link: "https://github.com/emad-malik/Building-and-Analysing-a-Near-Real-Time-Data-Warehouse-Prototype",
  },
];

export { services, technologies, experiences, certifications, projects };
