import React from 'react';

type ProductCardProps = {
  name: string;
  code: string;
  description: string;
  price: number;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, code, description, price, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <h4 className="text-sm text-gray-500">Code: {code}</h4>
        <p className="text-gray-700">{description}</p>
        <h3 className="text-blue-600 font-semibold mt-2">rs {price.toFixed(2)}</h3>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
