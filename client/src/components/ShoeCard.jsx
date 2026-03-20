

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
    const handleClick = ()=> {
        if (bigShoeImg !== imgURL.bigShoe)
            {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
  <div className="">
    <img src={imgURL.thumbnail} 
      alt="Shoe Collection" 
      width={127} height={103} 
      className="object-contain" 
      />
  </div>
    </div>
  )
}

export default ShoeCard;