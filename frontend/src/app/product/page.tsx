"use client";

import ProductCard from "@/components/productCard";

export default function ProductPage() {
  // Example product data
  const products = [
    {
      name: "Wireless Headphones",
      code: "WH123",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 199.99,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      name: "Smart Watch",
      code: "SW456",
      description: "Smart watch with heart rate monitor and GPS.",
      price: 149.99,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      name: "Gaming Mouse",
      code: "GM789",
      description: "Ergonomic gaming mouse with RGB lights.",
      price: 59.99,
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  // Dummy handleDelete function
  const handleDelete = (code: string) => {
    alert(`Delete product with code: ${code}`);
  };

  // Dummy handleEdit function
  const handleEdit = (code: string) => {
    alert(`Edit product with code: ${code}`);
  };

  // Dummy handleAdd function
  const handleAdd = (code: string) => {
    alert(`Add product with code: ${code}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
		<div className="max-w-7xl mx-auto">
			{/* Header with Add Product Button on right */}
			<div className="flex items-center justify-between mb-8">
			<h2 className="text-3xl font-bold text-gray-800">
				Products Page
			</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
        + Add Product
      </button>
      </div>
      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.code}
            name={product.name}
            code={product.code}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleAdd={handleAdd}
          />
        ))}
      </div>
    </div>
  </div>
  );
};
