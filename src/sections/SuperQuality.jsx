import { shoe8 } from "../assets/images"
import Button from "../components/Button"
import { motion,useInView } from "framer-motion"
import  { useRef } from "react"


const SuperQuality = () => {
   const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  return (
    <section
     id="about-us"
     className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
     initial="hidden" animate={["visible", "active"]}
     >
      
      <motion.div className="flex flex-1 flex-col" initial={{ opacity: 0, x: -100 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5 }}>
          <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
        We Provide You
        <span className='text-coral-red '> Super</span> 
        <span className='text-coral-red '> Quality</span> Shoes
      </h2>
      <p className='mt-4 lg:max-w-lg font-circular text-slate-gray text-lg leading-7 font-medium'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you  with unmatched quality, innovation, and a touch of elegance.</p>
      <p className="mt-6 lg:max-w-lg font-circular text-slate-gray text-lg leading-7 font-medium">Our dedication to detail and excellence ensure your satisfaction</p>
      <div className="mt-11">
        <Button label="View details"  />
      </div>

      </motion.div>
      
      {/* Shoe Image Right */}
      <motion.div className="flex-1 flex justify-center items-center"  ref={ref}
  initial={{ opacity: 0, x: 100 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5 }}>
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </motion.div>
     </section>
  )
}

export default SuperQuality