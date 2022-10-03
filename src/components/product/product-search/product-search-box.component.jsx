import { Component } from "react";

class ProductSearchBox extends Component { 
    onSearchChange = (event) => { 
        console.log(event.target.value)
    }
    render() { 
        const { onSearchChange } = this
        const { products } = this.props
        return (
            <div>
                <input className="search-box"
                    type='search' placeholder='Search product'
                    onChange={onSearchChange}
                ></input>
            </div>
        )
    }
}

export default ProductSearchBox;