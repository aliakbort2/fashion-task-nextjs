"use client";
import React, { useEffect, useState } from "react";
const ProductDetailsPage = ({ params }) => {
  // Unwrap the params Promise using React.use()
  const [id, setId] = useState(null); // Updated state for `id`

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params; // Resolve the promise
      setId(resolvedParams.id); // Set the id after resolving
    };
    resolveParams();
  }, [params]); // Dependency on `params`

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/${id}`
        );
        const data = await res.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  console.log(product);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Product Details Page</p>
    </div>
  );
};

export default ProductDetailsPage;
