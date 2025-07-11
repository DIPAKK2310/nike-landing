

const Button = ({label, iconURL, backgroundColor = 'bg-coral-red',
  textColor = 'text-white',
  borderColor = 'border-coral-red',fullWidth
        }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidth && 'w-full'} ${backgroundColor} ${textColor} ${borderColor}  hover:opacity-90 transition`}>
    {label}
   {iconURL && <img src={iconURL} alt="arrow right icon" 
     className='ml-2 rounded-full  h-5'
    />}
    </button>
  )
}

export default Button;