import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1 )}
      className="flex-[0.75] bg-black-100 p-8 rounded=2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <h3 className={`${styles.heroSubText}`}>Suzanne John</h3>
        <p>#363 Charis, 9th Cross, Vadarapalya, Horamavu Agara, Bengaluru 560043</p>
        <p>GitHub Repository: <a href="https://github.com/suzie02">suzie02</a></p>
        <p>Phone Number: +91 9538635470</p>
          <p>email: sj.ellie16@gmail.com  liz.suzanne21@gmail.com</p>
        
        <div className="flex flex-row justify-between">
          <a href="https://www.instagram.com/_suzannejohn_/" target="_blank"><img src="icons/insta.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.linkedin.com/in/Suzanne John/" target="_blank"><img src="icons/linkdin.svg" className="mt-2 h-10 v-10" /></a>
          
          
        </div>  
      </motion.div>      
      <div>      
      </div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1 )}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />


      </motion.div>

      


    </div>
  )
}

export default SectionWrapper(Contact, "contact")