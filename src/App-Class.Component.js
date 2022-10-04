import { Component } from 'react';
import './App.css';
import ProductList from './components/product/product-list/product-list.component';
import ProductSearchBox from './components/product/product-search/product-search-box.component';

class AppClassComponent extends Component {
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
  onSearchChange = (event) => { 
    const searchValue = event.target.value.toLocaleLowerCase()
    this.setState(() => { return {searchValue} })
  }

  render() {
    const { products, searchValue } = this.state
    const { onSearchChange } = this

    const filteredProducts = products.filter((product) => { 
      return product.title.toLocaleLowerCase().includes(searchValue)
    })

    return (
      <div className="App">
        <h1>Shopping Cart</h1>
        <ProductSearchBox
          onChangeHandler={onSearchChange}
          className="product-search-box"
          placeholder='Search product' />
        <ProductList products={filteredProducts} />
      </div>
    );
  }
}

export default AppClassComponent;
