import ProductCard from "@/components/productCard";

export default function ProductsPage() {
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

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Products Page
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome to the Products Page! Here you can browse and manage your products.
        </p>
        {/* Grid of Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              code={product.code}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
