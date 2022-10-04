import './product-search-box.styles.css'

const ProductSearchBox = ({ className, placeholder, onChangeHandler }) => {
    return (
        <div>
            <input
                className={`search-box ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}
            ></input>
        </div>
    )
}

export default ProductSearchBox;