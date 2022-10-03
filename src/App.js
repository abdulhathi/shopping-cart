import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/product/product-list/product-list.component';
import ProductSearchBox from './components/product/product-search/product-search-box.component';

class App extends Component {
  constructor() { 
    super();

    this.state = {
      products: [],
      searchValue: ''
    }
  }
  componentDidMount() { 
    fetch('http://dummyjson.com/products')
      .then(response => response.json())
      .then(products =>
        this.setState(
          () => { 
        return {products: products.products}
      }))
  }
  render() {
    const { products, searchValue } = this.state
    
    return (
      <div className="App">
        <ProductSearchBox products={ products } />
        <ProductList products={products} />
      </div>
    );
  }
}

export default App;
