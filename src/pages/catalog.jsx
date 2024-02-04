import Products from "../components/products";
import DataService from "../services/dataService";
import "./catalog.css";
import { useEffect, useState } from "react";



function Catalog(){

    const [productState,setProducts] = useState ([]);

useEffect(function (){
    console.log("component is loaded");
    loadCatalog();
}, []
    );

    function loadCatalog(){
        let service = new DataService();
        let products = service.getProducts();
        setProducts(products);
        console.log(products);
    }

    return (
        <div>
            <h1>Look at my {productState.length} awesome products</h1>
            {productState.map(p=> <Products data={p}></Products>)}
        </div>
        

    );
}
export default Catalog;
