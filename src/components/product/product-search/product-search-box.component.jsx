import { Component } from "react";
import './product-search-box.styles.css'

class ProductSearchBox extends Component { 
    render() { 
        return (
            <div>
                <input
                    className={`search-box ${this.props.className}`}
                    type='search'
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                ></input>
            </div>
        )
    }
}

export default ProductSearchBox;