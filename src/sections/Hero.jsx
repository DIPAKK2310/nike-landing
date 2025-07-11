import React, {  useState } from 'react'
import Button from '../components/Button';
import icons from '../assets/icons'
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import {motion} from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
700
const {arrowRight} = icons;

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
   <section
   id='home'
   className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    
   >
    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>
    <h2 className='text-xl font-medium text-coral-red'> Our Summer  collection</h2>
      <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
        <span className='xl:bg-[#ECE9E2] dark:xl:bg-zinc-900 xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival </span>
        <br />
        <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
      </h1>
      <p className='font-circular text-slate-gray text-lg leading-8 font-medium  mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
      <Button label="Shop Now" iconUrl={arrowRight} />
       <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) =>(
            <div key={stat.label}>
           <AnimatedCounter value={stat.value} />
           {/* it only trigered on inview only once trigered when reload and in view then trigered */}

            <p className='leading-7font-circular text-gray-700 dark:text-gray-400'>{stat.label}</p>
               </div>
          ))}
       </div>
    </div>
          <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center dark:bg-zinc-800'>
            <motion.img 
            key={bigShoeImg}
            src={bigShoeImg} 
            alt="Shoes collection" 
            width={610} height={500} 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: 0.5,  
             }}
            className='object-contain relative z-10'
             />

           <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe)=> setbigShoeImg(shoe)} 
                bigShoeImg={bigShoeImg}/>
              </div>
            ))}
           </div>
          </div>
   </section>
  )
}

export default Hero;