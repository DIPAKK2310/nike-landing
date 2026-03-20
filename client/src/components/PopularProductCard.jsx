import  icons   from '../assets/icons'
const {star} = icons;
import { motion } from 'motion/react';


const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <motion.div className="flex flex-1 flex-col w-full max-sm:w-full "  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}>
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        {/* Rating in popular products */}
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24}/>
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
          <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
          <h3 className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</h3>
    </motion.div>
  )
}

export default PopularProductCard