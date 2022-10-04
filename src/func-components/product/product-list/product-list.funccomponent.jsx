import ProductCard from './product-card/product-card.funccomponent';
import './product-list.styles.css'

const ProductList = ({ products }) => {
    // const { products } = props
    // console.log(products)
    return (
        <div className='card-list'>
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    )
}
    
export default ProductList;