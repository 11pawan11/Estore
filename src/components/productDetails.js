import React from "react";
import { getProductById } from "../fetcher";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetail = () => {
    const [products, setProducts] = useState({errorMessage:'', data: []});
    const { productId } = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(productId);
            setProducts(responseObject);
        };
        fetchData();
    }, [productId]);


    return(
        <div> ProductDetail  id:{productId} title:{products.data.title}</div>
    )
}
export default ProductDetail
