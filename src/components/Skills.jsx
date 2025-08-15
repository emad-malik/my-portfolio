import React, { useRef, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const headingRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Heading Animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Skills Animation
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  const skills = [
    {
      title: "Machine Learning",
      tools: "Scikit-learn, TensorFlow, PyTorch, XGBoost"
    },
    {
      title: "Data Analysis",
      tools: "Pandas, NumPy, Excel, Jupyter Notebook"
    },
    {
      title: "Data Engineering",
      tools: "Apache Airflow, Apache Spark, Hadoop, SQL"
    },
    {
      title: "Data Mining and Warehousing",
      tools: "SQL, NoSQL (MongoDB), ETL pipelines, Data Lakes"
    },
    {
      title: "Natural Language Processing",
      tools: "NLTK, SpaCy, Transformers (Hugging Face), Gensim"
    },
    {
      title: "Computer Vision",
      tools: "OpenCV, YOLO, TensorFlow Object Detection API"
    }
  ];

  return (
    <section id="skills" className="mt-20">
      <div ref={headingRef} className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
        <p className="text-secondary text-lg">Technical expertise and tools I work with</p>
      </div>
      
      <div ref={skillsRef} className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card bg-tertiary rounded-[20px] p-6 border border-gray-700 hover:border-[#915EFF] transition-all duration-300 hover:shadow-lg hover:shadow-[#915EFF]/20"
            >
              <div className="skill-title text-white text-xl font-bold mb-3">
                {skill.title}
              </div>
              <div className="skill-tools text-secondary text-sm leading-relaxed">
                {skill.tools}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills"); 