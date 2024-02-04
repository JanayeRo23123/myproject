import "./products.css";
import QuantityPicker from "./quantityPicker";

function Products(){
    return (
        <div className="products">
            <img src="https://picsum.photos/160/220" alt=""></img>
            <h5>Hello I am a product</h5>
            <QuantityPicker></QuantityPicker>
        </div>

    );
}
export default Products;