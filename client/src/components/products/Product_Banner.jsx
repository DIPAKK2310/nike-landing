import React from 'react'

const Product_Banner = () => {
  return (
    <div className="flex gap-4 overflow-x-auto mb-8">
  {["All", "Running", "Casual", "Sports", "Nike", "Adidas"].map((cat) => (
    <button
      key={cat}
      className="px-4 py-2 bg-white dark:bg-zinc-800 rounded-full whitespace-nowrap"
    >
      {cat}
    </button>
  ))}
</div>
  )
}

export default Product_Banner