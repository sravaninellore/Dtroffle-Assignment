import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDetails({ match }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productId = match.params.id;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.iyrajewels.com/Doctor/All/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>Title: {product.title}</p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      {/* Add more product details */}
      <p>Brand: {product.brand}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      {/* Add more details here */}
    </div>
  );
}

export default ProductDetails;
