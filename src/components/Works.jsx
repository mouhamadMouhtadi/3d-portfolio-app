import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constansts";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_Code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_Code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary font-normal text-[14px] mt-1">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work . Each project is briefly described
          with links to code repsitories and live demos in it. It reflects my
          ability to solve complex problems , work with defferent technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
