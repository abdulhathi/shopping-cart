import './App.css'
import ProductSearchBox from './func-components/product/product-search/product-search-box.funccomponent';
import { useState, useEffect } from 'react';
import ProductList from './func-components/product/product-list/product-list.funccomponent';

const AppFunctionalComponent = () => { 
    const [searchValue, setSearchValue] = useState('') // value, setValue
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(products)
    // console.log('Render')

    useEffect(() => { 
        fetch('http://dummyjson.com/products')
            .then((response) => response.json())
            .then((products) => setProducts(products.products)
        )
    }, [])

    useEffect(() => { 
        const newFilteredProducts = products.filter((product) => { 
            return product.title.toLocaleLowerCase().includes(searchValue)
        }) 
        setFilteredProducts(newFilteredProducts)
    }, [products, searchValue])

    const onSearchChange = (event) => { 
        setSearchValue(event.target.value.toLocaleLowerCase())
        // console.log(searchValue)
    }

    return (
        <div className='App'>
            <h1>Shopping Cart</h1>
            <ProductSearchBox onChangeHandler={onSearchChange} />
            <ProductList products={filteredProducts} />
        </div>
    )
}

export default AppFunctionalComponent;