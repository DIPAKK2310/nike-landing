import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <motion.div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'
        whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
    >
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
            {label}
        </h3>
        <p className='mt-3 break-words font-circular text-slate-gray text-lg leading-7 font-medium '>{subtext}</p>
    </motion.div>
  )
}

export default ServiceCard