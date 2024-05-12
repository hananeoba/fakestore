"use client"
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const EditProduct: React.FC = () => {
  const router = useRouter();
  const { id } = useParams(); 
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Error loading product details");
        router.push("/");
      }
    };

    fetchProduct();
  }, [id, router]);

  const handleEditProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!product) return; 

    setIsLoading(true);

    const editedProduct = {
        id: product.id,
        title: (event.currentTarget.elements.namedItem("title") as HTMLInputElement).value,
    price: (event.currentTarget.elements.namedItem("price") as HTMLInputElement).value,
    category: (event.currentTarget.elements.namedItem("category") as HTMLInputElement).value,
    description: (event.currentTarget.elements.namedItem("description") as HTMLInputElement).value,
    image: (event.currentTarget.elements.namedItem("image") as HTMLInputElement).value,
  };

    try {
      const response = await axios.put(`https://fakestoreapi.com/products/${id}`, editedProduct);
        if (response.status === 200) {
            toast.success("Product updated successfully");
            router.push(`/product/${id}`);
        } else {
            toast.error("Error updating product");
        }
    } catch (error) {
        console.error("Error updating product:", error);
        toast.error("Error updating product");
        } finally {
        setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.push(`/product/${id}`); // Redirect back to product details
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Edit Product</h1>
      <form onSubmit={handleEditProduct}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-base font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={product.title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-teal-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-base font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={product.price}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-teal-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-base font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            defaultValue={product.category}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-teal-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-base font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={product.description}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-teal-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-base font-bold mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            defaultValue={product.image}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-teal-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-teal-500 focus:ring-opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-secondary hover:bg-blue-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-teal-500 focus:ring-opacity-50"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
