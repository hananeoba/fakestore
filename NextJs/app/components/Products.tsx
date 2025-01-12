"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const Products: React.FC = () => {
  const { data: session } = useSession();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const router = useRouter();
  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };
  useEffect(() => {
    const fetchData = async (category = "", sortOrder) => {
      try {
        setLoading(true);
        const response = await axios.get(
          category
            ? `https://fakestoreapi.com/products/category/${category}+?sort=${sortOrder}`
            : "https://fakestoreapi.com/products?sort=" + sortOrder
        );
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
        `https://fakestoreapi.com/products/category/${category}?sort=${sortOrder}`
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setLoading(false);
    }
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

  const fetchData = async (category = "", sortOrder) => {
    try {
      setLoading(true);
      const response = await axios.get(
        category
          ? `https://fakestoreapi.com/products/category/${category}?sort=${sortOrder}`
          : "https://fakestoreapi.com/products?sort=" + sortOrder
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };
  const handleAdd = () => {
    if (session) {
      router.push("/product/add");
    } else {
      toast.error("Please sign in to add a new product");
      router.push("/login");
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    fetchData(category, sortOrder);
  };

  const handleSortOrderToggle = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
    fetchData(selectedCategory, sortOrder);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl font-bold mt-8 mb-4">Products</h1>
        <div
          className="flex items-center py-1 px-2 border-secondary border rounded-md cursor-pointer shadow-lg bg-light"
          onClick={handleAdd}
        >
          <PlusIcon className="cursor-pointer w-6 h-6 text-secondary" />
          <p className="text-center text-sm pl-2">
            <span className="text-gray-600">Add a new product</span>
          </p>
        </div>
      </div>
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
        <div className="flex flex-wrap gap-4 ">
          <button
            onClick={() => handleSortOrderToggle(sortOrder)}
            className={`px-4 py-2 rounded-md text-gray-700 ${
              sortOrder === "asc" || sortOrder === "desc"
                ? "bg-primary "
                : "bg-light"
            }`}
          >
            {sortOrder === "asc" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-md p-4 bg-light border border-secondary flex flex-col justify-center items-center shadow-lg cursor-pointer"
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
