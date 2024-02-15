import React from 'react';

const Cart = ({ cart }) => {
  // Function to format price with commas for thousands separator
  const formatPrice = (price) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h2>
       
      {cart.map((product, index) => (
        <div key={index} className="border-b border-gray-200 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <img src={product.thumbnail} alt={product.title} className="w-16 h-16 object-contain mr-4" />
            <div>
              <p className="text-lg font-semibold">{product.title}</p>
              <p className="text-gray-600">${formatPrice(product.price)}</p>
            </div>
          </div>
         
        </div>
      ))}
      
      <h3 className="mt-4 text-xl font-semibold">
        Total: ${formatPrice(cart.reduce((acc, curr) => acc + curr.price, 0))}
      </h3>
      <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
