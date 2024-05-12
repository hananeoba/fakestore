"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  PencilIcon,
  TrashIcon,
  ShoppingCartIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { toast } from "react-toastify";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetails: React.FC<Product> = () => {
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  const productId = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const handleBack = () => {
    router.back();
  };

  const handleEdit = () => {
    router.push(`/product/${product?.id}/edit`);
  };

  const handleAdd = () => {
    router.push(`/product/add`);
  };

  const handleDelete = async () => {
    try {
      await axios
        .delete(`https://fakestoreapi.com/products/${product?.id}`)
        .then(() => {
          toast.success("Product deleted successfully");
          router.push("/");
        });
    } catch (error) {
      toast.error("Error deleting product");
      console.error("Error deleting product:", error);
    }
  };
  const handleCart = () => {
    router.push(`/cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-1">Product Details</h1>
      <div className="flex items-center justify-between mb-4">
        <button
          className="mb-4 text-gray-600 hover:underline"
          onClick={handleBack}
        >
          Back to Products
        </button>
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
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-md border border-secondary shadow-lg w-full md:w-80"
        />
        <div className="flex flex-col gap-4 md:w-1/2  md:ml-4 p-4">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <div className="flex items-center gap-2 justify-between">
            <p className="text-gray-600 text-2xl font-semibold border-secondary">
              ${product.price}
            </p>
            <p className="text-base">
              {product.rating.rate}
              <span className="text-secondary ">★</span>({product.rating.count}{" "}
              reviews)
            </p>
          </div>
          <p className="text-gray-700">
            <span className="text-secondary text-xl font-semibold">
              Category:
            </span>{" "}
            {product.category}
          </p>
          <p className="text-base">{product.description}</p>

          <div className="flex gap-4 mt-4 items-center justify-evenly">
            <div
              className="flex items-center py-1 px-2 border-secondary border rounded-md cursor-pointer shadow-lg bg-light"
              onClick={handleEdit}
            >
              <PencilIcon className="cursor-pointer w-6 h-6 text-secondary" />
              <p className="text-center text-sm pl-2">
                <span className="text-gray-600">Edit product</span>
              </p>
            </div>

            <div
            onClick={handleCart} 
            className="flex items-center py-1 px-2 border-secondary border rounded-md cursor-pointer shadow-lg bg-light">
              <ShoppingCartIcon className="cursor-pointer w-6 h-6 text-secondary" />
              <p className="text-center text-sm pl-2">
                <span className="text-gray-600">Add to cart</span>
              </p>
            </div>

            <div
              className="flex items-center py-1 px-2 border-secondary border rounded-md cursor-pointer shadow-lg bg-light"
              onClick={handleDelete}
            >
              <TrashIcon className="cursor-pointer w-6 h-6 text-secondary" />
              <p className="text-center text-sm pl-2">
                <span className="text-gray-600">Delete product</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const openEditModal = async (product: Product) => {
  return confirm(`Edit product: ${product.title}?`);
};

const handleEditFormSubmission = async () => {
  const title = prompt("Enter new title:");
  const price = prompt("Enter new price:");
  const category = prompt("Enter new category:");
  const description = prompt("Enter new description:");
  const image = prompt("Enter new image URL:");

  if (title && price && category && description && image) {
    return {
      title,
      price,
      category,
      description,
      image,
    };
  } else {
    return null;
  }
};

export default ProductDetails;
