import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Product List</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/add-product">Add Product</a>
          </nav>
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/update-product/:id" component={UpdateProduct} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
