import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.iyrajewels.com/Doctor/All/?q=${searchTerm}&page=${page}`);
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, page]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={products.length === 0}>
        Next
      </button>
    </div>
  );
}

export default ProductList;
