import { Component } from 'react';
import ProductCard from './product-card/product-card.component';
import './product-list.styles.css'

class ProductList extends Component {
    
    render() { 
        const { products } = this.props
        // console.log(products)
        return (
            <div className='card-list'>
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        )
    }
}

export default ProductList;