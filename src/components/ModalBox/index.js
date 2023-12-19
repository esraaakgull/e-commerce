import {useContext, useState} from "react";
import DataContext from "../../contexts/DataContext";
import {toast} from "react-toastify";

const ModalBox = ({data}) => {
    const dataContext = useContext(DataContext);
    const {products, setIsDisplayedModal} = dataContext;
    const [title, setTitle] = useState(data.title)
    const [price, setPrice] = useState(data.price)
    const [description, setDescription] = useState(data.description);

    const notifySuccessful = () => toast.success('Product is updated successfully.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const handleSaveChanges = () => {
        const productToUpdate = products.find(product => product.id === data.id);
        productToUpdate.title = title;
        productToUpdate.description = description;
        productToUpdate.price = price;
        notifySuccessful()
        setIsDisplayedModal(false)
    }
    const handleClose = () => {
        setIsDisplayedModal(false)
    }

    return (
        <div className="modal-container">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <label htmlFor="title" className="pr-2 text-primary">Title:</label>
                            <input name="title" value={title} className="form-control"
                                   onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="description" className="pr-2 text-primary">Decription:</label>
                            <textarea name="description" value={description} rows="5" cols="50" className="form-control"
                                      onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="price" className="pr-2 text-primary">Price:</label>
                            <input name="price" value={price} className="form-control"
                                   onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes
                        </button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalBox;