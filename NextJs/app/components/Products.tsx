"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const router = useRouter();
  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
    fetchCategories();
  }, []);

  const fetchProductsByCategory = async (category: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setLoading(false);
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };

  const handleAllProductsClick = () => {
    setSelectedCategory("");
    fetchData();
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">Products</h1>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center bg-light shadow-md border-secondary border p-1 px-3 rounded-md">
        <div className="flex flex-wrap gap-4 ">
          <button
            onClick={handleAllProductsClick}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === ""
                ? "bg-primary text-white"
                : "bg-light text-gray-700"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-light text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 rounded-md border-2 border-secondary my-2"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-md p-4 bg-light border border-secondary flex flex-col justify-center items-center shadow-lg"
              onClick={() => handleProductClick(product.id)}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                objectFit="cover"
                className="rounded-md mb-4 h-40 w-40"
              />
              <div className="text-center flex flex-col items-end">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
