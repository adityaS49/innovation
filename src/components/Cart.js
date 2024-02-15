import React from 'react';


const Cart = ({ cart }) => {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart ({cart.length})</h2>
       
      {cart.map((product, index) => (
        <div key={index} className="border-b border-gray-200 py-2">
          <p className="text-lg">
            <span className="font-semibold">{product.title}</span> - $
            {product.price}
          </p>
        </div>
      ))}
      <h3 className="mt-4 text-xl font-semibold">
        Total: $
        {cart.reduce((acc, curr) => acc + curr.price, 0)}
      </h3>
    </div>
  );
};

export default Cart;
