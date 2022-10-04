import { Component } from "react";
import './product-card.styles.css'

class ProductCard extends Component { 
    render() {
        const { id, brand, thumbnail, title, description, price } = this.props.product
        return (
            <div className='card-container' key={id}>
                <img alt={brand} src={thumbnail} className='product-thumbnail'></img>
                <h1>{title}</h1>
                <h5>{description}</h5>
                <h4>{`${price}$`}</h4>
            </div>
        )
    }
}

export default ProductCard;