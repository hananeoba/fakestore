"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image';


interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const ProductDetails: React.FC<Product> = () => {
  const router = useRouter();
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null);

  const productId = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
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

  return (
    <div className="container mx-auto px-4 py-8">
      <button className="mb-4 text-blue-500 hover:underline" onClick={handleBack}>
        Back to Products
      </button>
      <div className="flex flex-col md:flex-row gap-4">
        <Image src={product.image} alt={product.title} width={400} height={400} />
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-gray-700">{product.category}</p>
          <p className="text-base">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

// export async function getStaticProps(context: { params: { productId: string } }) {
//   const { params } = context;
//   const productId = params.productId;

//   const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
//   const product = response.data;

//   return {
//     props: { product },
//   };
// }

export default ProductDetails;
