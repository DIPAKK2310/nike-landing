import React, { useState } from 'react'
import { navLinks } from '../constants'
import { headerLogo } from '../assets/images'
import icons from '../assets/icons'
 import { Sun, Moon } from "lucide-react"; // if you use lucide icons
// import Theme_Toggle from '../components/Theme_Toggle';
import {motion} from 'framer-motion'
const { hamburger } = icons;
const Navbar = ({className = ""}) => {
  const [isDark, setisDark] = useState(false)  //Not changes the dark/white only for visuals
  return (
   <header className='padding-x py-8 absolute z-10 w-full '>
    <nav className='flex justify-between items-center max-container'>
        {/* Logo */}
        <a href="/" >
         <img 
          src={headerLogo}
         alt="Logo" width={130} height={29} />

         {/* Nav links  */}
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
            {navLinks.map((item) => (
              <li key={item.label} 
               whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              >
                  <a 
                  href={item.href}
                  className='font-extralight  leading-normal text-black  text-xl hover:text-white-400 hover:bg-zinc-900 rounded-full px-4 py-1 '
                  >
                  {item.label}
                  
                  </a>
              </li>
            ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
        {/* < Theme_Toggle /> */}


        {/* Toggle */}
         <button
        onClick={() => setisDark(!isDark)}
        className={`relative flex items-center w-14 h-8 rounded-full p-1
                   bg-coral-red dark:bg-red-400 ${className} border-none`}
     >
       {/* sliding knob */}
       <motion.span
         layout
         transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-6 h-6 rounded-full bg-white dark:bg-black grid place-items-center text-yellow-400 dark:text-blue-300"
         style={{ x: isDark ? "calc(100% - 1.5rem)" : 0 }} /* 1.5rem = knob */
       >
        { isDark? <Moon size={14} /> : <Sun size={14} />}
       </motion.span>
    </button>
  
    </nav>
   </header>
  )
}

export default Navbar