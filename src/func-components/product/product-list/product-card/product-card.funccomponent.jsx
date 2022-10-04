import './product-card.styles.css'

const ProductCard = ({product}) => { 
    const { id, brand, thumbnail, title, description, price } = product
    return (
        <div className='card-container' key={id}>
            <img alt={brand} src={thumbnail} className='product-thumbnail'></img>
            <h1>{title}</h1>
            <h5>{description}</h5>
            <h4>{`${price}$`}</h4>
        </div>
    )
}

export default ProductCard;