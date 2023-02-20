import "./App.css";
import React, { useState } from "react";

const ProductList = ({ products }) => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFilters([...filters, name]);
    } else {
      setFilters(filters.filter((filter) => filter !== name));
    }
  };

  const filteredProducts = products.filter((product) => {
    if (filters.length === 0) {
      return true;
    }
    return filters.includes(product.type);
  });

  const types = [...new Set(products.map((product) => product.type))];

  return (
    <div>
      <h2>Product List</h2>
      <ul class="filter">
        {types.map((type) => (
          <li key={type}>
            <label>
              <input
                type="checkbox"
                name={type}
                checked={filters.includes(type)}
                onChange={handleFilterChange}
              />
              {type}
            </label>
          </li>
        ))}
      </ul>
      <h3>Filtered Products</h3>
      <ul class="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
