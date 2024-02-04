import "./products.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Products(props){

    useEffect(function(){

        console.log("Hello I am a product");

    },[]);
    return (
        <div className="products">
            <img src={"/images/"+ props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>
            <h5>{props.data.price}</h5>
            <QuantityPicker></QuantityPicker>
        </div>

    );
}
export default Products;