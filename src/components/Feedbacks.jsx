import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CertificationCard = ({ index, name, url }) => {
  // Use a `ref` to apply GSAP animations
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // Add the ScrollTrigger animation with GSAP
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Initial position off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom", // Trigger when the top of the element reaches the bottom of the viewport
          end: "top center",   // End the animation when the top reaches the center
          scrub: true,         // Link the animation progress to the scroll position
          markers: false,      // Set to true if you want to see the markers for debugging
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full hover:bg-black-300 transition-colors duration-300"
    >
      <div className="text-center">
        <div className="text-[#915EFF] text-4xl mb-4">
          🏆
        </div>

        <div className="mt-1">
          <h3 className="text-white font-bold text-[20px] mb-4">{name}</h3>

          <div className="mt-7 flex justify-center">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#915EFF] hover:bg-[#7c4dff] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 hover:shadow-lg hover:shadow-[#915EFF]/30"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>Professional Development</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-items-center`}
      >
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.name} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
