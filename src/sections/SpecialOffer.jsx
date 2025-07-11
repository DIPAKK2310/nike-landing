
import Button from '../components/Button'
import { offer } from '../assets/images'
import icons from '../assets/icons'
const {arrowRight, learnmore} = icons;

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      {/* Image */}
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full' />
      </div>
      {/* Text/button/p */}
         <div className="flex flex-1 flex-col ">
          <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
      
        <span className='text-coral-red '> Special</span> Offer 
      </h2>
      <p className='mt-4 lg:max-w-lg font-circular text-slate-gray text-lg leading-7 font-medium'>Embark on a shopping journey that redifines your experience with unbeatble deals. From premier selections to incredible savings. We offer unparalleled value that sets us apart</p>
      <p className="mt-6 lg:max-w-lg font-circular text-slate-gray text-lg leading-7 font-medium">Navigate a realm of possibilities designed to fulfill your unique desires, suprassing the lotiest expectations. Your journey with us is nothing short of exceptional</p>
      <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconURL={arrowRight} />
        <Button label="Learn more"   
                backgroundColor="bg-white" 
                borderColor="border-slate-gray"
                textColor="text-slate-gray"
             iconURL={learnmore} />
         </div>

      </div>
    </section>
  )
}

export default SpecialOffer