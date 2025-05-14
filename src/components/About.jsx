import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center  ">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 color-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I am a dedicated fullstack JavaScript developer currently in the final
        stage of my studies, specializing in modern web development. As part of
        my education, I am completing my internship,
        gaining hands-on experience in real-world projects. By the end of May, I
        will begin working on my thesis, marking the final step toward
        completing my studies. I am passionate about building user-friendly,
        responsive, and scalable web applications. With expertise in JavaScript,
        React, Node.js, and modern frameworks like Next.js and Vue.js, I strive
        to create seamless and intuitive digital experiences. My skills also
        extend to backend development, working with databases, APIs, and
        authentication systems to deliver robust fullstack solutions. Eager to
        continuously learn and grow, I am looking forward to applying my
        knowledge in a professional environment, contributing to innovative
        projects, and expanding my expertise in software development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
