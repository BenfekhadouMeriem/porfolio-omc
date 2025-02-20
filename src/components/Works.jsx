import React, { useState, useEffect } from "react";  
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags = [], image, demoLink = [], source_code_link, github }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = (e) => {
    if (e.target.id === "modal-background") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Empêche le scroll derrière le modal
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Nettoyage
    };
  }, [showModal]);
  
  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onClick={() => setShowModal(true)}
        className="cursor-pointer"
      >
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg relative'
        >
          <div className='relative w-full h-[230px] rounded-2xl overflow-hidden'>
            <img src={image} alt='project_image' className='w-full h-full object-cover' />
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>

      {showModal && (
        <div 
          id="modal-background" 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" 
          onClick={closeModal}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-700 p-6 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l'intérieur
          >
            {/* Bouton de fermeture */}
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-3 right-3 text-2xl font-bold text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
            
            {/* Nom et description */}
            <h2 className='text-white font-bold text-[24px] text-center'>{name}</h2>
            <p className='mt-2 text-gray-300 text-[16px] text-center'>{description}</p>

            {/* Section des démos */}
            {demoLink.length > 0 && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {demoLink.map((link, idx) => (
                  <Tilt key={idx} options={{ max: 25, scale: 1.05, speed: 400 }} className='bg-gray-800 p-2 rounded-lg shadow-lg relative'>
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                      <div
                        onClick={() => window.open(link.url, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                      >
                        <img
                          src={github}
                          alt='GitHub'
                          className='w-1/2 h-1/2 object-contain'
                        />
                      </div>
                    </div>
                    <p className="text-white text-center font-semibold mb-2">{link.label}</p>
                    <iframe 
                      src={link.url} 
                      className="w-full h-[250px] rounded-lg" 
                      title={`${name}-demo${idx + 1}`} 
                      allowFullScreen
                    ></iframe>
                  </Tilt>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Our Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects & Challenges.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Showcasing our club’s achievements through real-world projects and challenges. Each project includes a brief description with links to live demos.
          <br />
          These projects highlight our ability to:
          <ul className='list-disc ml-5'>
            <li>Solve complex technical problems.</li>
            <li>Work with modern technologies.</li>
            <li>Collaborate effectively and manage innovative projects.</li>
          </ul>
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");