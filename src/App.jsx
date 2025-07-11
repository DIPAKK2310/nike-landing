

import { Hero,PopularProducts,Services,SuperQuality,SpecialOffer,CustomerReviews,Subscribe,Footer} from './sections'
import Navbar from './components/Navbar'


const App = () => {
 
   
  return (
    <>
    <main className="relative bg-[#ECE9E2] text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300" id="main-container" >
      <Navbar /> 
      <section className='xl:padding-l wide:padding-r padding-b '>
        <Hero />
      </section>
      <section className='padding bg-[#ECE9E2]'>
        <PopularProducts />
      </section>
      <section className='padding bg-[#ECE9E2]'>
       < SuperQuality />
      </section>
      <section className='padding-x py-10 bg-[#ECE9E2]'>
     < Services />
      </section>
      <section className='padding bg-[#ECE9E2]'>
      < SpecialOffer/>
      </section>
      <section className='bg-[#ECE9E2] padding '>
      < CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full '>
      < Subscribe />
      </section>
      <section className='bg-[#212121] padding-x padding-t pb-8'>
       < Footer /> 
      </section>
    </main>
    </>
  )
}

export default App