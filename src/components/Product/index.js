import {useContext} from "react";
import DataContext from "../../contexts/DataContext";
import {toast} from 'react-toastify';

const Product = ({product, setWillUpdateProduct}) => {
    const dataContext = useContext(DataContext);
    const {products, setIsDisplayedModal} = dataContext;
    const notifySuccessful = () => toast.success('The deletion was successful.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notifyError = () => toast.error('Couldnt deleted.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const handleEditProduct = (product) => {
        setWillUpdateProduct(product)
        setIsDisplayedModal(true)
    }
    const handleDeleteProduct = (id) => {
        try {
            const filteredProductList = products.filter((item) => item.id !== id)
            dataContext.setProducts(filteredProductList)
            notifySuccessful()
        } catch (e) {
            notifyError()
            console.log(e)
        }
    }

    return (
        <div className="card">
            <div><img src={product.image} alt={product.category} className="productImage"/></div>
            <div className="title">
                <p>{product.title}</p>
            </div>
            <div className="price">
                <h3>{`${product.price} ₺`}</h3>
            </div>
            <div className="buttons">
                <div className="deleteButton" onClick={() => handleDeleteProduct(product.id)}>Delete</div>
                <div className="editButton" onClick={() => handleEditProduct(product)}>Edit</div>
            </div>
        </div>)
}
export default Product