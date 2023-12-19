import Products from "./components/Products";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div>
            <Products/>
            <ToastContainer/>
        </div>
    );
}

export default App;
