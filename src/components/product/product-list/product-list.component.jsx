import { Component } from 'react';

class ProductList extends Component {
    
    render() { 
        const { products } = this.props
        console.log(products)
        return (
            <div>
                <div>
                    {products.map((product) => { 
                        return <div key={product.id}>
                            <h5>{product.title}</h5>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default ProductList;