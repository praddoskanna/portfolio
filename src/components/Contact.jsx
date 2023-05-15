import {useState,useRef} from 'react'
import {motion} from "framer-motion"

import emailjs from "@emailjs/browser";

import {styles} from "../styles";
import { EarthCanvas } from './canvas';

import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import {FaTelegram} from "react-icons/fa"
import {AiFillLinkedin,AiFillTwitterCircle} from "react-icons/ai"
import {BsFillSendFill} from "react-icons/bs"

const Contact = () => {
  

  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {target} = e;
    const {name, value} = e.target;
    setForm({...form,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_n4ya18a",
      "template_al272d7",
      {
        from_name: form.name,
        to_name: "Praddos",
        from_email: form.email,
        to_email: "praddos.web3@gmail.com",
        message: form.message,
      },
      "_HhAeJr0KISOdB8zJ"
      ).then(() => {
        setLoading(false);
        alert("Thanks for Reaching me out ✌️")
        setForm({
          name:'',
          email: '',
          message: ''
        })
      },(error) => {
        setLoading(false)
        console.log(error);
        alert("Something went wrong. ")
      })
  }
  
  return (
   
    <div className='xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left","tween",0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form action="" 
            ref={formRef} 
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
            >
              <label className='flex flex-col' >
                <span className='text-white font-medium mb-4'>Your Name <span style={{color:"cyan"}}>*</span></span>
              </label>
              <input type="text" 
                  name="name" value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="What's your name ?"  
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
              <label className='flex flex-col' >
                <span className='text-white font-medium mb-4'>Your Email <span style={{color:"cyan"}}>*</span></span>
              </label>
              <input type="email"  required
                  name="email" value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email ?"  
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              /> 
              <label className='flex flex-col' >
                <span className='text-white font-medium mb-4'>Your Message <span style={{color:"cyan"}}>*</span></span>
              </label>
              <textarea rows="7" required
                  name="message" value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say ?"  
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            <div className='flex justify-between items-center'>
                  <div className='sm:grid-cols-12'>
                      <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'> 
                      {loading ? "Sending ..." : 
                      <div className='flex ' style={{alignItems:"center"}}>
                      <span >Send &nbsp;</span><BsFillSendFill style={{alignItems:"center"}}/>
                      </div>}
                      </button>
                  </div>
                  <div className="icons ">
                      <a href="https://www.linkedin.com/in/praddoskanna/" target="_blank">
                      <AiFillLinkedin className="icon" style={{borderRadius:"20px"}}/>
                      </a>
                      <a href="https://twitter.com/Pradosh28" target="_blank">
                      <AiFillTwitterCircle className="icon" />
                      </a>
                      <a href="https://t.me/Pradosh28" target="_blank">
                      <FaTelegram className="icon" />
                      </a>
                  </div>
          </div>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right","tween",0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      <EarthCanvas />
      </motion.div>
    </div>

  )
}

export default SectionWrapper(Contact,"contact")