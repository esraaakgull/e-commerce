import React, {Component} from "react";
import Product from "../Product";
import DataContext from "../../contexts/DataContext";
import ModalBox from "../ModalBox";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            willUpdateProduct: {}
        };
    }

    setWillUpdateProduct = (product) => {
        this.setState({willUpdateProduct: product});
    }

    render() {
        const {products, isDisplayedModal, setIsDisplayedModal} = this.context;
        const {willUpdateProduct} = this.state;

        return (
            <>
                {isDisplayedModal && <ModalBox data={willUpdateProduct}/>}
                <div className="productList">
                    <h1>Product List</h1>
                </div>
                <div className="productsContainer">
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            product={product}
                            setWillUpdateProduct={this.setWillUpdateProduct}
                            setIsDisplayedModal={setIsDisplayedModal}
                        />
                    ))}
                </div>
            </>
        );
    }
}

Products.contextType = DataContext;

export default Products;
