import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateProduct({ productId }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    category: '',
    brand: '',
    stock: 0,
    rating: 0,
    // Add more fields as needed
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.iyrajewels.com/Doctor/All/${productId}`);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://www.iyrajewels.com/Doctor/All/${productId}`, formData);

      // Handle successful response, e.g., show a success message
      console.log('Product updated:', response.data);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        {/* Add more form fields for other product details */}
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
