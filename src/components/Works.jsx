import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { projects } from '../constants'
import { fadeIn1, fadeIn, textVariant, textVariant1 } from "../utils/motion"

import { SectionWrapper } from "../hoc"

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {

  const getEffect = () => {
    return window.innerWidth > 890 ? fadeIn("up", "spring", index * 0.5, 0.75) : fadeIn1("up", "spring", index * 0.5, 0.75);
  }


  return (
    <motion.div variants={getEffect()}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px">
          <img src={image} alt="Project_image" className="w-full h-full object-cover rounded-2xl" />

          {source_code_link === "" ? "" : <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" >
              <img src={github} alt="Link" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
          }

        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (<p key={`${name}-${tag.color}`}>#{tag.name}</p>))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {

  const getVariants = () => {
    return window.innerWidth > 890 ? textVariant() : textVariant1();
  };

  const getEffect = () => {
    return window.innerWidth > 890 ? fadeIn("", "", 0.1, 1) : fadeIn1("", "", 0.1, 1);
  }

  return (
    <>

      <motion.div variants={getVariants()}>
        <p className={`${styles.sectionSubText}`}>My Works</p>
        <h2 className={`${styles.sectionHeadText}`} >Projects</h2>
      </motion.div>

      <div className="w-full flex">

        <motion.p variants={getEffect()} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>


  )
}

export default SectionWrapper(Works, "projects")