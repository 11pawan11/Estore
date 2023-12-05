import React from "react";
import { getProductById } from "../fetcher";
import { useParams } from "react-router-dom";


const ProductDetail = ({title}) => {
    const [products, setProduct] = React.useState({errorMessage:'', data: []});
    const { productId } = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(productId);
            setProduct(responseObject);
        };
        fetchData();
    }, [productId]);

    // useEffect(()=>{
    //     console.log("Here is your products");
    //     console.log(products);
    // },[products])

    return(
        
        <div> ProductDetail  id:{productId} title:{products.title}</div>
    )
}
export default ProductDetail;
