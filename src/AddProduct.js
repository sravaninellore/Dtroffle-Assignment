import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://www.iyrajewels.com/Doctor/All/add', formData);

      // Handle successful response, e.g., update the product list
      console.log('Product added:', response.data);

      // Reset the form after successful submission
      setFormData({
        title: '',
        description: '',
        price: 0,
        category: '',
        brand: '',
        stock: 0,
        rating: 0,
        // Add default values for other fields as needed
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
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
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
