import React from 'react'

const ProductCard = ({thumbnail,title,description,price,addToCart}) => {
  return (
    <div
            className="max-w-72 flex flex-col items-center justify-center min-w-4 mx-auto bg-white shadow-lg"
         
          >
            <div>
              <img
                className="w-full h-56"
                src={thumbnail}
                alt="Phone"
              />
            </div>
      
            <div className="px-4 py-4">
              <h2 className="text-gray-800 text-xl font-semibold">
                {title}
              </h2>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>
            <div className="flex items-center w-full p-2 justify-between">
              <div>
                <p className="text-black font-semibold">${price}</p>
              </div>
              <div>
                <button onClick={addToCart} className="px-3 py-3 bg-green-700 text-white text-xs font-bold uppercase rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
  )
}

export default ProductCard
