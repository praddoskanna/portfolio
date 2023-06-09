import React from 'react'
import {motion} from 'framer-motion'
import {styles} from "../styles"
import { ComputersCanvas } from './canvas'
import {avatar} from "../assets"
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#09eae6]' style={{marginTop:"3rem"}}></div>
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
         <div style={{marginTop:"3rem"}}>
          {/* <div >  */}
              <h1 className={`${styles.heroHeadText} text-white`}>Hola, I'm <span className='text-[#09eae6]'>Praddos</span> </h1>
              <br />
              <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{lineHeight:"2"}}>
             A versatile and collaborative full stack web3 developer with a passion for building scalable and robust web applications.
              <br className='sm:block hidden' />Looking forward to learn something new every day and contribute to the industry! 
              <br /> <br /> Coding the future of Technology, one block at a time. 
              </p>
          {/* {/* </div> */}
        </div> 
      </div>
      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4  flex justify-center items-start p-2' >
          <motion.div
          animate={{y:[0,24,0] }}
          transition={{duration:1.5,repeat: Infinity, repeatType: 'loop'}}
          className="w-3 h-3 rounded-full bg-white mb-1"
          >
          </motion.div>
          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero
