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
        I'm a full-stack developer with a passion for building things for the
        web. JavaScript is where I feel most at home, and I enjoy working across
        the entire stack, from creating clean, responsive interfaces with React,
        Next.js and Vue.js to building backend applications with Node.js, APIs,
        databases and authentication.
        <br />
        <br />
        I graduated about a year ago, and since then life has taken me in a
        slightly different direction than I originally planned. After moving to
        a new city, I needed to focus on finding work and getting settled, which
        led me to my current job as a fitter. It's been a different experience,
        but a fun one. Now that things have started to settle down, I'm looking
        forward to getting back into development and finding new opportunities
        to grow.
        <br />
        <br />
        During my studies, I gained hands-on experience through an internship
        where I got to work on super fun and real projects. I even based my
        thesis on the cybersecurity aspects of one of those applications, which
        gave me a deeper appreciation for building software that's not only
        functional but also secure and reliable.
        <br />
        <br />
        I'm naturally curious and enjoy figuring things out, learning new
        technologies and finding better ways to solve problems. At the end of
        the day, I just enjoy building things, solving problems and seeing an
        idea turn into something real.
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
